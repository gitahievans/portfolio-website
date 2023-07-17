import ProjectCard from './ProjectCard';
import { Tab } from '@headlessui/react'
import { projects } from '../../Constants/constants';

const Projects = () => {

    return (
        <section className='h-full px-2 md:px-5 lg:px-0 lg:max-w-[85%] mx-auto flex flex-col gap-6'>
            <div className='flex flex-col gap-4 md:w-3/5 mx-auto text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold dark:text-gray-300'>My Projects</h1>
                <p className='text-base md:text-lg xl:text-xl dark:text-gray-300'>Here are some of my projects</p>
            </div>
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl dark:bg-gray-800 p-1 ">
                    <Tab className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 dark:text-gray-300 md:text-lg
                            ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 transition-all duration-300 ease-in'>Websites</Tab>
                    <Tab className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 dark:text-gray-300 md:text-lg
                            ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 transition-all duration-300 ease-in'>Landing Pages</Tab>
                    <Tab className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 dark:text-gray-300 md:text-lg
                            ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 transition-all duration-300 ease-in '>Articles</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <ProjectCard project={projects[0].websites} />
                        </section>
                    </Tab.Panel>
                    <Tab.Panel>
                        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            <ProjectCard project={projects[0].landingpages} />
                        </section>
                    </Tab.Panel>
                    <Tab.Panel>
                        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {
                                projects[0].articles.length === 0 ? <h1>Nothing yet</h1> : <ProjectCard project={projects[0].articles} />
                            }
                        </section>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </section>
    )
}

export default Projects