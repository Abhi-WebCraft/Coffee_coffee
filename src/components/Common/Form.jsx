import Image from "next/image"
import Link from "next/link";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import Btn from "../Layout/Btns/Btn";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
export default function Form (){
    const { register, getValues, handleSubmit, handleError, formState: { errors } } = useForm({
        mode: "onChange"
      });
    
      const handleKeyPress = (event) => {
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', ' ','(',')'];
        if (!allowedKeys.includes(event.key)) {
          event.preventDefault();
        }
      };
    
      const router = useRouter();
      const [ButtonShow, setButtonShow] = useState(false);
    
      const onSubmit = async (data) => {
        const location = getValues('location');
        setButtonShow(true);
        const updatedFormData = {
          ...data,
          location,
        };
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
return (
<section className="pb-[100px]">
    <Container>
        <div className="flex items-center section-direction">
            <div className="w-[30%] bg-[#261FB3]  py-[20px] px-[20px] h-[580px] full-section-icon">
                <div className="flex flex-col gap-5">
                    <h2 className="text-[40px] leading-[50px] text-white form-texts">Contact Information</h2>
                    <p className="font-bold text-white ">You can reach us at:</p>
                    <div className="flex flex-col gap-8">
                        <Link href="tel:+971524495817" className="flex items-center gap-5">
                            <Image src="/images/icons/phone-call.svg" alt-="phone-icon" width="40" height="40" className="w-[40px] h-[40px] form-icon"/>
                            <h5 className="font-normal text-white font-form">+7341173250</h5>
                        </Link>
                        <Link href="mailto:info@daraluloom.com" className="flex items-center gap-5">
                            <Image src="/images/icons/email-2.svg" alt-="phone-icon" width="40" height="40" className="w-[40px] h-[40px] form-icon"/>
                            <h5 className="font-normal text-white font-form">abhishek.com</h5>
                        </Link>
                        <div className="flex items-center gap-5">
                            <Image src="/images/icons/gps.svg" alt-="phone-icon" width="40" height="40" className="w-[40px] h-[40px] form-icon"/>
                            <h5 className="font-normal text-white font-form">aaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </h5>
                        </div>
                        <div className="flex items-center gap-5">
                            <Image src="/images/icons/gps.svg" alt-="phone-icon" width="40" height="40" className="w-[40px] h-[40px] form-icon"/>
                            <h5 className="font-normal text-white font-form">bbbbbbbbbbbbbbbbbbbbbbbb
                            </h5>
                        </div>
                        <div className="flex items-center gap-5">
                            <Image src="/images/icons/gps.svg" alt-="phone-icon" width="40" height="40" className="w-[40px] h-[40px] form-icon"/>
                            <h5 className="font-normal text-white font-form">ccccccccccccccccccccccccccccccccccc
                            </h5>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="w-[70%] border-[#272727] border py-[51px] px-[60px] book-form full-section">
                <div className="flex flex-col gap-4">
                    <SectionTitle
                        title="Book a Free Counselling Session"
                        />
                    <p className="text-[#1a1a1a] font-bold">Fill up the form and our team will get back to you within 24 hours.</p>
                    <form class="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit, handleError)}>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" name="name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("name", { required: "Name is required" })} />
                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                            {errors?.name && (
                                <p className="error">{errors.name.message}</p>
                                )}
                        </div>
                        <div class="grid lg:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                            <input type="text" {...register("phone", {
                                required: "Phone is required"})} onKeyPress={handleKeyPress} name="phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                {errors?.phone && (
                                <p className="error">{errors.phone.message}</p>
                                )}
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                            <input type="email" {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email address"
                                }
                                })} name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                {errors?.email && (
                                <p  className="error">{errors.email.message}</p>
                                )}
                            </div>
                        </div>
                        <div class=" md:gap-6">
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                        <textarea rows={5} cols={30} {...register("message", {
                                required: "Message is required"})} name="message" id="floating_job_title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></textarea>
                            <label for="message" class="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tell us about your requirement
                            </label>
                            {errors?.message && (
                            <p  className="error">{errors.message.message}</p>
                            )}
                        </div>
                        <div>
                        {ButtonShow ? (
                            <button type="button" disabled className="default-btn">
                                Sending Request...
                            </button>
                            ) : (
                            <button type="submit" className="default-btn">Submit Request</button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Container>
</section>
)
}