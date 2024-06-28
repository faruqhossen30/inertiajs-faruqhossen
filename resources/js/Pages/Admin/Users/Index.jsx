import ButtonPlus from '@/Components/Button/ButtonPlus';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import Pagination from '@/Components/Table/Pagination';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function Index({ auth, users }) {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-between items-center">
                <BreadcumComponent pageOne="Users" pageOneRoute="" />
                {/* <ButtonPlus routeName="" /> */}
            </div>



            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">


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
                                                    Email
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
                                        users.data.map((item, index) => {
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
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.email}</span>
                                                    </div>
                                                </td>



                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5 flex space-x-1">
                                                        <Link href={route('user.show', item.id)} method="GET" as="button" className="border p-1 rounded-md dark:border-gray-700 text-gray-500">
                                                            <EyeIcon className="w-4 h-4" />
                                                        </Link>

                                                        <Link href={route('package.edit', item.id)} className="border p-1 rounded-md dark:border-gray-700 text-green-500">
                                                            <PencilIcon className="w-4 h-5" />
                                                        </Link>
                                                        <Link href={route('user.destroy', item.id)} method="Delete" as="button" className="border p-1 rounded-md dark:border-gray-700 text-red-500">
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

                            <Pagination pagination={users} links={users.links} />
                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
