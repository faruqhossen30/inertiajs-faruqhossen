import SkillComponent from '@/Components/Frontend/SkillComponent'
import AppLayout from '@/Layouts/AppLayout'
import { PencilIcon } from '@heroicons/react/24/outline'
import { CodeBracketIcon, HomeIcon } from '@heroicons/react/24/solid'

function SkillPage() {

    return (
        <AppLayout >
            <div className="bg-white dark:bg-gray-700 p-4 my-3 border">
                <span className="text-gray-800 dark:text-gray-400 text-lg font-bold">Skills</span>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3 hidden md:block py-1">
                    <ul className="max-w-xs flex flex-col divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 mb-4 rounded-md border">
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

                </div>
                <div className="col-span-12 md:col-span-9 ">
                    <div className="grid grid-cols-12 gap-4">
                        <SkillComponent />
                        <SkillComponent />
                        <SkillComponent />
                        <SkillComponent />
                        <SkillComponent />
                        <SkillComponent />
                        <SkillComponent />
                        <SkillComponent />
                        <SkillComponent />
                        <SkillComponent />
                        <SkillComponent />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default SkillPage
