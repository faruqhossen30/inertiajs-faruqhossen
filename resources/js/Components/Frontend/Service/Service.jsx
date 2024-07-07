import { StarIcon } from '@heroicons/react/24/outline'

export default function Service() {
    return (
        <div className="col-span-6 md:col-span-4">
            <a className="flex flex-col group bg-white border shadow-sm rounded-md overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]" href="#">
                <div className=" overflow-hidden">
                    <img className="w-full object-fill group-hover:scale-105 transition-transform duration-500 ease-in-out" src="./marketing.png" alt="Image Description" />
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-400 py-3">
                        SEO keyword research and
                        competitors analysis
                    </h3>
                    <div className="text-center">
                        <div className="flex space-x-1 justify-center">
                            <StarIcon className="text-gray-800 dark:text-gray-400 h-4 w-4" />
                            <StarIcon className="text-gray-800 dark:text-gray-400 h-4 w-4" />
                            <StarIcon className="text-gray-800 dark:text-gray-400 h-4 w-4" />
                            <StarIcon className="text-gray-800 dark:text-gray-400 h-4 w-4" />
                            <StarIcon className="text-gray-800 dark:text-gray-400 h-4 w-4" />
                        </div>

                        <p className="text-sm py-2 text-gray-800 dark:text-gray-400">
                            <span className="font-bold">4.6</span> /5 - from 12k reviews
                        </p>
                    </div>

                </div>
                <div className="flex items-center justify-between p-3 border-t sm:px-5 dark:border-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-400">Start $10</span>
                    <button type="button" className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-gray-500 hover:text-white hover:bg-gray-500 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm  dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
                        Order Now !
                    </button>
                </div>
            </a>
        </div>
    )
}
