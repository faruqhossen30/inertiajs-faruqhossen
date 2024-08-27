
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import ThumbnailInput from '@/Components/Form/ThumbnailInput';

export default function Create({ auth, category }) {
    console.log(category);
    const { data, setData, put, post, processing, errors, reset } = useForm({
        name     : category.name,
        thumbnail: category.thumbnail,
        status   : category.status,

    });

    function submit(e) {
        e.preventDefault()
        post(route('categoryupdate', category.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Categories" pageOneRoute="category.index" />

            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Edit Category
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
                            <SubmitButton title={'Update'} />
                        </form>
                    </div>
                </div>
            </div>





        </AuthenticatedLayout>
    );
}
