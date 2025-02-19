import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Handle unsupported methods
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ status: 'error', message: `Method ${req.method} Not Allowed` });
  }

  const { phone, name, email, company, message } = req.body;

  // Validate input
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ 
      status: 'error', 
      message: 'Name, phone, email, and message are required fields.' 
    });
  }

  try {
    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use STARTTLS for encryption
      auth: {
        user: process.env.GMAIL_EMAIL, // SMTP username
        pass: process.env.GMAIL_PASSWORD, // SMTP password
      },
    });

    // Construct email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // The client's email will be displayed as the sender
      to: 'info@computyne.com', // Recipient address
      subject: `${name} - New Enquiry From "Computyne"`,
      html: `
        <p>Computyne Team,</p>
        <p>Enquiry From: <b>${name}</b></p>
        <p>Contact Number: <b>${phone}</b></p>
        <p>Email Address: <b>${email}</b></p>
        ${company ? `<p>Company: <b>${company}</b></p>` : ''}
        <p>Message: <b>${message}</b></p>
        <p><b style="color:green">Best Regards,</b></p>
        <p>${name}</p>
        <p>Page Link: <b>${req.headers.referer || 'N/A'}</b></p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    // Send success response
    res.status(200).json({ status: 'success', message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    // Send error response
    res.status(500).json({ status: 'error', message: 'Failed to send email. Please try again later.' });
  }
}
