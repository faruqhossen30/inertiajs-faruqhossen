import React from 'react'

function SkillComponent() {
    return (
        <div className="col-span-4 border rounded-lg shadow-lg p-5">
            <div class="relative flex justify-center items-center w-14 p-3 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
                <svg class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
            </div>
            <div class="mt-5">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Responsive</h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400">Responsive, and mobile-first project on the web</p>
            </div>
        </div>
    )
}

export default SkillComponent
