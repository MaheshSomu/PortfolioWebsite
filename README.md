# React Portfolio

A modern, fast, and accessible developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Component-Driven Architecture**: Modular, maintainable UI components.
- **Accessible UI**: Keyboard-friendly navigation, ARIA attributes, and reduced motion support.
- **Premium Animations**: Smooth, sophisticated micro-interactions powered by Framer Motion.
- **Serverless Contact Form**: Direct email delivery using EmailJS (No backend required).

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

## Contact Form Setup (EmailJS)

To make the contact form actually send emails to your inbox, you need to configure EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add a new Email Service (e.g., Gmail) in the EmailJS dashboard.
3. Create an Email Template with the following variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
4. Set the template Subject to: `New Portfolio Contact`
5. Configure the "Reply-To" address in the template to `{{from_email}}`.
6. Get your **Service ID**, **Template ID**, and **Public Key** from the EmailJS dashboard.
7. Create a `.env` file in the root of the project (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
8. Add your credentials to the `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
9. Restart the Vite development server (`npm run dev`) for the environment variables to take effect.
10. Test the form!

> **Note**: Your `.env` file is excluded from git via `.gitignore` to keep your keys safe. Ensure you add these same environment variables to your deployment platform (e.g., Vercel or Netlify) when deploying.
