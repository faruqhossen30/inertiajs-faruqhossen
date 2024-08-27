import ButtonPlus from '@/Components/Button/ButtonPlus';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SearchFilter from '@/Components/Table/SearchFilter';
import Pagination from '@/Components/Pagination';


export default function Index({ auth, skills }) {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-between items-center">
                <BreadcumComponent pageOne="Skills" pageOneRoute="skill.index" />
                <ButtonPlus routeName={route("skill.create")} />
            </div>



            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">


                            <SearchFilter routeName={'skill.index'} />
                            {/* <!-- Table --> */}
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-slate-800">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    S.N
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-left">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Name
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-left">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Photo
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-left">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Status
                                                </span>
                                            </div>
                                        </th>


                                        <th scope="col" className="px-6 py-3 text-left">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Action
                                                </span>
                                            </div>
                                        </th>


                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                                    {
                                        skills.data.map((item, index) => {
                                            return <tr key={index}>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.id}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <img src={window.location.protocol + '/storage/' + item.thumbnail} alt="photo" className="h-4" />
                                                    </div>
                                                </td>

                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                            <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                            </svg>
                                                            Active
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5 flex space-x-1">
                                                        <Link href={route('skill.destroy', item.id)} method="Delete" as="button" className="border p-1 rounded-md dark:border-gray-700 text-gray-500">
                                                            <EyeIcon className="w-4 h-4" />
                                                        </Link>

                                                        <Link href={route('skill.edit', item.id)} className="border p-1 rounded-md dark:border-gray-700 text-green-500">
                                                            <PencilIcon className="w-4 h-5" />
                                                        </Link>
                                                        <Link href={route('skill.destroy', item.id)} method="Delete" as="button" className="border p-1 rounded-md dark:border-gray-700 text-red-500">
                                                            <TrashIcon className="w-4 h-4 " />
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }


                                </tbody>
                            </table>
                            {/* <!-- End Table --> */}
                            <hr />
                            <div className="py-5 px-3">
                            <Pagination pagination={skills} links={skills.links} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
