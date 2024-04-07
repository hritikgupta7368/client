"use server";
import Mailgun from "mailgun-js";
import validator from "validator";

const mg = Mailgun({
  apiKey:
    process.env.MAILGUN_API_KEY ||
    "39115edece8a0d26fde1af974a3055ac-4c205c86-bb53c17d",
  domain:
    process.env.MAILGUN_DOMAIN_NAME ||
    "sandbox8c2d9dc7be254505b8496e3613401d3d.mailgun.org",
});

export async function handlesubmit(formData) {
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email id");
  const message = formData.get("message");
  const phone = formData.get("phone");

  function validateName(name) {
    return validator.isAlpha(name.replace(/\s/g, ""));
  }
  function validateEmail(email) {
    return validator.isEmail(email);
  }
  function validatePhoneNumber(phone) {
    const cleanedPhone = phone.replace(/\D/g, "");
    return validator.isMobilePhone(cleanedPhone, "en-IN");
  }
  if(!validateName(firstname) || !validateEmail(email) || !validatePhoneNumber(phone)){
      console.log("Invalid")
      return 
  }
  console.log("sending mail")
  const data = {
    from: email,
    to: "meghaenterprises7368@gmail.com",
    subject: `querry from ${process.env.FIRM_EMAIL_ID}`,
    html: `<h1>Querry from MEGHAENTERPRISES.COM</h1>
                <p>${message}</p><br/>
                <p>Contact details:-
                <p>Name : ${firstname} ${lastname}</p>
                <p>Email : ${email}</p>
                <p>Phone : ${phone}</p>
                </p>`,
  };
  try {
     await mg.messages().send(data);
  } catch (e) {
    console.log(e);
  }
}
