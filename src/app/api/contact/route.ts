import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  selectedTopics?: string[];
  selectedBudget?: string;
  website?: string; // honeypot
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const { name, email, message, selectedTopics = [], selectedBudget = "", website } = body;

    // 1. Bot Honeypot Protection: If the hidden 'website' field was filled, silently succeed
    if (website && website.trim().length > 0) {
      return NextResponse.json({ success: true, status: "filtered" });
    }

    // 2. Validation
    if (!name || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid reply-to email address is required." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Please write a brief description of your project." },
        { status: 400 }
      );
    }

    const cleanedName = name.trim();
    const cleanedEmail = email.trim().toLowerCase();
    const cleanedMessage = message.trim();
    const topicsLabel = selectedTopics.length > 0 ? selectedTopics.join(", ") : "general";
    const budgetLabel = selectedBudget || "not specified";

    // 3. Dispatch via Resend if API Key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "hello@kott.studio";
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    if (resendApiKey) {
      const emailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #101113; color: #f4f5f7; border-radius: 4px;">
          <p style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #ff4d00; margin: 0 0 16px 0;">New Inquiry · Kott Studio</p>
          <h1 style="font-size: 28px; font-weight: 300; margin: 0 0 24px 0; border-bottom: 1px solid rgba(244,245,247,0.15); padding-bottom: 16px;">
            Letter from ${cleanedName}
          </h1>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: rgba(244,245,247,0.55); width: 120px;">Sender:</td>
              <td style="padding: 8px 0; font-weight: 500;">${cleanedName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(244,245,247,0.55);">Reply To:</td>
              <td style="padding: 8px 0;"><a href="mailto:${cleanedEmail}" style="color: #ff4d00; text-decoration: none;">${cleanedEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(244,245,247,0.55);">Regarding:</td>
              <td style="padding: 8px 0;">${topicsLabel}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(244,245,247,0.55);">Rough Budget:</td>
              <td style="padding: 8px 0;">${budgetLabel}</td>
            </tr>
          </table>

          <div style="border-top: 1px solid rgba(244,245,247,0.15); padding-top: 20px;">
            <p style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(244,245,247,0.55); margin: 0 0 8px 0;">The situation, in their words:</p>
            <div style="white-space: pre-wrap; line-height: 1.6; font-size: 15px; color: rgba(244,245,247,0.9); background: rgba(244,245,247,0.03); padding: 16px; border-left: 2px solid #ff4d00;">
              ${cleanedMessage}
            </div>
          </div>

          <p style="font-size: 11px; color: rgba(244,245,247,0.4); margin-top: 32px; border-top: 1px solid rgba(244,245,247,0.1); pt: 16px;">
            Transmitted via Kott Studio Clone API Router.
          </p>
        </div>
      `;

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [contactEmail],
          reply_to: cleanedEmail,
          subject: `Project Inquiry from ${cleanedName} [${topicsLabel}]`,
          html: emailHtml,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        console.error("Resend API error:", errText);
        return NextResponse.json(
          { error: "Could not deliver email. Please try again or email hello@kott.studio directly." },
          { status: 502 }
        );
      }
    } else {
      // Development mode logging
      console.log("=========================================");
      console.log("📨 NEW INQUIRY RECEIVED (Development Mode)");
      console.log(`From:    ${cleanedName} <${cleanedEmail}>`);
      console.log(`Topics:  ${topicsLabel}`);
      console.log(`Budget:  ${budgetLabel}`);
      console.log(`Message:\n${cleanedMessage}`);
      console.log("=========================================");
    }

    return NextResponse.json({
      success: true,
      message: "Letter received. Jane reads every inquiry within one working day.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please write directly to hello@kott.studio." },
      { status: 500 }
    );
  }
}
