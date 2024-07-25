import { Link } from "@inertiajs/react"

function PortfolioComponent({portfolio}) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-transparent dark:border-gray-700 dark:shadow-neutral-700/70">
            <div className="flex flex-col justify-center items-center bg-blue-600 rounded-t-xl overflow-hidden">
                <img className="w-full object-fill group-hover:scale-105 transition-transform duration-500 ease-in-out" src="./marketing.png" alt="Image Description" />
            </div>
            <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                    Atlassian API
                </span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-400 dark:hover:text-white">
                    {portfolio.title}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    {portfolio.description}
                </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-neutral-700">
                <Link href={route('single.portfolio', portfolio.slug)} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-b-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800">
                    View sample
                </Link>
            </div>
        </div>
    )
}

export default PortfolioComponent
