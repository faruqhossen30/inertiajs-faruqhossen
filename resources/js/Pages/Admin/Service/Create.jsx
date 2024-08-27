
import { useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'react-quill/dist/quill.snow.css';
import ThumbnailInput from '@/Components/Form/ThumbnailInput';
import RichTextEditor from '@/Components/RichTextEditor';


export default function Create({ auth, packages }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description_code: '',
        short_description: '',
        thumbnail: null,
        package: [],
        status: 1,
    });

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('service.store'));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Services" pageOneRoute="service.index" />
            <form onSubmit={submit}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Service Create
                                </p>
                            </div>
                            <div className="p-4 md:p-5">
                                <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                                    <div>
                                        <InputLabel isRequired={true} labelFor="title" />
                                        <Input id="title" type="text" name="title" value={data.title} autoComplete="title" placeholder="title" onChange={(e) => setData('title', e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                    </div>


                                    <div>
                                        <InputLabel isRequired={true} labelFor="Description Code" />
                                        <textarea id="description_code" type="file" name="description_code" placeholder="description_code" onChange={(e) => setData('description_code', e.target.value)}
                                            className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></textarea>
                                        <p className="text-sm text-red-600 mt-2">{errors.thumbnail}</p>
                                    </div>


                                    <div className='pb-20'>
                                        <InputLabel isRequired={true} labelFor="Description" />
                                        <RichTextEditor setData={setData} data={data} name="short_description" />
                                    </div>
                                    <SubmitButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Service Create
                                </p>
                            </div>
                            <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">
                                <div className="max-w-xs">
                                    <InputLabel isRequired={true} labelFor="thumbnail" />
                                    <ThumbnailInput name="thumbnail" setData={setData} errors={errors} placeholder="Thumbnail" />
                                </div>
                                <div>
                                    <InputLabel isRequired={true} labelFor="status" />
                                    <select id="status" name="status" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        onChange={(e) => setData('status', e.target.value)}>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                </div>

                                <div className='space-y-2'>
                                    {
                                        packages.map((pack, index) => {
                                            return <div className="flex" key={index}>
                                                <input name="package[]" type="checkbox" checked={pack.id} onChange={(e) => setData('package', e.target.checked)} id={index} className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                                <label htmlFor={index} className="text-sm text-gray-500 ms-3 dark:text-neutral-400">{pack.name}</label>
                                            </div>
                                        })
                                    }


                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </form>

        </AuthenticatedLayout>
    );
}
