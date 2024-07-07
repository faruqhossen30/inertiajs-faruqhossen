import AppLayout from '@/Layouts/AppLayout'
import { Tab } from '@headlessui/react'
import { HomeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

function SkillPage() {

    let [categories] = useState({
        Recent: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    return (
        <AppLayout >


            <div className="p-5">
                <Tab.Group as="div" className="grid grid-cols-12">
                    <Tab.List as="div" className="col-span-3 border-r divide-y space-y-2 p-4">
                        <Tab as="div" className="flex items-center space-y-2 space-x-2 cursor-pointer">
                            <HomeIcon className="w-4 h-4" />
                            <span>Web Design</span>
                        </Tab>
                        <Tab as="div" className="flex items-center space-y-2 space-x-2 cursor-pointer">
                            <HomeIcon className="w-4 h-4" />
                            <span>Web Design</span>
                        </Tab>
                        <Tab as="div" className="flex items-center space-y-2 space-x-2 cursor-pointer">
                            <HomeIcon className="w-4 h-4" />
                            <span>Web Design</span>
                        </Tab>
                    </Tab.List>
                    <Tab.Panels as="div" className="col-span-9" >
                        <Tab.Panel as="div" className="gird grid-cols-12 ">

                            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">

                                    <div>
                                        <svg className="flex-shrink-0 size-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
                                        <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                                            <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
                                        </div>
                                        <div className="mt-5">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Responsive</h3>
                                            <p className="mt-1 text-gray-600 dark:text-neutral-400">Responsive, and mobile-first project on the web</p>
                                        </div>
                                    </div>



                                    <div>
                                        <svg className="flex-shrink-0 size-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg>
                                        <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                                            <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
                                        </div>
                                        <div className="mt-5">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Customizable</h3>
                                            <p className="mt-1 text-gray-600 dark:text-neutral-400">Components are easily customized and extendable</p>
                                        </div>
                                    </div>



                                    <div>
                                        <svg className="flex-shrink-0 size-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                        <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                                            <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
                                        </div>
                                        <div className="mt-5">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Documentation</h3>
                                            <p className="mt-1 text-gray-600 dark:text-neutral-400">Every component and plugin is well documented</p>
                                        </div>
                                    </div>



                                    <div>
                                        <svg className="flex-shrink-0 size-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                                        <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                                            <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
                                        </div>
                                        <div className="mt-5">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
                                            <p className="mt-1 text-gray-600 dark:text-neutral-400">Contact us 24 hours a day, 7 days a week</p>
                                        </div>
                                    </div>

                                </div>
                            </div>




                        </Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>




        </AppLayout>
    )
}

export default SkillPage
