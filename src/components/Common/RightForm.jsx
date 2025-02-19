import Btn from "@/components/Layout/Btns/Btn";
export default function RightForm (){
    return(
        <>
            <div className="pb-[10px] text-center bg-[#0a0624] p-5 lg:py-6 lg:px-8 form-border-up ">
            <h2 className="text-[20px] font-bold text-white">Request a Quote</h2>
            </div>
            <div className="case-temp-form p-4  bg-[#e7f2ff] mb-12 h-max form-border-down">
            {/* Name Input */}
            <div className="flex gap-3 items-center">
            <div className="mb-4 relative shadow-lg w-[50%]">
            <input
            type="text"
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
            </div>
            <div className="mb-4 relative shadow-lg w-[50%]">
            <input
            type="text"
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
            </div>



            </div>

            {/* Email Input */}


            {/* Phone Input */}
            <div className="mb-4 relative shadow-lg ">
            <input
            type="text"
            id="Email"
            className="block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
            placeholder=" "
            />
            <label
            htmlFor="Email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#fff] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
            Email
            </label>
            </div>


            {/* Select Option */}
            <div className="mb-4 relative shadow-lg">
            <input
            type="text"
            id="Name"
            className="block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
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
            <div className="mb-4 relative shadow-lg">
            <input
            type="text"
            id="Message"
            className="block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#ffff] border border-[#051036] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#000] peer"
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
        </>
    )
}