import { Link, usePage } from '@inertiajs/react'

const Pagination = ({ pagination, links = [], meta = null }) => {
    const { props } = usePage();
    const cat = props.request.category ?? null;
    return (
        <div className="px-2">
            <div className="my-2 sm:flex sm:flex-1 sm:items-center lg:justify-between">
                <p className="text-sm leading-5 text-gray-700 py-2">
                    Showing{' '}
                    <span className="font-medium">
                        {meta ? meta.from : pagination.from}
                    </span>
                    /
                    <span className="font-medium">
                        {meta ? meta.to : pagination.to}{' '}
                    </span>
                    (
                    <span className="font-medium">
                        {meta ? meta.total : pagination.total}
                    </span>{' '}
                    total)
                </p>
                <div>
                    <span className="relative z-0 inline-flex shadow-sm">
                        <span>
                            {links.map((link, index) => {
                                const key = link.label + index
                                if (link.active) {
                                    return (
                                        <span key={key}>
                                            <span
                                                className="relative -ml-px inline-flex cursor-default items-center border border-gray-300 dark:border-gray-700 bg-gray-500 px-4 py-1 text-sm font-medium leading-5 text-gray-100"
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            ></span>
                                        </span>
                                    )
                                }

                                if (link.url === null) {
                                    return (
                                        <span key={key}>
                                            <span
                                                className="relative -ml-px inline-flex items-center border border-gray-300 dark:border-gray-700 px-4 py-1 text-sm font-medium leading-5 text-gray-300"
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            ></span>
                                        </span>
                                    )
                                }

                                return (
                                    <span key={key}>
                                        <Link
                                            href={cat ? link.url + ('&category='+cat) : link.url}
                                            preserveState={true}
                                            className="relative -ml-px inline-flex items-center border border-gray-200 dark:border-gray-700  px-4 py-1 text-sm font-medium leading-5 text-gray-700 hover:bg-gray-300"
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        ></Link>
                                    </span>
                                )
                            })}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Pagination
