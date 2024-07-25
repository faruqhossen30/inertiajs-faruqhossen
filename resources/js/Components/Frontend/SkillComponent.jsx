function SkillComponent({skill}) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 border dark:border-gray-700 rounded-lg shadow-lg p-5">
            <div className="relative flex justify-center items-center w-14 p-3 bg-white dark:bg-transparent rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl ">
                <img src={window.location.protocol + '/storage/' + skill.thumbnail} alt={skill.name} className="h-10 w-10" />
            </div>
            <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400">{skill.name}</h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">{skill.description}</p>
            </div>
        </div>
    )
}

export default SkillComponent
