
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import RichTextEditor from '@/Components/RichTextEditor';
import ThumbnailInput from '@/Components/Form/ThumbnailInput';


export default function Create({ auth, portfolio, categories }) {
    const { data, setData, put, post, processing, errors, reset } = useForm({
        title      : portfolio.title,
        description: portfolio.description,
        category_id: portfolio.category_id,
        thumbnail: portfolio.thumbnail,
        status     : portfolio.status,
    });
console.log(portfolio);

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('portfolioupdate', portfolio.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Portfolios" pageOneRoute="portfolio.index" />

            <form onSubmit={submit}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                Portfolios Edit
                                </p>
                            </div>
                            <div className="p-4 md:p-5">
                                <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                                    <div>
                                        <InputLabel isRequired={true} labelFor="title" />
                                        <Input id="title" type="text" name="title" value={data.title} autoComplete="title" placeholder="title" onChange={(e) => setData('title', e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                    </div>

                                    <div className='pb-20'>
                                        <InputLabel isRequired={true} labelFor="Description" />
                                        <RichTextEditor setData={setData} data={data} name="description" onChange={(e) => setData('description', e.target.value)} />
                                    </div>

                                    <SubmitButton  title={'Update'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                Portfolios Edit
                                </p>
                            </div>
                            <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">
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

                                {/* <InputLabel isRequired={true} labelFor="Category" />
                                <Select
                                    onChange={(e) => setData('category_ids', e.map(item => item.id))}
                                    isMulti
                                    options={categories}
                                    getOptionLabel={option => option.name}
                                    getOptionValue={option => option.id}
                                />

                                <InputLabel isRequired={true} labelFor="tools" />
                                <Select
                                    onChange={(e) => setData('tool_ids', e.map(item => item.category_id))}
                                    isMulti
                                    options={tools}
                                    getOptionLabel={option => option.name}
                                    getOptionValue={option => option.id}
                                /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </form>




        </AuthenticatedLayout>
    );
}
