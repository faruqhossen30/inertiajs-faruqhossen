
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';


export default function Edit({ auth, pac }) {
    console.log(pac);
    const { data, setData, put, processing, errors, reset } = useForm({
        name: pac.name,
        thumbnail: pac.thumbnail,
        description: pac.description,
    });

    function submit(e) {
        e.preventDefault()
        put(route('package.update', pac.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Packages" pageOneRoute="package.index" />

            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Edit Package
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

                            {/* <div>
                                <InputLabel isRequired={true} labelFor="thumbnail" />
                                <input id="thumbnail" type="file" name="thumbnail"  value={data.thumbnail}  placeholder="thumbnail"     } />
                                <p className="text-sm text-red-600 mt-2">{errors.thumbnail}</p>
                            </div> */}

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
                        </form>
                    </div>
                </div>
            </div>





        </AuthenticatedLayout>
    );
}
