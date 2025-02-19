// pages/api/verifyRecaptcha.js

import axios from 'axios';

export default async function handler(req, res) {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'No token provided' });
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: '6LdBXrAqAAAAADtqoW0fOLvIWY1HwJxtFbx_rX0O', // Replace with your reCAPTCHA secret key
          response: token
        }
      }
    );

    const data = response.data;

    if (data.success) {
      // Token is valid
      return res.status(200).json({ message: 'reCAPTCHA verified successfully!' });
    } else {
      // Invalid token
      return res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error verifying reCAPTCHA' });
  }
}
