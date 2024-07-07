import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { CodeBracketIcon, HomeIcon, PencilIcon, StarIcon } from '@heroicons/react/24/outline';
import Service from '@/Components/Frontend/Service/Service';

export default function ServicePage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="ServicePage" />
            <div className="bg-white dark:bg-gray-700 p-4 my-3">
                <span className="text-gray-800 dark:text-gray-400 text-lg font-bold">SEO</span>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3 hidden md:block py-1">
                    <ul className="max-w-xs flex flex-col divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 mb-4 rounded-md">
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">

                            <span className="text-lg font-bold">All Category</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>SEO</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>Digital Marketing</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <CodeBracketIcon className="w-4 h-4" />
                            <span>Programming</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <PencilIcon className="w-4 h-4" />
                            <span>Graphics Design</span>
                        </li>
                    </ul>
                    <ul className="max-w-xs flex flex-col divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 mb-4 rounded-md">
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">

                            <span className="text-lg font-bold">Sub Category</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>Keyword Research</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>On-Site Optimization</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>Backlinks</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>PBN Links</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>HARO Links</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>Technical SEO</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>Link Insertions</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>Video SEO</span>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                            <HomeIcon className="w-4 h-4" />
                            <span>Local SEO</span>
                        </li>
                    </ul>
                    <div className="bg-white dark:bg-gray-800 mb-4 rounded-md px-4 py-2 space-y-2">
                        <div className="inline-flex items-center gap-x-2 py-1 text-sm font-medium text-gray-800 dark:text-gray-400 border-b w-full">
                            <span className="text-lg font-bold">Delivery Days</span>
                        </div>

                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                            <label for="hs-default-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 10 days</label>
                        </div>

                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                            <label for="hs-checked-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 20 days</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                            <label for="hs-checked-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 20 days</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                            <label for="hs-checked-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 20 days</label>
                        </div>
                    </div>

                </div>
                <div className="col-span-12 md:col-span-9 ">
                    <div className="grid grid-cols-12 gap-4">
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                    </div>
                </div>
            </div>

        </AppLayout>
    );
}
