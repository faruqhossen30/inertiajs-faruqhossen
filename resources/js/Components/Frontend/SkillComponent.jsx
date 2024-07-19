function SkillComponent({skill}) {
    return (
        <div className="col-span-4 border dark:border-gray-700 rounded-lg shadow-lg p-5">
            <div className="relative flex justify-center items-center w-14 p-3 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
                {/* <svg className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg> */}

                <img src={window.location.protocol + '/storage/' + skill.thumbnail} alt="photo" className="h-10 w-10" />

            </div>
            <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400">{skill.name}</h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">{skill.description}</p>
            </div>
        </div>
    )
}

export default SkillComponent
