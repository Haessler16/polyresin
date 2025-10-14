import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, company, product, amount, message, phone, email } =
      await request.json()

    // Validación básica
    if (!name || !company || !message || !email) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 },
      )
    }

    // Enviar el email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Químicas Polyresin <onboarding@resend.dev>', // Dominio de prueba de Resend
      // Para producción usa: from: 'Contacto Web <noreply@tudominio.com>',
      to: ['ventas@quimicaspolyresin.com'],
      subject: `Nueva consulta de ${name} - ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1aa737 0%, #15892d 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Nueva Consulta Web</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Químicas Polyresin, C.A.</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 30px;">
            <div style="background-color: white; border-radius: 10px; padding: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #1aa737; margin-top: 0;">Datos del Cliente</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Email:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                    ${email}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Nombre:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Telefono:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                    ${phone}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Empresa/Cargo:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                    ${company}
                  </td>
                </tr>
                ${
                  product
                    ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Producto de interés:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                    ${product}
                  </td>
                </tr>
                `
                    : ''
                }
                ${
                  amount
                    ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Cantidad:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                    ${amount}
                  </td>
                </tr>
                `
                    : ''
                }
              </table>
              
              <div style="margin-top: 25px;">
                <h3 style="color: #1aa737; margin-bottom: 10px;">Mensaje:</h3>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #1aa737;">
                  <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style="background-color: #374151; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0; opacity: 0.8;">
              Este correo fue enviado desde el formulario de contacto del sitio web de Químicas Polyresin
            </p>
            <p style="margin: 10px 0 0 0; opacity: 0.8;">
              Fecha: ${new Date().toLocaleString('es-ES', {
                dateStyle: 'full',
                timeStyle: 'short',
              })}
            </p>
          </div>
        </div>
      `,
      text: `
Nueva Consulta Web - Químicas Polyresin

Nombre: ${name}
Empresa/Cargo: ${company}
${product ? `Producto de interés: ${product}` : ''}
${amount ? `Cantidad: ${amount}` : ''}

Mensaje:
${message}

---
Fecha: ${new Date().toLocaleString('es-ES')}
      `,
    })

    if (error) {
      console.log('Error de Resend:', error)
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 },
      )
    }

    return NextResponse.json(
      { message: 'Email enviado correctamente', id: data?.id },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error al enviar email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 },
    )
  }
}
