import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function ContactPage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="Service" />

            <div className="bg-[#3B82F6] dark:bg-gray-700 p-4 my-3 text-center te">
                <span className="text-white dark:text-gray-400 font-bold text-2xl">Search Engine Optimization (SEO) in Cheap Rate</span>
            </div>

            <div className="bg-gray-50 p-12">
                <h2 className='text-2xl text-bold py-6 '>We are most affordable SEO Service <br />
                    Provider in Bangladesh</h2>
                <p> Do you need SEO services? Now you are in right place! 100% Organic<br />
                    & White hat Services! Large iT Provide Worldwide SEO services for<br />
                    small and big business. Thousand of SEO Expert in Bangladesh but<br />
                    we are one of the top rated SEO Expert in Bangladesh. During our<br />
                    SEO we always apply the ethical and white hat SEO to rank on<br />
                    Search Engine Result Page (SERP)</p>
            </div>


            <div className="bg-[#3B82F6] dark:bg-gray-700 p-4 my-3 text-center ">
                <span className="text-white dark:text-gray-400 font-bold text-2xl">Buy Our Best SEO Services Pricing</span>
                <p className='text-white  font-thin '>We are 100% Ethical SEO Service offering transparent SEO Cost for Local, National & International Ranking on Google.</p>
            </div>


            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    {/* <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    </div> */}
                    <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/* <!-- Pricing Card --> */}
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-700 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold bg-blue-600 border rounded text-white "><a href="#">Beginner</a></h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$29</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* <!-- List --> */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Team size: <span className="font-semibold">1 developer</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span className="font-semibold">6 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span className="font-semibold">6 months</span></span>
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Order Now</a>
                        </div>
                        {/* <!-- Pricing Card --> */}
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-700 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold bg-blue-600 border rounded text-white"><a href="#">Company</a></h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$99</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* <!-- List --> */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Team size: <span className="font-semibold">10 developers</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span className="font-semibold">24 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span className="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Order Now</a>
                        </div>
                        {/* <!-- Pricing Card --> */}
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-700 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold bg-blue-600 border rounded text-white"><a href="#">Enterprise</a></h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$499</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* <!-- List --> */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Team size: <span className="font-semibold">100+ developers</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span className="font-semibold">36 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span className="font-semibold">36 months</span></span>
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Order Now</a>
                        </div>
                        {/* <!-- Pricing Card --> */}
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-700 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold bg-blue-600 border rounded text-white"><a href="#">Enterprise</a></h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$499</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* <!-- List --> */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Team size: <span className="font-semibold">100+ developers</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span className="font-semibold">36 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span className="font-semibold">36 months</span></span>
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Order Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
