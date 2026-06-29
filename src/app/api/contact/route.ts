import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, subject, message, website } = body;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Kontaktformular <onboarding@resend.dev>",
    to: "info@np-solution.li",
    subject: `Neue Anfrage: ${subject ?? "Allgemeine Anfrage"}`,
    html: `
      <table style="font-family:sans-serif;font-size:15px;color:#222;max-width:600px;width:100%;border-collapse:collapse">
        <tr><td colspan="2" style="padding:24px 0 12px;font-size:20px;font-weight:700;border-bottom:2px solid #FF5F00">
          Neue Kontaktanfrage
        </td></tr>
        <tr><td style="padding:12px 16px 12px 0;color:#666;white-space:nowrap;vertical-align:top">Name</td>
            <td style="padding:12px 0">${name}</td></tr>
        <tr style="background:#f9f9f9">
            <td style="padding:12px 16px 12px 0;color:#666;white-space:nowrap;vertical-align:top">E-Mail</td>
            <td style="padding:12px 0"><a href="mailto:${email}" style="color:#FF5F00">${email}</a></td></tr>
        <tr><td style="padding:12px 16px 12px 0;color:#666;white-space:nowrap;vertical-align:top">Telefon</td>
            <td style="padding:12px 0">${phone || "—"}</td></tr>
        <tr style="background:#f9f9f9">
            <td style="padding:12px 16px 12px 0;color:#666;white-space:nowrap;vertical-align:top">Betreff</td>
            <td style="padding:12px 0">${subject}</td></tr>
        <tr><td style="padding:12px 16px 12px 0;color:#666;white-space:nowrap;vertical-align:top">Nachricht</td>
            <td style="padding:12px 0;white-space:pre-wrap">${message}</td></tr>
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
