import Link from "next/link";
import Container from "../Layout/Container";
import Btn from "@/components/Layout/Btns/Btn";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
export default function InnerRightForm({relatedServices}) {
  const {
    register,
    getValues,
    handleSubmit,
    handleError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleKeyPress = (event) => {
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "-",
      " ",
      "(",
      ")",
    ];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const router = useRouter();
  const [ButtonShow, setButtonShow] = useState(false);

  const onSubmit = async (data) => {
    const location = getValues("location");
    setButtonShow(true);
    const updatedFormData = {
      ...data,
      location,
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      localStorage.removeItem("formData");
      router.push("/thank-you");
      setButtonShow(false);
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem sending your message.");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, handleError)}>
        <div className="pb-[10px] text-center bg-[#0a0624] p-5 lg:py-6 lg:px-8 form-border-up ">
          <h2 className="text-[20px] font-bold text-white">Request a Quote</h2>
        </div>
        <div className="case-temp-form p-4  bg-[#e7f2ff] mb-12 h-max form-border-down">
          {/* Name Input */}
          <div className="flex gap-3 items-center">
            <div className="mb-4 relative shadow-lg w-[50%]">
              <input
                type="text"
                name="name"
                {...register("name", { required: "Name is required" })}
                id="Name"
                className="block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
                placeholder=" "
              />
              <label
                htmlFor="Name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#fff] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name
              </label>
              {errors?.name && (
              <p className="error">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4 relative shadow-lg w-[50%]">
              <input
                type="text"
                {...register("phone", {
                                required: "Phone is required"})} onKeyPress={handleKeyPress} name="phone"
                id="Phone"
                className="block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
                placeholder=" "
              />
              <label
                htmlFor="Phone"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#fff] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Phone
              </label>
              {errors?.phone && (
                <p className="error">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Email Input */}

          {/* Phone Input */}
          <div className="mb-4 relative shadow-lg ">
            <input
              type="text"
              id="Email"
              {...register("email", {
              required: "Email is required",
              pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address"
              }
              })} name="email"
              className="block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
              placeholder=" "
            />
            <label
              htmlFor="Email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#fff] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email
            </label>
            {errors?.email && (
                                <p  className="error">{errors.email.message}</p>
                                )}
          </div>

          {/* Select Option */}
          <div className="mb-4 relative shadow-lg">
          <textarea rows={5} cols={30} {...register("message", { required: "Message is required"})} 
              name="message" 
              id="message"
              className="block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#fff] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              How can we help you ?
            </label>
            {errors?.message && (
              <p  className="error">{errors.message.message}</p>
              )}
          </div>
          <div className="button-box button-color-contact">
          {ButtonShow ? (
            <button type="button" disabled className="btn">
                Sending...
            </button>
            ) : (
            <button type="submit" className="btn">Send</button>
            )}
          </div>
        </div>
      </form>
      <div className="pb-[10px] text-center bg-[#0a0624] p-5 lg:py-6 lg:px-8 form-border-up">
        <h2 className="text-[20px] font-bold text-white">Related Services</h2>
      </div>
      <div className="p-4 bg-[#e7f2ff] mb-6 h-max form-border-down">
      <ul className="flex flex-col gap-4">
      {relatedServices.map((service, index) => (
          <li
            key={index}
            className="border-l-4 border-black py-2 px-2.5 bg-white rounded-md font-semibold"
          >
            <Link href={service.link}>{service.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
