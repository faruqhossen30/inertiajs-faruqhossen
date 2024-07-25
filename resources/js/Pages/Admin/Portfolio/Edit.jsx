
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function Create({ auth, portfolio, categories }) {
    const { data, setData, put,post, processing, errors, reset } = useForm({
        title: portfolio.title,
        description: portfolio.description,
        category_id: portfolio.category_id,
        thumbnail: null,
        status: portfolio.status,
    });

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('portfolioupdate', portfolio.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Categories" pageOneRoute="skill.index" />

            <form onSubmit={submit}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Category Create
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
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={data.description}
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                // console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                                // console.log(editor.getData());
                                                setData('description', editor.getData())
                                            }}
                                            onBlur={(event, editor) => {
                                                // console.log('Blur.', editor);
                                            }}
                                            onFocus={(event, editor) => {
                                                // console.log('Focus.', editor);
                                            }}
                                        />
                                        <p className="text-sm text-red-600 mt-2">{errors.description}</p>
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
                                    Category Create
                                </p>
                            </div>
                            <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">
                                <div>
                                    <InputLabel isRequired={true} labelFor="thumbnail" />
                                    <input id="thumbnail" type="file" name="thumbnail" placeholder="thumbnail" onChange={(e) => setData('thumbnail', e.target.files[0])} />
                                    <p className="text-sm text-red-600 mt-2">{errors.thumbnail}</p>
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

                            </div>
                        </div>
                    </div>
                </div>
            </form>




        </AuthenticatedLayout>
    );
}
