import Link from "next/link";
import Image from "next/image";
import Btn from "../Layout/Btns/Btn";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import styles from '@/components/Layout/SectionTitle/SectionTitle.module.css';


export default function ContactForm (){
    return (
        <section id="contact" className="section  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg/form-bg.png')" }}>
            <Container>
                <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
                <div className="p-5 lg:py-6 lg:px-8 lg:rounded-r-2xl rounded-2xl bg-[#e7f2ff] mb-6">
              <div className="pb-[20px]">
              <p className="text-[#ff3221] text-[16px] uppercase font-semibold">How May We Help You!</p>
              <h2 className="text-[45px] uppercase font-bold">Contact US</h2>
              </div>

              {/* Name Input */}
              <div className="flex gap-3 items-center">
              <div className="mb-6 relative shadow-lg w-[50%]">
                <input
                  type="text"
                  id="Name"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] rounded-[0px] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="Name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#fff] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Name
                </label>
              </div>

              <div className="mb-6 relative shadow-lg w-[50%]">
                <input
                  type="text"
                  id="Email"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] rounded-[0px] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="Email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#fff] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>

              </div>

              {/* Email Input */}
             

              {/* Phone Input */}
              <div className="mb-6 relative shadow-lg">
                <input
                  type="text"
                  id="Phone"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] rounded-[0px] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="Phone"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#fff] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Phone
                </label>
              </div>

              {/* Select Option */}
              <div className="mb-6 relative shadow-lg">
                <input
                  type="text"
                  id="Name"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] rounded-[0px] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="Name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#fff] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  How can we help you ?
                </label>
              </div>

              {/* Message Input */}
              <div className="mb-6 relative shadow-lg">
                <input
                  type="text"
                  id="Message"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] rounded-[0px] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="Message"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#fff] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Message
                </label>
              </div>

              <div className="button-box button-color-contact">
                <Btn title="SEND" link="#" />
              </div>
            </div>

            <article className="card group">
                {/* Add the group class here */}
                <div className="temporary_text">
                    <Image
                        src="/images/client-story.jpg"
                        alt="client-story-image"
                        width={1536}
                        height={1024}
                        className="w-full object-cover"
                        loading="lazy"
                        quality={100}
                        />
                </div>
                <div className="card_content flex flex-col gap-2">
                <div className="flex justify-between items-center relative case-article">
                <div>
                    <span className="card_subtitle text-[16px] text-[#ff3221] font-bold"> CLIENT STORY</span>
                    <h4 className="card_title text-[20px] font-bold text-black"> Client’s Satisfaction Is Our Elevation</h4>
                    </div>
                    <Link href="/case-studies">
                        <div className="flex gap-4">
                            <p className="uppercase text-[14px]">read more</p>
                            <Image src="/images/icons/checked.svg" alt="icons" width="20" height="20" className="w-[20px] h-[20px]"/>
                        </div>
                        </Link>
                    </div>
                    <p className="card_description">
                        We have been effectively empowering our clients around the world with relevant, cutting-edge, and precise data to accomplish better organizational execution.
                    </p>
                    
                </div>
            </article>
                </div>
            </Container>
        </section>
    )
}