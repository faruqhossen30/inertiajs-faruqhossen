import AppLayout from '@/Layouts/AppLayout';
import { Link, Head } from '@inertiajs/react';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import FeatureStatus from '@/Components/Homepage/FeatureStatus';
import Feature from '@/Components/Homepage/Feature';
import Testimonial from '@/Components/Homepage/Testimonial';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function BlogPage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Customer stories</h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">See how game-changing companies are making the most of every engagement with Preline.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <a className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10" href="#">
                        <div className="aspect-w-16 aspect-h-10">
                            <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Image Description" />
                        </div>
                        <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                            Unity’s inside sales team drives 80% of its revenue with Preline.
                        </h3>
                        <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Learn more
                            <ArrowRightIcon className="h-4 w-4" />
                        </p>
                    </a>


                </div>

            </div>
        </AppLayout>
    );
}





