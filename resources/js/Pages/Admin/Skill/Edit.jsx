
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import ThumbnailInput from '@/Components/Form/ThumbnailInput';


export default function Create({ auth, skill, categories }) {
    const { data, setData, put,post, processing, errors, reset } = useForm({
        name: skill.name,
        description: skill.description,
        category_id: skill.category_id,
        thumbnail: skill.thumbnail,
        status: skill.status,
    });

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('skillupdate', skill.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Skills" pageOneRoute="skill.index" />

            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Edit Skill
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel isRequired={true} labelFor="name" />
                                <Input id="name" type="text" name="name" value={data.name} autoComplete="name" placeholder="name" onChange={(e) => setData('name', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.name}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="category" />
                                <select name='category_id' value={data.category_id} id='category' className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" onChange={(e) => setData('category_id', e.target.value)} >
                                    <option value="">Select Category</option>
                                    {
                                        categories.map((cat, index) => {
                                            return <option value={cat.id} key={index}>{cat.name}</option>
                                        })
                                    }
                                </select>
                                <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="Short Description" />
                                <textarea id="description" type="file" name="description" value={data.description} placeholder="description" onChange={(e) => setData('description', e.target.value)}
                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></textarea>
                                <p className="text-sm text-red-600 mt-2">{errors.thumbnail}</p>
                            </div>
                            <div className="max-w-xs">
                                <InputLabel isRequired={true} labelFor="thumbnail" />
                                <ThumbnailInput name="thumbnail" thumbnail={data.thumbnail} setData={setData} errors={errors} placeholder="Thumbnail" />

                            </div>

                            <div>
                                <InputLabel isRequired={true} labelFor="status" />
                                <select id="status" name="status" value={data.status} className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                    onChange={(e) => setData('status', e.target.value)}>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                            </div>
                            <SubmitButton title={'Update'}/>
                        </form>
                    </div>
                </div>
            </div>





        </AuthenticatedLayout>
    );
}
