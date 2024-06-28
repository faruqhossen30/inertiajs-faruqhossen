import { ServerStackIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { FaCode } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { SiAdobe } from "react-icons/si";
import { IoPhonePortrait } from "react-icons/io5";
import { MdBrandingWatermark } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import React from 'react'

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

                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <FaCode className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Web Design</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Create a brand and
                            communicate Your
                            value.</p>
                    </div>



                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <TbSeo className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">SEO</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Fine new clients
                            organically and grow
                            a foundation for
                            tomorrow.</p>
                    </div>



                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <VideoCameraIcon className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Video Production</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Your brand story and it can
                            be used for marketing,
                            advertising, and training
                            purposes.</p>
                    </div>



                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <SiAdobe className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Graphic Design</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Create visually appealing and
                            informative graphics
                            for their websites, social media
                            channels, and
                            marketing materials.</p>
                    </div>



                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <IoPhonePortrait className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Social Media  </h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Manage social media
                            accounts, so that they
                            can connect with
                            their target audience and
                            build relationships</p>
                    </div>



                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <MdBrandingWatermark className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Branding & Content</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">The process of creating a
                            distinct identity for a business
                            in the mind of your target
                            audience and consumers.</p>
                    </div>
                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <FaBuilding className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Branding & Content</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">The process of creating a
                            distinct identity for a business
                            in the mind of your target
                            audience and consumers.</p>
                    </div>
                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <ServerStackIcon className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Software</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">activity concerned with creating,
                            establishing, implementing
                            and designing computer
                            programs.</p>
                    </div>
                    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <ServerStackIcon className="h-6 w-6" />
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">App</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">All techniques and strategies
                            that can help you communicate
                            about your app to your
                            target audience.</p>
                    </div>

                </div>
            </div>
        </>

    )
}
