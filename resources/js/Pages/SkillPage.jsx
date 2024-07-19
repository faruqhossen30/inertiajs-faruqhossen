import CategorySidebar from '@/Components/Frontend/CategorySidebar';
import SkillComponent from '@/Components/Frontend/SkillComponent'
import Pagination from '@/Components/Table/Pagination';
import AppLayout from '@/Layouts/AppLayout'
import { PencilIcon } from '@heroicons/react/24/outline'
import { CodeBracketIcon, HomeIcon } from '@heroicons/react/24/solid'

function SkillPage({ skills }) {
    console.log(skills);

    return (
        <AppLayout >
            <div className="bg-white dark:bg-gray-800 p-4 my-3 border border-gray-200 rounded-md">
                <span className="text-gray-600 dark:text-gray-400 text-lg font-bold">Skills</span>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3 hidden md:block py-1">
                    <CategorySidebar />
                </div>
                <div className="col-span-12 md:col-span-9 ">
                    <div className="grid grid-cols-12 gap-4">
                        {skills.data.map((skill, index) => {
                            return <SkillComponent skill={skill} key={index} />
                        })}
                    </div>

                    <div className="py-10">
                        <Pagination pagination={skills} links={skills.links} />
                    </div>
                </div>

            </div>
        </AppLayout>
    )
}

export default SkillPage
