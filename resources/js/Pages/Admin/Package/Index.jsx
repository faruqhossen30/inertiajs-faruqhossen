import ButtonPlus from '@/Components/Button/ButtonPlus';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SearchFilter from '@/Components/Table/SearchFilter';
import Pagination from '@/Components/Pagination';


export default function Index({ auth, packages }) {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-between items-center">
                <BreadcumComponent pageOne="Packages" pageOneRoute="package.index" />
                <ButtonPlus routeName={route("package.create")} />
            </div>



            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                        <SearchFilter routeName={'package.index'} />

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
                                                    Action
                                                </span>
                                            </div>
                                        </th>


                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                                    {
                                        packages.data.map((item, index) => {
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
                                                    <div className="px-6 py-1.5 flex space-x-1">
                                                        <Link href={route('category.destroy', item.id)} method="Delete" as="button" className="border p-1 rounded-md dark:border-gray-700 text-gray-500">
                                                            <EyeIcon className="w-4 h-4" />
                                                        </Link>

                                                        <Link href={route('package.edit', item.id)} className="border p-1 rounded-md dark:border-gray-700 text-green-500">
                                                            <PencilIcon className="w-4 h-5" />
                                                        </Link>
                                                        <Link href={route('package.destroy', item.id)} method="Delete" as="button" className="border p-1 rounded-md dark:border-gray-700 text-red-500">
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
                            <Pagination pagination={packages} links={packages.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
