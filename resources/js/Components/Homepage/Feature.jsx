import { ServerStackIcon } from '@heroicons/react/24/outline'
import { TbSeo } from "react-icons/tb";
import { MdPreview } from "react-icons/md";
import { TbHttpOptions } from "react-icons/tb";
import { GiArchiveResearch } from "react-icons/gi";
import React from 'react'

export default function Feature() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto">
                <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                    <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
                        Featurs Section
                    </h2>
                    <p className="mt-3 text-gray-800 dark:text-gray-200">
                        The powerful and flexible theme for all kinds of businesses.
                    </p>
                </div>
            </div>


            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                    <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
                        We tackle the challenges start-ups face
                    </h2>
                    <p className="mt-2 md:mt-4 text-gray-500">
                        Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.
                    </p>
                </div>


                <div className="lg:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12">

                        <div className="flex gap-x-5">
                            <TbSeo className="h-8 w-8" />
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    SEO AUDIT
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    Conduct deep technical
                                    audits to find gaps
                                    based on target keywords.
                                </p>
                            </div>
                        </div>



                        <div className="flex gap-x-5">
                            <MdPreview className="h-8 w-8" />
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    REVIEW & UPDATE
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    Testing everything
                                    and constantly improving
                                    SEO strategy.
                                </p>
                            </div>
                        </div>



                        <div className="flex gap-x-5">
                            <GiArchiveResearch className="h-8 w-8" />
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    RESEARCH
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    Run meticulous
                                    Keyword research and
                                    advanced rank tracking.
                                </p>
                            </div>
                        </div>



                        <div className="flex gap-x-5">
                            <TbHttpOptions className="h-8 w-8" />
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    OPTIMIZATION
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    Target On-page,
                                    Off-page SEO features
                                    to optimize website.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}
