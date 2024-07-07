import { PlusIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'

function ButtonPlus({routeName}) {
    return (
        <div className="">
            <Link href={routeName ?? "#"}
                className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <PlusIcon className="w-4 h-4" />
                <span>Create</span>
            </Link>
        </div>

    )
}

export default ButtonPlus
