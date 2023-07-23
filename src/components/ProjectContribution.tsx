import { useState } from 'react';
import folder from '../assets/html-folder.png';
import { projectPropsType } from '../utils/types';

const ProjectContribution = ({ project }: projectPropsType) => {
    const [showMoreProject, setShowMoreProject] = useState<boolean>(false);

    return (
        <div className="w-full flex flex-col gap-6 md:gap-10 hover:shadow-2xl dark:hover:shadow-purple-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 rounded-lg py-3 transition-all duration-300 ease-in-out">
            <div className="flex gap-2 items-center">
                <img src={folder} alt="folder" className="w-24" />
                <div className="flex flex-col gap-3 px-1">
                    <h1 className="text-base md:text-xl font-semibold">Website - <a href={project?.link} target="blank" className="underline text-blue-700 dark:text-blue-400">{project?.name}</a></h1>
                    <h1 className="md:text-2xl font-medium">Role - {project?.role}</h1>
                </div>
            </div>
            <div className="mx-2 -mt-4 md:-mt-8">
                <p className="sticky top-0 bg-gray-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 underline cursor-pointer md:text-lg" onClick={() => setShowMoreProject(!showMoreProject)}>{showMoreProject ? 'See less' : 'See more'}</p>
                <ol className={`dark:text-gray-100 max-h-56 overflow-y-auto transition-all duration-300 px-4 md:text-xl list-disc ${showMoreProject ? 'text' : 'hidden'}`}>
                    <p className='font-light'>{project?.description}
                    </p>
                    <h2 className="underline">Achievements</h2>
                    {
                        project.achievements.map((achievement) => (
                            <li key={crypto.randomUUID()} className='font-light'>{achievement}</li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default ProjectContribution