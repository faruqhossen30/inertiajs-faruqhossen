import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'

export default function HeroSection() {
    return (

        <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] ">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                <div className="flex justify-center">
                    <Link href="#" className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200">
                    Work with experienced Person
                        <span className="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                            <ArrowRightIcon className="w-4 h-4" />
                        </span>
                    </Link>
                </div>

                <div className="mt-5 max-w-2xl text-center mx-auto">
                    <h1 className="block font-bold text-gray-800 text-3xl md:text-5xl lg:text-4xl leading-9 dark:text-gray-200">

                        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent py-2">Design, Develpment, Building, Scallup </span> and
                         <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">  Maintance</span> your website with me
                    </h1>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <p className="text-lg text-gray-600 dark:text-gray-400">I am a skilled developer specializing in Laravel, PHP, and Shopify. I create robust web applications, streamline e-commerce solutions, and deliver seamless user experiences with expertise in these technologies.</p>
                </div>


                <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                    <Link href={route('contact')} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800">
                        Get started
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <a href="https://github.com/faruqhossen30" target="_blank" className="relative group inline-flex justify-center items-center gap-x-3.5 text-center bg-white border hover:border-gray-300 shadow-sm font-mono text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition p-2 pl-4 dark:bg-slate-900 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" >
                        Review my Github Profile
                        <span className="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7 dark:bg-gray-700 dark:text-gray-400">
                            <ArrowRightIcon className="w-4 h-4" />
                        </span>
                    </a>
                </div>


                <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Package Manager:</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">npm</span>

                    <Link className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="#">
                        Installation Guide

                    </Link>
                </div>
            </div>
        </div>

    )
}
