import { ServerStackIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { FaCode } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { SiAdobe } from "react-icons/si";
import { IoPhonePortrait } from "react-icons/io5";
import { MdBrandingWatermark } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

export default function ServiceSection() {
    return (
        <>
            <div className="mx-auto">
                <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                    <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
                        Explore tools
                    </h2>
                    <p className="mt-3 text-gray-800 dark:text-gray-200">
                        The powerful and flexible theme for all kinds of businesses.
                    </p>
                </div>
            </div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">

                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 border dark:border-gray-700">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <FaCode className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Laravel Framework</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Proficient in building scalable web applications using Laravel, focusing on MVC architecture and RESTful APIs.</p>
                    </div>



                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 border dark:border-gray-700">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <TbSeo className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">PHP Programming</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Extensive experience in server-side scripting with PHP, ensuring efficient and secure web application development.</p>
                    </div>



                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 border dark:border-gray-700">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <VideoCameraIcon className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Shopify Development</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Skilled in customizing Shopify stores, creating themes, and developing custom apps to enhance e-commerce functionality.</p>
                    </div>



                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 border dark:border-gray-700">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <SiAdobe className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Web Design</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Skilled in creating mobile-friendly websites that adapt to different screen sizes, enhancing user experience across devices.</p>
                    </div>



                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 border dark:border-gray-700">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <IoPhonePortrait className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">MySQL Database Management</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Adept at designing and managing MySQL databases to ensure data integrity and optimal performance.</p>
                    </div>



                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 border dark:border-gray-700">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <MdBrandingWatermark className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">API Integration</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Experienced in integrating third-party APIs, enabling seamless connectivity between different services and applications.</p>
                    </div>
                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 border dark:border-gray-700">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <FaBuilding className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Version Control with Git</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Proficient in using Git for version control, facilitating efficient collaboration and code management.

</p>
                    </div>
                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 border dark:border-gray-700">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <ServerStackIcon className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Problem-Solving</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Strong analytical skills for troubleshooting issues and optimizing code for better performance and scalability.</p>
                    </div>
                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 border dark:border-gray-700">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <ServerStackIcon className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Project Management</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Effective in managing projects from conception to deployment, ensuring timely delivery and adherence to client requirements.</p>
                    </div>

                </div>
            </div>
        </>

    )
}
