"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ImpossibleTriangle } from "../common/ImpossibleTriangle";

interface FrameData {
  progress: number;
  pShape: number;
  pZoom: number;
}

function mountPenroseScene(
  section: HTMLElement,
  stickyContainer: HTMLElement,
  options: {
    transparent?: boolean;
    onFrame?: (data: FrameData) => void;
  } = {}
) {
  const { transparent = true, onFrame } = options;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: transparent });
  } catch {
    section.dataset.webgl = "no";
    return () => {
      delete section.dataset.webgl;
    };
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  if (transparent) {
    renderer.setClearColor(0x000000, 0);
  } else {
    renderer.setClearColor(0xf4f5f7, 1);
  }
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.domElement.setAttribute("aria-hidden", "true");
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.inset = "0";
  renderer.domElement.style.zIndex = "1";
  stickyContainer.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  const paperColor = new THREE.Color(0xf4f5f7);
  const inkColor = new THREE.Color(0x101113);
  if (!transparent) {
    scene.background = paperColor.clone();
  }

  // Materials: dark metallic cubes and signature cobalt blue accent cube
  const darkMaterial = new THREE.MeshStandardMaterial({
    color: 0x131316,
    roughness: 0.32,
    metalness: 0.6,
  });
  const blueMaterial = new THREE.MeshStandardMaterial({
    color: 0x0a5cff,
    roughness: 0.5,
    metalness: 0.1,
  });
  const boxGeom = new THREE.BoxGeometry(1, 1, 1);

  // 3D coordinates for the 3 branches of the isometric Penrose triangle
  const g: [number, number, number][] = [];
  for (let e = 0; e <= 6; e++) g.push([e, 0, 0]);
  for (let e = 1; e <= 6; e++) g.push([6, e, 0]);
  for (let e = 1; e <= 6; e++) g.push([6, 6, e]);

  const centerOfMass = new THREE.Vector3();
  g.forEach(([x, y, z]) => centerOfMass.add(new THREE.Vector3(x, y, z)));
  centerOfMass.multiplyScalar(1 / g.length);

  // Target window/ring coordinates for transition
  const w: [number, number][] = [];
  for (let e = 0; e <= 5; e++) w.push([e, 0]);
  for (let e = 1; e <= 5; e++) w.push([5, e]);
  for (let e = 4; e >= 0; e--) w.push([e, 5]);
  for (let e = 4; e >= 1; e--) w.push([0, e]);

  const targetPositions = w.map(
    ([x, yCoord]) => new THREE.Vector3(x - 2.5, yCoord - 2.5 + 0.3, 0)
  );

  const group = new THREE.Group();
  scene.add(group);

  interface CubeData {
    m: THREE.Mesh;
    from: THREE.Vector3;
    to: THREE.Vector3;
    spawned?: boolean;
  }

  const cubes: CubeData[] = [];
  g.forEach(([x, yCoord, z], idx) => {
    const mesh = new THREE.Mesh(boxGeom, idx === 0 ? blueMaterial : darkMaterial);
    const pos = new THREE.Vector3(x - centerOfMass.x, yCoord - centerOfMass.y, z - centerOfMass.z);
    mesh.position.copy(pos);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    cubes.push({ m: mesh, from: pos, to: targetPositions[idx] || new THREE.Vector3() });
  });

  // Extra spawned corner cube
  {
    const last = cubes[cubes.length - 1];
    const spawnedMesh = new THREE.Mesh(boxGeom, darkMaterial);
    spawnedMesh.position.copy(last.from);
    spawnedMesh.castShadow = true;
    spawnedMesh.receiveShadow = true;
    spawnedMesh.scale.setScalar(0.001);
    group.add(spawnedMesh);
    cubes.push({
      m: spawnedMesh,
      from: last.from.clone(),
      to: targetPositions[cubes.length] || new THREE.Vector3(),
      spawned: true,
    });
  }

  // Center window plane
  const centerPlaneMat = new THREE.MeshBasicMaterial({
    color: 0x101113,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  });
  const centerPlane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), centerPlaneMat);
  centerPlane.position.set(0, 0.3, 0);
  scene.add(centerPlane);

  // Floor shadow receiver plane
  const shadowGeom = new THREE.PlaneGeometry(160, 160);
  const shadowMat = new THREE.ShadowMaterial({ opacity: 0.13 });
  const shadowMesh = new THREE.Mesh(shadowGeom, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.y = -5;
  shadowMesh.receiveShadow = true;
  scene.add(shadowMesh);

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 1.05));
  const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
  dirLight.position.set(10, 16, 8);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.set(2048, 2048);
  dirLight.shadow.camera.left = -16;
  dirLight.shadow.camera.bottom = -16;
  dirLight.shadow.camera.right = 16;
  dirLight.shadow.camera.top = 16;
  scene.add(dirLight);

  const fillLight = new THREE.DirectionalLight(0xe4e9ff, 0.55);
  fillLight.position.set(-8, 4, -6);
  scene.add(fillLight);

  // Orthographic camera for true isometric view
  const camera = new THREE.OrthographicCamera();
  const resizeCamera = () => {
    const width = stickyContainer.clientWidth;
    const height = stickyContainer.clientHeight;
    renderer.setSize(width, height);
    const aspect = width / height;
    const frustum = Math.max(14, 9.5 / aspect);
    camera.left = (-frustum * aspect) / 2;
    camera.right = (frustum * aspect) / 2;
    camera.top = frustum / 2;
    camera.bottom = -frustum / 2;
    camera.near = 0.1;
    camera.far = 200;
    camera.updateProjectionMatrix();
  };
  resizeCamera();

  const resizeObserver = new ResizeObserver(resizeCamera);
  resizeObserver.observe(stickyContainer);

  // Camera azimuth and elevation angles
  const isometricAngle = { az: Math.PI / 4, el: Math.asin(1 / Math.sqrt(3)) };
  const intermediateAngle = { az: Math.PI / 2 - 0.3, el: 0.16 };
  const endAngle = { az: Math.PI / 2, el: 0.02 };

  let currentProgress = 0;
  let mouseX = 0;
  let mouseY = 0;

  const onMouseMove = (e: MouseEvent) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  window.addEventListener("mousemove", onMouseMove);

  const smoothStep = (min: number, max: number, val: number) => {
    const x = Math.min(1, Math.max(0, (val - min) / (max - min)));
    return x * x * (3 - 2 * x);
  };
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  let animFrameId = 0;
  const renderLoop = () => {
    animFrameId = requestAnimationFrame(renderLoop);

    const rect = section.getBoundingClientRect();
    if (rect.bottom < -8) return;

    const scrollHeight = rect.height - stickyContainer.clientHeight;
    const rawProgress = scrollHeight > 0 ? Math.min(1, Math.max(0, -rect.top / scrollHeight)) : 0;
    const smoothing = rawProgress > 0.78 ? 0.18 : 0.08;

    currentProgress = prefersReducedMotion
      ? rawProgress
      : currentProgress + (rawProgress - currentProgress) * smoothing;

    const pShape = smoothStep(0.04, 0.5, currentProgress);
    const pMorph = smoothStep(0, 0.5, currentProgress);
    const pZoom = smoothStep(0.46, 0.86, currentProgress);

    let az = lerp(isometricAngle.az, intermediateAngle.az, pMorph);
    let el = lerp(isometricAngle.el, intermediateAngle.el, pMorph);
    az = lerp(az, endAngle.az, pZoom);
    el = lerp(el, endAngle.el, pZoom);

    // Subtle pointer parallax response
    const mouseWeight = prefersReducedMotion
      ? 0
      : (currentProgress < 0.02 ? 0.08 : currentProgress) * (1 - pZoom);
    az += 0.05 * mouseX * mouseWeight;
    el += 0.04 * mouseY * mouseWeight;

    camera.position.set(
      40 * Math.cos(el) * Math.cos(az),
      40 * Math.sin(el),
      40 * Math.cos(el) * Math.sin(az)
    );
    camera.lookAt(0, 0.3 * pShape, 0);

    const zoomScale = 1 + 26 * Math.pow(pZoom, 1.7);
    group.rotation.y = Math.PI * pShape;

    cubes.forEach((cube, idx) => {
      const a = smoothStep(0, 1, Math.min(1, Math.max(0, 1.18 * pShape - (idx / cubes.length) * 0.18)));
      cube.m.position.lerpVectors(cube.from, cube.to, a);
      const r = cube.spawned ? smoothStep(0.75, 1, a) : 1;
      cube.m.scale.setScalar(Math.max(0.001, r));
      cube.m.position.multiplyScalar(lerp(1, zoomScale, smoothStep(0.02, 1, pZoom) * a));
    });

    centerPlaneMat.opacity = smoothStep(0.36, 0.52, currentProgress);
    centerPlane.scale.setScalar(zoomScale);

    if (!transparent) {
      scene.background = paperColor.clone().lerp(inkColor, smoothStep(0.55, 0.95, pZoom));
    }

    onFrame?.({
      progress: currentProgress,
      pShape,
      pZoom,
    });

    renderer.render(scene, camera);
  };

  renderLoop();
  section.dataset.webgl = "ok";

  return () => {
    delete section.dataset.webgl;
    cancelAnimationFrame(animFrameId);
    window.removeEventListener("mousemove", onMouseMove);
    resizeObserver.disconnect();
    boxGeom.dispose();
    shadowGeom.dispose();
    shadowMat.dispose();
    centerPlane.geometry.dispose();
    centerPlaneMat.dispose();
    darkMaterial.dispose();
    blueMaterial.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}

export function HeroMonolith() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const imRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const darkOverlayRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [webglActive, setWebglActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const smoothStep = (min: number, max: number, val: number) => {
      const r = Math.min(1, Math.max(0, (val - min) / (max - min)));
      return r * r * (3 - 2 * r);
    };

    let prevPrompt = "";

    const cleanup = mountPenroseScene(section, sticky, {
      transparent: true,
      onFrame: ({ progress: e }) => {
        const watermark = watermarkRef.current;
        const im = imRef.current;
        const tagline = taglineRef.current;
        const darkOverlay = darkOverlayRef.current;
        const prompt = promptRef.current;
        const counter = counterRef.current;

        if (!watermark || !im || !tagline || !darkOverlay || !prompt || !counter) return;

        // "IM" fades out
        im.style.opacity = String(1 - smoothStep(0.22, 0.42, e));

        // "POSSIBLE" scales and fades
        watermark.style.opacity = String(1 - smoothStep(0.52, 0.72, e));
        watermark.style.transform = `scale(${1 + 0.14 * e})`;

        // Tagline is visible at start (1) and fades out around 0.18 - 0.32
        tagline.style.opacity = String(1 - smoothStep(0.18, 0.32, e));

        // Dark background overlay fades in as you fly through
        darkOverlay.style.opacity = String(smoothStep(0.72, 0.98, e));

        // Counter & inspection prompt
        prompt.style.opacity = String(e > 0.85 ? 0 : 1);
        counter.style.opacity = String(e > 0.85 ? 0 : 1);
        counter.textContent = String(Math.round(100 * e)).padStart(3, "0");

        const promptText =
          e > 0.55 ? "( through the window )" : e > 0.28 ? "( told you )" : "scroll to inspect ↓";
        if (promptText !== prevPrompt) {
          prompt.textContent = promptText;
          prevPrompt = promptText;
        }
      },
    });

    setWebglActive(true);
    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Kott Studio — the impossible object"
      className="group relative h-[250vh] bg-paper text-ink data-[webgl=no]:h-auto"
      data-webgl={webglActive ? "ok" : undefined}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden bg-paper group-data-[webgl=no]:static"
      >
        {/* Background "IMPOSSIBLE" watermark */}
        <div
          ref={watermarkRef}
          aria-hidden="true"
          className="absolute inset-0 z-0 flex items-center justify-center will-change-transform pointer-events-none select-none"
        >
          <span className="font-display block -translate-y-[15vh] whitespace-nowrap text-[17vw] font-thin leading-none tracking-[-0.04em] text-ink sm:translate-y-0">
            <span ref={imRef} className="text-accent">
              IM
            </span>
            POSSIBLE
          </span>
        </div>

        {/* Fallback 2D SVG if WebGL is unavailable or loading */}
        <div
          className={`absolute inset-0 z-[2] flex items-center justify-center pointer-events-none ${
            webglActive ? "hidden" : "block"
          }`}
        >
          <ImpossibleTriangle className="h-[min(58vh,58vw)] w-auto translate-y-[-2vh]" />
        </div>

        {/* Dark overlay that transitions the scene into #work */}
        <div
          ref={darkOverlayRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[15] bg-ink opacity-0"
        />

        {/* Tagline */}
        <div className="pointer-events-none absolute inset-x-6 bottom-28 z-20 md:inset-x-14">
          <h1 className="sr-only">
            Kott Studio — there are probably things we cannot do. We are not sure of that.
          </h1>
          <p
            ref={taglineRef}
            aria-hidden="true"
            className="font-display max-w-[22em] text-balance text-[clamp(18px,1.9vw,26px)] leading-[1.25] tracking-[-0.01em] text-ink"
            style={{ opacity: 1 }}
          >
            <span className="block">there are probably things we simply cannot do.</span>
            <span className="unsure mt-1 block italic">we are not sure of that.</span>
          </p>
        </div>

        {/* Bottom Metadata & Dynamic Prompt */}
        <div className="absolute inset-x-6 bottom-6 z-20 flex flex-col gap-2 md:inset-x-14 md:flex-row md:items-baseline md:justify-between pointer-events-none">
          <span className="eyebrow max-w-full text-balance text-muted">
            visual communications, engineered by hand
          </span>
          <span className="inline-flex items-baseline gap-3.5 self-end group-data-[webgl=no]:hidden md:self-auto">
            <span ref={counterRef} className="eyebrow tabular-nums text-muted" aria-hidden="true">
              000
            </span>
            <span ref={promptRef} className="eyebrow text-muted transition-opacity duration-300">
              scroll to inspect ↓
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
