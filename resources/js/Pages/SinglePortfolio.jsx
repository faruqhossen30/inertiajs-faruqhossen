import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';


export default function SinglePortfolio({portfolio}) {

    return (
        <AppLayout>
            <Head title={portfolio.slug} />
            <section class="py-5">
                <div class="container mx-auto">
                    <div class="grid grid-cols-12 md:gap-14">
                        <div class="col-span-12 lg:col-span-8">
                            <div className="py-2">
                                <h3 class="text-gray-800 text-2xl font-bold dark:text-gray-400">How to get creative in your work ?</h3>
                            </div>
                            <div class="">
                                <img src={window.location.origin + '/img14.jpg'} className="w-full rounded-md" alt="some" />
                            </div>
                            <ul class="flex flex-wrap items-center mt-3 mb-0 text-gray-500">
                                <li>
                                    <div class="flex items-center">
                                        <div class="shrink-0">
                                            <img src="assets/images/user/img-03.jpg" alt="" class="w-12 h-12 rounded-full" />
                                        </div>
                                        <div class="ltr:ml-3 rtl:mr-3">
                                            <a href="blog-author.html" class="text-gray-900 dark:text-white"><h6 class="mb-0 dark:text-gray-300">By Alice Mellor</h6></a>
                                        </div>
                                    </div>
                                </li>
                                <li class="ltr:ml-3 rtl:mr-3">
                                    <div class="flex items-center">
                                        <div class="shrink-0">
                                            <i class="uil uil-calendar-alt"></i>
                                        </div>
                                        <div class="ltr:ml-2 rtl:mr-2">
                                            <p class="mb-0 dark:text-gray-300"> Aug 02, 2021</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="ltr:ml-3 rtl:mr-3">
                                    <div class="flex items-center">
                                        <div class="shrink-0">
                                            <i class="uil uil-comments-alt"></i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="mt-4">
                                <h5 class="mb-2 text-gray-900 dark:text-gray-50">What makes the best co-working space?</h5>
                                <p class="text-gray-500 dark:text-gray-300">Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.</p>
                                <p class="mb-4 text-gray-500 dark:text-gray-300">Home renovations, especially those involving plentiful of demolition can be a very dusty affair. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all making mistakes.</p>
                                <figure class="text-center blog-blockquote">
                                    <blockquote class="blockquote">
                                        <p class="text-17 dark:text-gray-50">"A business consulting agency is involved in the planning, implementation, and education of businesses."</p>
                                    </blockquote>
                                    <figcaption class="mb-4 text-base text-gray-500 blockquote-footer dark:text-gray-300">
                                        — Creative Agency<cite title="Source Title" class="font-semibold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"> Alice Mellor</cite>
                                    </figcaption>
                                </figure>
                                <p class="text-gray-500 dark:text-gray-300">Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.</p>
                                <p class="text-gray-500 dark:text-gray-300">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>

                                <ul class="flex gap-2 mb-0 md:justify-start py-10">
                                    <li>
                                        <b class="text-gray-900 dark:text-gray-50">Share post:</b>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/sharer/sharer.php?u=" target='_blank'
                                            class="px-3 py-1 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span>Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/intent/tweet?url=" target='_blank'
                                            class="px-3  py-1  space-x-2 text-xs font-medium text-center inline-flex items-center text-white bg-[#1DA1F2] rounded-lg hover:bg-blue-800  focus:outline-none  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="w-4 h-4 text-white  dark:text-white mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=" target='_blank'
                                            class="px-3  py-1  space-x-2 text-xs font-medium text-center inline-flex items-center text-white bg-[#E4405F] rounded-lg hover:bg-blue-800  focus:outline-none  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="w-4 h-4 text-white mr-1 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=" target='_blank'
                                            class="px-3  py-1  space-x-2 text-xs font-medium text-center inline-flex items-center text-white bg-[#0A66C2] rounded-lg hover:bg-blue-800  focus:outline-none  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                                    clip-rule="evenodd" />
                                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                            </svg>
                                            linkedin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://api.whatsapp.com/send?text=" target='_blank'
                                            class="px-3  py-1  space-x-2 text-xs font-medium text-center inline-flex items-center text-white bg-green-400 rounded-md hover:bg-blue-800  focus:outline-none  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path
                                                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                            </svg>
                                            <span class="ml-2">Whatsup</span>
                                        </a>
                                    </li>
                                </ul>


                            </div>

                        </div>
                        <div class="col-span-12 lg:col-span-4">
                            <div class="mt-8">
                                <h6 class="mb-2 text-gray-900 text-16 dark:text-gray-50">Popular Post</h6>
                                {/* <div class="w-full h-0.5 rounded-full bg-gray-100/60 dark:bg-gray-500/20">
                                            <div class="group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 w-[25%] h-0.5 ltr:rounded-l-full rtl:rounded-r-full" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div> */}
                                <ul class="my-4">
                                    <li class="flex flex-wrap items-center pb-4 mb-4 border-b gap-y-3 md:gap-y-0 border-gray-100/50 dark:border-zinc-600">
                                        <img src="assets/images/blog/img-01.jpg" alt="" class="w-[86px] object-cover h-16 rounded" />
                                        <div class="ltr:ml-3 rtl:mr-3 grow">
                                            <a href="blog-details.html" class="overflow-hidden font-medium text-gray-900 truncate dark:text-gray-50">The evolution of landing page creativity</a>
                                            <span class="block text-sm text-gray-500 dark:text-gray-300">Aug 10, 2021</span>
                                        </div>
                                    </li>
                                    <li class="flex flex-wrap items-center pb-4 mb-4 border-b gap-y-3 md:gap-y-0 border-gray-100/50 dark:border-zinc-600">
                                        <img src="assets/images/blog/img-02.jpg" alt="" class="w-[86px] object-cover h-16 rounded" />
                                        <div class="ltr:ml-3 rtl:mr-3 grow"><a href="blog-details.html" class="overflow-hidden font-medium text-gray-900 truncate dark:text-gray-50">Beautiful day with friends in paris</a>
                                            <span class="block text-sm text-gray-500 dark:text-gray-300">Jun 24, 2021</span>
                                        </div>
                                    </li>
                                    <li class="flex flex-wrap items-center pb-4 mb-4 border-b gap-y-3 md:gap-y-0 border-gray-100/50 dark:border-zinc-600">
                                        <img src="assets/images/blog/img-03.jpg" alt="" class="w-[86px] object-cover h-16 rounded" />
                                        <div class="ltr:ml-3 rtl:mr-3 grow"><a href="blog-details.html" class="overflow-hidden font-medium text-gray-900 truncate dark:text-gray-50">Project discussion with team</a>
                                            <span class="block text-sm text-gray-500 dark:text-gray-300">July 13, 2021</span>
                                        </div>
                                    </li>
                                    <li class="flex flex-wrap items-center pb-4 mb-4 gap-y-3 md:gap-y-0">
                                        <img src="assets/images/blog/img-10.jpg" alt="" class="w-[86px] object-cover h-16 rounded" />
                                        <div class="ltr:ml-3 rtl:mr-3 grow"><a href="blog-details.html" class="overflow-hidden font-medium text-gray-900 truncate dark:text-gray-50">Smartest Applications for Business</a>
                                            <span class="block text-sm text-gray-500 dark:text-gray-300">Feb 01, 2021</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-8">
                                <h6 class="mb-2 text-gray-900 text-16 dark:text-gray-50">Latest Tags</h6>
                                <div class="ltr:ml-2 rtl:mr-2 flex-grow-1 space-x-2">
                                        <a href="javascript:void(0)" class="px-1.5 py-0.5 mt-1 text-sm font-medium text-green-500 bg-green-500/20 rounded">Business</a>
                                        <a href="javascript:void(0)" class="px-1.5 py-0.5 mt-1 text-sm font-medium text-green-500 bg-green-500/20 rounded">design</a>
                                        <a href="javascript:void(0)" class="px-1.5 py-0.5 mt-1 text-sm font-medium text-green-500 bg-green-500/20 rounded">Creative</a>
                                        <a href="javascript:void(0)" class="px-1.5 py-0.5 mt-1 text-sm font-medium text-green-500 bg-green-500/20 rounded">Event</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </AppLayout>
    );
}





