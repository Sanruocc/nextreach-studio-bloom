import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_nextreach';
const EMAILJS_TEMPLATE_ID = 'template_nextreach';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  business: string;
  location: string;
  service?: string;
  budget?: string;
  phone?: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // For now, we'll use a simple mailto approach until EmailJS is properly configured
    // In a production environment, you would configure EmailJS with proper credentials
    
    const emailBody = `
New Lead from NextReach Website

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Business: ${formData.business}
Location: ${formData.location}
${formData.service ? `Service: ${formData.service}` : ''}
${formData.budget ? `Budget: ${formData.budget}` : ''}
${formData.phone ? `Phone: ${formData.phone}` : ''}

Message:
${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:sales@nextreachstudio.com?subject=New Lead from NextReach Website&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.open(mailtoLink);
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Alternative implementation using fetch to a form service like Formspree
export const sendContactEmailViaFormspree = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('https://formspree.io/f/your_form_id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        _replyto: formData.email,
        _subject: 'New Lead from NextReach Website',
        _to: 'sales@nextreachstudio.com'
      }),
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error sending email via Formspree:', error);
    return false;
  }
};