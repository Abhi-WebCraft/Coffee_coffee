import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import Link from "next/link";
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
  } from 'react-google-recaptcha-v3';

export default function Form () {
    const [token, setToken] = useState(null);
  const [formMessage, setFormMessage] = useState('');
  const { register, getValues, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
  });

  const handleKeyPress = (event) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', ' ', '(', ')'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const router = useRouter();
  const [buttonShow, setButtonShow] = useState(false);

  const onSubmit = async (data) => {
    if (!token) {
      setFormMessage('Please complete the reCAPTCHA');
      return;
    }
    const location = getValues('location');
    setButtonShow(true);
    const updatedFormData = { ...data, location };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      localStorage.removeItem("formData");
      router.push('/thank-you');
      setButtonShow(false);
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem sending your message.');
    }
  };
  const onVerify = useCallback((token) => {
    setToken(token);
  });


  return (
    <section className="pt-[100px]">
      <Container>
        <div className="flex items-center section-direction">
          <div className="w-[30%] bg-[#15153e] py-[40px] px-[20px] h-[600px] full-section">
            <div className="flex flex-col gap-8">
              <h2 className="text-[40px] leading-[50px] text-white form-texts">Contact Information</h2>
              <p className="text-white font-bold">You can reach us at:</p>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-5">
                  <Image src="/images/icons/email-2.svg" alt="phone-icon" width="40" height="40" className="w-[40px] h-[40px] form-icon"/>
                  <h5 className="text-white font-normal font-form">info@computyne.com</h5>
                </div>
                <div className="flex items-center gap-5">
                  <Image src="/images/icons/gps.svg" alt="phone-icon" width="40" height="40" className="w-[40px] h-[40px] form-icon"/>
                  <h5 className="text-white font-normal font-form">3/2, Alpha Arcade, Infocity Circle Gandhinagar 382010, India</h5>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Link href="https://www.facebook.com/people/Computyne-Business-Process-Services/100075815080008/">
                  <Image src="/images/icons/facebook-3.svg" alt="icon" width="40" height="40" className="w-[40px] h-[40px]"/>
                </Link>
                <Link href="https://twitter.com/computyne">
                  <Image src="/images/icons/twitter-2.svg" alt="icon" width="40" height="40" className="w-[40px] h-[40px]"/>
                </Link>
                <Link href="https://www.youtube.com/watch?v=E6GazMa5TXA">
                  <Image src="/images/icons/youtube-1.svg" alt="icon" width="40" height="40" className="w-[40px] h-[40px]"/>
                </Link>
                <Link href="https://www.linkedin.com/company/13197469/admin/">
                  <Image src="/images/icons/linkedin-2.svg" alt="icon" width="40" height="40" className="w-[40px] h-[40px]"/>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[70%] border py-[30px] px-[60px] full-section">
            <div className="flex flex-col gap-4">
              <SectionTitle title="Request a Quote" />
              <p className="text-[#15153e] font-bold">Fill up the form and our team will get back to you within 24 hours.</p>
              <GoogleReCaptchaProvider 
        reCaptchaKey="6LdBXrAqAAAAAH-o3qEub9GQx5SMobhNssPhTjyb"
         container={{ // optional to render inside custom element
          element: "<form>",
          parameters: {
            badge: 'inline', // optional, default undefined
            theme: 'dark', // optional, default undefined
          }
        }}
        >
              <form id="form_id" className="flex flex-col gap-3"   onSubmit={handleSubmit(onSubmit)}>
                {formMessage && <p>{formMessage}</p>}
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("name", { required: "Name is required" })} />
                  <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                  {errors?.name && <p className="error">{errors.name.message}</p>}
                </div>
                <div className="grid lg:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input type="text" {...register("phone", { required: "Phone is required" })} onKeyPress={handleKeyPress} name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                    {errors?.phone && <p className="error">{errors.phone.message}</p>}
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email address" } })} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    {errors?.email && <p className="error">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <textarea rows={5} cols={30} {...register("message", { required: "Message is required" })} name="message" id="floating_job_title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></textarea>
                  <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tell us about your requirement</label>
                  {errors?.message && <p className="error">{errors.message.message}</p>}
                </div>

               <div className="mb-5">
                <GoogleReCaptcha
                    onVerify={token => {
                    setToken(token);
                    }}
                />
               </div>

                <div>
                  {buttonShow ? (
                    <button type="button" disabled className="btn">Sending Request...</button>
                  ) : (
                    <button type="submit" className="btn">Submit Request</button>
                  )}
                </div>
              </form>
              </GoogleReCaptchaProvider>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
