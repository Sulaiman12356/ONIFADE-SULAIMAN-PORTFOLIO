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

    const ownerEmail = 'ipesolasulaiman@gmail.com';
    const emailSubject = `New Project Request from ${clientName} - ${projectType}`;

    const adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #E2E8F0; border-radius: 16px;">
        <div style="background-color: #062B63; padding: 20px 24px; border-radius: 12px; margin-bottom: 24px; text-align: left;">
          <h1 style="color: #ffffff; font-size: 20px; font-weight: 800; margin: 0; letter-spacing: -0.5px;">ONIFADE SULAIMAN (MR. CLARITY)</h1>
          <p style="color: #60A5FA; font-size: 13px; margin: 4px 0 0 0; font-weight: 600;">NEW INCOMING CLIENT PROJECT REQUEST</p>
        </div>

        <p style="font-size: 15px; color: #1E293B; line-height: 1.5; margin-bottom: 20px;">
          You have received a new verified client project inquiry from your portfolio website.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tbody>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; color: #64748B; font-weight: 600; width: 38%;">Client Name</td>
              <td style="padding: 10px 0; color: #0F172A; font-weight: 700;">${clientName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Client Email</td>
              <td style="padding: 10px 0; color: #0B5ED7; font-weight: 600;"><a href="mailto:${clientEmail}" style="color: #0B5ED7; text-decoration: none;">${clientEmail}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Client Phone</td>
              <td style="padding: 10px 0; color: #0F172A; font-weight: 600;">${clientPhone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Project Opportunity</td>
              <td style="padding: 10px 0; color: #062B63; font-weight: 700;">${projectType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Budget Currency</td>
              <td style="padding: 10px 0; color: #0F172A; font-weight: 600;">${currency === 'NGN' ? 'Naira (₦)' : 'US Dollar ($)'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Budget Type</td>
              <td style="padding: 10px 0; color: #0F172A; font-weight: 600;">${budgetCategoryLabel}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Budget Range / Amount</td>
              <td style="padding: 10px 0; color: #059669; font-weight: 800; font-size: 15px;">${finalBudget}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Submitted At</td>
              <td style="padding: 10px 0; color: #64748B;">${submittedAt}</td>
            </tr>
          </tbody>
        </table>

        <div style="display: flex; gap: 12px; margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
          <a href="mailto:${clientEmail}?subject=Re: Project Request - Onifade Sulaiman (Mr. Clarity)&body=Hello ${encodeURIComponent(clientName)},%0A%0AThank you for reaching out regarding your ${encodeURIComponent(projectType)} project." style="display: inline-block; background-color: #0B5ED7; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 13px; text-align: center; margin-right: 8px;">
            Reply to Client Email
          </a>
          <a href="${whatsappUrl}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 13px; text-align: center;">
            Chat on WhatsApp
          </a>
        </div>

        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #F1F5F9; font-size: 11px; color: #94A3B8; text-align: center;">
          Sent automatically from Onifade Sulaiman's Portfolio System • ipesolasulaiman@gmail.com
        </div>
      </div>
    `;

    const clientConfirmationHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #E2E8F0; border-radius: 16px;">
        <div style="background-color: #062B63; padding: 20px 24px; border-radius: 12px; margin-bottom: 24px;">
          <h1 style="color: #ffffff; font-size: 20px; font-weight: 800; margin: 0;">ONIFADE SULAIMAN</h1>
          <p style="color: #60A5FA; font-size: 13px; margin: 4px 0 0 0; font-weight: 600;">Digital Marketer & Meta Ads Specialist (Mr. Clarity)</p>
        </div>

        <h2 style="font-size: 18px; color: #0F172A; font-weight: 800; margin-top: 0;">We received your project request</h2>
        <p style="font-size: 14px; color: #334155; line-height: 1.6;">
          Hello ${clientName},<br/><br/>
          Thank you for reaching out! I have received your request regarding <strong>${projectType}</strong> with an estimated ${budgetCategoryLabel.toLowerCase()} of <strong>${finalBudget}</strong>.
        </p>

        <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; margin: 20px 0; font-size: 13px; color: #475569;">
          <strong>What happens next:</strong>
          <ul style="margin: 8px 0 0 0; padding-left: 20px; line-height: 1.6;">
            <li>I personally review your project scope and market context.</li>
            <li>You will receive a tailored response or schedule invitation within <strong>24 hours</strong>.</li>
            <li>If your request is urgent, feel free to connect directly on WhatsApp below.</li>
          </ul>
        </div>

        <div style="margin: 24px 0;">
          <a href="https://wa.me/2348051780169?text=${encodeURIComponent(`Hello Mr. Clarity, I submitted a project request for ${projectType} (${clientName}).`)}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 13px;">
            Message Onifade on WhatsApp (+234 805 178 0169)
          </a>
        </div>

        <p style="font-size: 13px; color: #64748B; margin-top: 24px; line-height: 1.5;">
          Best regards,<br/>
          <strong>Onifade Sulaiman</strong><br/>
          <em>Meta Ads Specialist | Brand Designer | AI Automation</em><br/>
          Email: ipesolasulaiman@gmail.com | Phone: +234 805 178 0169
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
            to: [ownerEmail],
            subject: emailSubject,
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
                subject: 'We received your project request - Onifade Sulaiman',
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
          to: ownerEmail,
          subject: emailSubject,
          html: adminHtml,
        });
        emailSent = true;
        providerUsed = 'smtp';

        if (clientEmail && clientEmail.includes('@')) {
          await transporter.sendMail({
            from: process.env.SMTP_FROM || `"Onifade Sulaiman" <${process.env.SMTP_USER}>`,
            to: clientEmail,
            subject: 'We received your project request - Onifade Sulaiman',
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
    console.log(`- Recipient Email: ${ownerEmail}`);
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
