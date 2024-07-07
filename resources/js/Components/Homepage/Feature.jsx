import { CircleStackIcon, CodeBracketIcon, MagnifyingGlassCircleIcon, ServerIcon, ServerStackIcon } from '@heroicons/react/24/outline'

export default function Feature() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto">
                <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                    <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
                        Featurs Section
                    </h2>
                    <p className="mt-3 text-gray-800 dark:text-gray-200">
                        The powerful and flexible theme for all kinds of businesses.
                    </p>
                </div>
            </div>


            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                    <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
                    Professional Summary
                    </h2>
                    <p className="mt-2 md:mt-4 text-gray-500">
                    Experienced PHP Laravel Developer with a strong background in developing and maintaining scalable web applications. Proficient in utilizing Laravel's robust features to create secure, high-performance applications. Skilled in Shopify development, integrating third-party services, and ensuring smooth deployment processes. Adept at working collaboratively in agile environments and committed to continuous learning and improvement.
                    </p>
                </div>


                <div className="lg:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12">

                        <div className="flex gap-x-5">
                            <CircleStackIcon className="h-14 w-14" />
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Requirement Gathering and Analysis
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    Meet with stakeholders to understand their needs.
                                    Analyze the requirements to determine project scope and objectives.
                                </p>
                            </div>
                        </div>



                        <div className="flex gap-x-5">
                            <div>
                                <CodeBracketIcon className="h-8 w-8" />
                            </div>
                            <div className="">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Building the Application
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    Develop the application's core features by creating models, controllers, and views.
                                    Implement authentication and authorization built-in features.
                                    Write business logic and handle data processing in controllers and models.
                                </p>
                            </div>
                        </div>



                        <div className="flex gap-x-5">
                            <div>
                                <MagnifyingGlassCircleIcon className="h-8 w-8" />
                            </div>
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Testing and Debugging
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    Write and run unit tests and feature tests using Laravel's testing tools.
                                    Debug and fix any issues found during testing.
                                    Perform code reviews to ensure code quality and maintainability.
                                </p>
                            </div>
                        </div>



                        <div className="flex gap-x-5">
                            <div>
                                <ServerIcon className="h-8 w-8" />
                            </div>
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Deployment
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    Prepare the application for deployment by optimizing performance and security.
                                    Deploy the application to a staging or production server.
                                    Set up continuous integration and continuous deployment (CI/CD) pipelines if necessary.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}
