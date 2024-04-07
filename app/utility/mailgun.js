import Mailgun from "mailgun-js";

const mg = Mailgun({
  apiKey: '39115edece8a0d26fde1af974a3055ac-4c205c86-bb53c17d',
  domain: 'sandbox8c2d9dc7be254505b8496e3613401d3d.mailgun.org', // Replace with your actual domain
});

export default async function SendEmail({to , from , subject , message}){
    const data = {
        from,
        to,
        subject,
        text: message,
      };
      try {
        await mg.messages().send(data);
        console.log('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error.message);
      }
}


