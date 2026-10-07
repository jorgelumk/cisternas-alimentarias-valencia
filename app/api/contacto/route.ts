import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nombre,
      empresa,
      telefono,
      email,
      tipoLiquido,
      origenDestino,
      volumenLitros,
      fechaEstimada,
      observaciones,
      honeypot,
    } = body;

    // Silent reject for spam bots
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!nombre || !telefono || !email) {
      return NextResponse.json(
        { error: "Nombre, teléfono y correo electrónico son obligatorios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Falta la variable RESEND_API_KEY en el entorno.");
      return NextResponse.json(
        { error: "Configuración de correo incompleta (RESEND_API_KEY faltante en Vercel)." },
        { status: 500 }
      );
    }

    const receiver = process.env.LEAD_RECEIVER_EMAIL || "jorge@agenciaiasolutions.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "jorge@agenciaiasolutions.com";

    const recipients = receiver
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    const emailSubject = `🚛 Nuevo Presupuesto Cisternas: ${tipoLiquido || "Líquidos Alimentarios"} - ${nombre}`;

    const textContent = `
🚨 NUEVA SOLICITUD DE PRESUPUESTO - CISTERNAS ALIMENTARIAS VALENCIA 🚨

• Nombre: ${nombre}
• Empresa: ${empresa || "No especificada"}
• Teléfono: ${telefono}
• Email: ${email}
• Tipo de Líquido: ${tipoLiquido || "General Alimentario"}
• Capacidad / Volumen: ${volumenLitros || "No especificado"}
• Origen -> Destino: ${origenDestino || "No especificado"}
• Fecha Estimada: ${fechaEstimada || "No especificada"}
• Observaciones: ${observaciones || "Sin observaciones adicionales"}
• Fecha y Hora: ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #0b1b3d; margin-bottom: 20px; border-bottom: 2px solid #0052cc; padding-bottom: 10px;">
          🚛 Nueva Solicitud de Presupuesto
        </h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Cliente:</td>
            <td style="padding: 8px 0; color: #0f172a;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Empresa:</td>
            <td style="padding: 8px 0; color: #0f172a;">${empresa || "No especificada"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Teléfono:</td>
            <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${telefono}">${telefono}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
            <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Tipo de Líquido:</td>
            <td style="padding: 8px 0; color: #0052cc; font-weight: bold;">${tipoLiquido || "General Alimentario"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Volumen / Capacidad:</td>
            <td style="padding: 8px 0; color: #0f172a;">${volumenLitros || "No especificado"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Origen -> Destino:</td>
            <td style="padding: 8px 0; color: #0f172a;">${origenDestino || "No especificado"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Observaciones:</td>
            <td style="padding: 8px 0; color: #0f172a;">${observaciones || "Sin observaciones adicionales"}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px;">
          Enviado desde Cisternas Alimentarias Valencia | ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}
        </div>
      </div>
    `;

    const resend = new Resend(apiKey);

    const response = await resend.emails.send({
      from: `Cisternas Alimentarias Valencia <${fromEmail}>`,
      to: recipients,
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    if (response.error) {
      console.error("Resend API Error:", response.error);
      return NextResponse.json(
        { error: response.error.message || "Error enviando el correo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: response.data?.id });
  } catch (error: any) {
    console.error("Error en /api/contacto:", error);
    return NextResponse.json(
      { error: error?.message || "Error interno del servidor al procesar la solicitud." },
      { status: 500 }
    );
  }
}
