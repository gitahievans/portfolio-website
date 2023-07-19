import ProjectCard from './ProjectCard';
import { Tab } from '@headlessui/react'
import { projects } from '../../Constants/constants';

const Projects = () => {


    return (
        <section className='h-full px-2 md:px-5 lg:px-0 lg:max-w-[85%] mx-auto flex flex-col gap-6'>
            <div className='flex flex-col gap-4 md:w-3/5 mx-auto text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-primary'>evans.projects</h1>
                <p className='text-base md:text-lg xl:text-xl dark:text-gray-300'>Here are some of my projects</p>
            </div>
            <Tab.Group>
                <Tab.List className="flex gap-1 rounded-xl p-1 bg-blue-100 dark:bg-transparent ">
                    {
                        projects.map((project) => (
                            Object.keys(project).map((item) => (
                                <Tab
                                    key={crypto.randomUUID()}
                                    className={({ selected }) =>
                                        !selected
                                            ? 'w-full rounded-lg py-2 text-base md:text-xl capitalize font-medium text-gray-500 dark:text-gray-400 transition-all duration-500'
                                            : 'bg-gradient-to-r from-indigo-600 to-purple-600 dark:bg-gradient-to-r dark:from-purple-700 dark:to-indigo-700 text-white w-full rounded-lg py-2 text-base md:text-xl capitalize  font-medium transition-all duration-700 ease-linear'
                                    }
                                >
                                    {item}
                                </Tab>
                            ))
                        ))
                    }
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
                                projects[0].articles.length === 0 ?
                                    <h1 className='dark:text-white text-center text-4xl'>Coming Soon</h1>
                                    : <ProjectCard project={projects[0].articles} />
                            }
                        </section>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </section>
    )
}

export default Projects