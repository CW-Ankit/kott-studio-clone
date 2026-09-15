import fs from "node:fs";
import path from "node:path";

const ASSETS = [
  {
    url: "https://static.tildacdn.net/tild6535-3730-4133-a338-643563386235/KoteStudio.jpg",
    dest: "public/assets/logo.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild3237-6334-4562-b638-396566326661/KoteStudioL.jpg",
    dest: "public/assets/og-image.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild3735-6336-4330-b438-326365313164/favicon.ico",
    dest: "public/favicon.ico",
  },
  {
    url: "https://static.tildacdn.net/tild6639-6166-4133-a331-643764633333/1677502037508.jpg",
    dest: "public/assets/phone-avatar.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild6632-3066-4334-b638-313565623236/noroot.png",
    dest: "public/assets/hero-emblem.png",
  },
  {
    url: "https://static.tildacdn.net/tild3830-6665-4138-a134-316131396238/1676702559215.jpg",
    dest: "public/assets/stories/slide-1.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild3064-6539-4135-b832-643166333530/noroot.png",
    dest: "public/assets/stories/slide-2.png",
  },
  {
    url: "https://static.tildacdn.net/tild3031-3164-4361-b930-363537633137/noroot.png",
    dest: "public/assets/stories/slide-3.png",
  },
  {
    url: "https://static.tildacdn.net/tild6430-3866-4631-a537-663761393035/noroot.png",
    dest: "public/assets/stories/slide-4.png",
  },
  {
    url: "https://static.tildacdn.net/tild6163-6539-4466-a263-623166633235/IMG_6481.jpeg",
    dest: "public/assets/stories/slide-5.jpeg",
  },
  {
    url: "https://static.tildacdn.net/tild3261-3037-4164-b262-633361373261/noroot.png",
    dest: "public/assets/stories/slide-6.png",
  },
  {
    url: "https://static.tildacdn.net/tild3233-3364-4266-b362-386165643664/Milonga-In-Kiev-Kote.jpg",
    dest: "public/assets/stories/slide-10.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild3935-3831-4230-b363-343737326634/noroot.png",
    dest: "public/assets/popup-irina.png",
  },
  {
    url: "https://static.tildacdn.net/tild6561-3237-4734-b364-396237306332/IMG_20200706_190003_.jpg",
    dest: "public/assets/teachers/anatoliy.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild3632-6261-4462-b433-386230306264/___.png",
    dest: "public/assets/teachers/iryna.png",
  },
  {
    url: "https://static.tildacdn.net/tild6265-6264-4165-b262-393436613836/tango_cat.svg",
    dest: "public/assets/icons/tango_cat.svg",
  },
  {
    url: "https://static.tildacdn.net/tild3932-3339-4235-b262-306331643637/IMG_20230220_135612.jpg",
    dest: "public/assets/academy-logo.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild3739-3565-4965-b763-393136656462/kote-logo-TANGO-ACAD.jpg",
    dest: "public/assets/academy-badge.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild6664-3362-4234-b761-336563656436/tango-gift-card.jpg",
    dest: "public/assets/gift/gift-logo.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild3361-3231-4339-a464-333931636233/Kote_Tango_Academy.jpg",
    dest: "public/assets/gift/academy-logo-2.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild3436-3439-4532-b264-323762333834/__.jpg",
    dest: "public/assets/gift/gift-cover.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild3466-6239-4139-b537-323165646631/IMG_20230305_225646.jpg",
    dest: "public/assets/gift/envelope-1.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild6534-6262-4437-b238-643066626632/IMG_20230305_225424.jpg",
    dest: "public/assets/gift/envelope-2.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild6432-6239-4833-a234-386663643135/IMG_20230305_225045.jpg",
    dest: "public/assets/gift/envelope-3.jpg",
  },
  {
    url: "https://static.tildacdn.net/tild6364-3136-4362-b339-613432656436/ic_play_circle_outline.svg",
    dest: "public/assets/icons/play-circle.svg",
  },
  {
    url: "https://static.tildacdn.net/tild6164-6138-4361-b365-373638353636/Tango_Anatoliy_Yakim.png",
    dest: "public/assets/teachers/anatoliy-full.png",
  },
  {
    url: "https://static.tildacdn.net/tild6336-3035-4562-b730-343930376338/1606092643810_202011.jpg",
    dest: "public/assets/individual-cover.jpg",
  },
];

async function downloadAsset(url: string, destPath: string) {
  const fullPath = path.resolve(process.cwd(), destPath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://kote.studio/",
      },
    });

    if (!res.ok) {
      console.warn(`[WARN] Failed to fetch ${url} (Status: ${res.status})`);
      return false;
    }

    const buffer = await res.arrayBuffer();
    fs.writeFileSync(fullPath, Buffer.from(buffer));
    console.log(`[OK] Saved ${destPath} (${buffer.byteLength} bytes)`);
    return true;
  } catch (err: any) {
    console.warn(`[WARN] Error downloading ${url}:`, err.message);
    return false;
  }
}

async function main() {
  console.log(`Starting asset download for ${ASSETS.length} assets...`);
  let success = 0;
  for (const asset of ASSETS) {
    const ok = await downloadAsset(asset.url, asset.dest);
    if (ok) success++;
  }
  console.log(`Finished downloading: ${success}/${ASSETS.length} assets ready!`);
}

main();
