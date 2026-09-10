import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper to create transport if SMTP credentials are provided
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return null;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Server-side email notification endpoint for hire requests
app.post('/api/notify-hire', async (req, res) => {
  try {
    const {
      name,
      fullName,
      email,
      phone,
      opportunityType,
      budgetCurrency,
      budgetType,
      budgetRange,
      customBudget,
      dateSubmitted,
    } = req.body;

    const clientName = fullName || name || 'Direct Client';
    const clientEmail = email || 'Unknown';
    const clientPhone = phone || 'Not provided';
    const projectType = opportunityType || 'Digital Marketing / Creative Project';
    const currency = budgetCurrency || (budgetRange?.includes('₦') ? 'NGN' : 'USD');
    const isAdvertising = budgetType === 'advertising' || ['Meta Ads Management', 'Facebook Ads', 'Instagram Ads', 'TikTok Ads'].includes(projectType);
    const budgetCategoryLabel = isAdvertising ? 'Advertising Budget' : 'Project Budget';
    const finalBudget = customBudget ? `${currency === 'NGN' ? '₦' : '$'}${customBudget} (Custom)` : (budgetRange || 'Not specified');
    const submittedAt = dateSubmitted ? new Date(dateSubmitted).toLocaleString() : new Date().toLocaleString();

    // Clean international phone for WhatsApp URL
    const cleanPhone = clientPhone.replace(/[^0-9]/g, '');
    const whatsappUrl = cleanPhone.length >= 7 ? `https://wa.me/${cleanPhone}` : `https://wa.me/2348051780169`;

    const recipientEmails = ['ipesolosulaiman@gmail.com', 'ipesolasulaiman@gmail.com'];
    const emailSubject = `NEW PROJECT REQUEST | ${projectType.toUpperCase()}`;

    const adminPlainText = `NEW PROJECT REQUEST
A new client has submitted a project request through your portfolio website.

CLIENT DETAILS
Name:
${clientName}
Email:
${clientEmail}
Phone:
${clientPhone}

PROJECT DETAILS
Project Type:
${projectType}
Budget Type:
${budgetCategoryLabel}
Budget Currency:
${currency}
Budget:
${finalBudget}
Submitted:
${submittedAt}

You can contact the client using the information provided above.`;

    const adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #E2E8F0; border-radius: 16px;">
        <div style="background-color: #062B63; padding: 20px 24px; border-radius: 12px; margin-bottom: 24px; text-align: left;">
          <h1 style="color: #ffffff; font-size: 20px; font-weight: 800; margin: 0; letter-spacing: -0.5px;">ONIFADE SULAIMAN (MR. CLARITY)</h1>
          <p style="color: #60A5FA; font-size: 13px; margin: 4px 0 0 0; font-weight: 700; text-transform: uppercase;">NEW PROJECT REQUEST | ${projectType.toUpperCase()}</p>
        </div>

        <p style="font-size: 15px; color: #1E293B; line-height: 1.5; margin-bottom: 20px;">
          A new client has submitted a project request through your portfolio website.
        </p>

        <h3 style="font-size: 13px; font-weight: 800; color: #062B63; text-transform: uppercase; margin: 20px 0 10px 0; border-bottom: 2px solid #EFF6FF; padding-bottom: 6px;">
          CLIENT DETAILS
        </h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 14px;">
          <tbody>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 8px 0; color: #64748B; font-weight: 600; width: 35%;">Name</td>
              <td style="padding: 8px 0; color: #0F172A; font-weight: 700;">${clientName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Email</td>
              <td style="padding: 8px 0; color: #0B5ED7; font-weight: 600;"><a href="mailto:${clientEmail}" style="color: #0B5ED7; text-decoration: none;">${clientEmail}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Phone</td>
              <td style="padding: 8px 0; color: #0F172A; font-weight: 600;">${clientPhone}</td>
            </tr>
          </tbody>
        </table>

        <h3 style="font-size: 13px; font-weight: 800; color: #062B63; text-transform: uppercase; margin: 20px 0 10px 0; border-bottom: 2px solid #EFF6FF; padding-bottom: 6px;">
          PROJECT DETAILS
        </h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tbody>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 8px 0; color: #64748B; font-weight: 600; width: 35%;">Project Type</td>
              <td style="padding: 8px 0; color: #062B63; font-weight: 700;">${projectType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Budget Type</td>
              <td style="padding: 8px 0; color: #0F172A; font-weight: 600;">${budgetCategoryLabel}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Budget Currency</td>
              <td style="padding: 8px 0; color: #0F172A; font-weight: 600;">${currency}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Budget</td>
              <td style="padding: 8px 0; color: #059669; font-weight: 800; font-size: 15px;">${finalBudget}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Submitted</td>
              <td style="padding: 8px 0; color: #64748B;">${submittedAt}</td>
            </tr>
          </tbody>
        </table>

        <p style="font-size: 13px; color: #64748B; margin: 16px 0;">
          You can contact the client using the information provided above.
        </p>

        <div style="display: flex; gap: 12px; margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
          <a href="mailto:${clientEmail}?subject=Re: Project Request - Onifade Sulaiman (Mr. Clarity)&body=Hello ${encodeURIComponent(clientName)},%0A%0AThank you for reaching out regarding your ${encodeURIComponent(projectType)} project." style="display: inline-block; background-color: #0B5ED7; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 13px; text-align: center; margin-right: 8px;">
            Reply to Client Email
          </a>
          <a href="${whatsappUrl}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 13px; text-align: center;">
            Chat on WhatsApp
          </a>
        </div>

        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #F1F5F9; font-size: 11px; color: #94A3B8; text-align: center;">
          Sent automatically from Onifade Sulaiman's Portfolio System • ipesolosulaiman@gmail.com
        </div>
      </div>
    `;

    const clientConfirmationSubject = `PROJECT REQUEST RECEIVED | ONIFADE SULAIMAN`;
    const clientConfirmationPlain = `Hello ${clientName},

Thank you for reaching out to me.
I have received your project request and will review the details provided.
I will get back to you as soon as possible.

Best regards,
Onifade Sulaiman
Mr. Clarity
Digital Marketer and Digital Solutions Specialist
+234 805 178 0168
ipesolosulaiman@gmail.com`;

    const clientConfirmationHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #E2E8F0; border-radius: 16px;">
        <div style="background-color: #062B63; padding: 20px 24px; border-radius: 12px; margin-bottom: 24px;">
          <h1 style="color: #ffffff; font-size: 20px; font-weight: 800; margin: 0;">ONIFADE SULAIMAN</h1>
          <p style="color: #60A5FA; font-size: 13px; margin: 4px 0 0 0; font-weight: 600;">Digital Marketer and Digital Solutions Specialist (Mr. Clarity)</p>
        </div>

        <p style="font-size: 15px; color: #334155; line-height: 1.6;">
          Hello ${clientName},<br/><br/>
          Thank you for reaching out to me.<br/>
          I have received your project request and will review the details provided.<br/>
          I will get back to you as soon as possible.
        </p>

        <div style="margin: 24px 0;">
          <a href="https://wa.me/2348051780169?text=${encodeURIComponent(`Hello Mr. Clarity, I submitted a project request for ${projectType} (${clientName}).`)}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 13px;">
            Message Onifade on WhatsApp (+234 805 178 0169)
          </a>
        </div>

        <p style="font-size: 13px; color: #64748B; margin-top: 24px; line-height: 1.6;">
          Best regards,<br/>
          <strong>Onifade Sulaiman</strong><br/>
          Mr. Clarity<br/>
          Digital Marketer and Digital Solutions Specialist<br/>
          +234 805 178 0168<br/>
          ipesolosulaiman@gmail.com
        </p>
      </div>
    `;

    const transporter = getTransporter();
    let emailSent = false;
    let providerUsed = 'none';

    // 1. Try Resend API if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.SMTP_FROM || 'Onifade Sulaiman <notifications@resend.dev>',
            to: recipientEmails,
            subject: emailSubject,
            text: adminPlainText,
            html: adminHtml,
          }),
        });
        if (resendRes.ok) {
          emailSent = true;
          providerUsed = 'resend';

          // Send client confirmation if valid email provided
          if (clientEmail && clientEmail.includes('@')) {
            await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
              },
              body: JSON.stringify({
                from: process.env.SMTP_FROM || 'Onifade Sulaiman <notifications@resend.dev>',
                to: [clientEmail],
                subject: clientConfirmationSubject,
                text: clientConfirmationPlain,
                html: clientConfirmationHtml,
              }),
            }).catch(() => null);
          }
        }
      } catch (resendErr) {
        console.warn('Resend API dispatch notice:', resendErr);
      }
    }

    // 2. Try SMTP if configured and not yet sent
    if (!emailSent && transporter) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Portfolio Notifications" <${process.env.SMTP_USER}>`,
          to: recipientEmails.join(', '),
          subject: emailSubject,
          text: adminPlainText,
          html: adminHtml,
        });
        emailSent = true;
        providerUsed = 'smtp';

        if (clientEmail && clientEmail.includes('@')) {
          await transporter.sendMail({
            from: process.env.SMTP_FROM || `"Onifade Sulaiman" <${process.env.SMTP_USER}>`,
            to: clientEmail,
            subject: clientConfirmationSubject,
            text: clientConfirmationPlain,
            html: clientConfirmationHtml,
          }).catch(() => null);
        }
      } catch (smtpErr) {
        console.warn('SMTP dispatch notice:', smtpErr);
      }
    }

    // High visibility server audit log for all submissions
    console.log('\n======================================================');
    console.log('📬 NEW HIRE REQUEST RECEIVED AT SERVER:');
    console.log(`- Recipient Emails: ${recipientEmails.join(', ')}`);
    console.log(`- Client Name: ${clientName}`);
    console.log(`- Client Email: ${clientEmail}`);
    console.log(`- Client Phone: ${clientPhone}`);
    console.log(`- Project Type: ${projectType}`);
    console.log(`- Budget Currency: ${currency}`);
    console.log(`- Budget Type: ${budgetCategoryLabel}`);
    console.log(`- Budget Range / Custom: ${finalBudget}`);
    console.log(`- Date & Time: ${submittedAt}`);
    console.log(`- Direct WhatsApp: ${whatsappUrl}`);
    console.log(`- Delivery Status: ${emailSent ? `Sent via ${providerUsed}` : 'Logged to server audit journal (Configure RESEND_API_KEY or SMTP in .env for live inbox relay)'}`);
    console.log('======================================================\n');

    return res.status(200).json({
      success: true,
      delivered: emailSent,
      provider: providerUsed,
      message: 'Project request received and recorded successfully.',
    });
  } catch (error: any) {
    console.error('Server error in /api/notify-hire:', error);
    return res.status(500).json({
      success: false,
      error: error?.message || 'Failed to process hire notification',
    });
  }
});

// Production and development Vite serving setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer();
