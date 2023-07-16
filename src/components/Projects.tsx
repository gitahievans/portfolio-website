import ProjectCard from './ProjectCard';
import { Tab } from '@headlessui/react'

const Projects = () => {
    const arr = Array(6);
    arr.fill(0);
    const projects = arr.map((_, index) => index + 1);

    return (
        <section className='h-full max-w-[95%] mx-auto flex flex-col gap-6'>
            <div className='flex flex-col gap-4 md:w-3/5 mx-auto text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold dark:text-gray-300'>My Projects</h1>
                <p className='text-base md:text-lg xl:text-xl dark:text-gray-300'>Here are some of my projects that I have done</p>
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
                            <section className='h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {projects.map((_, index) => (
                                    <ProjectCard key={index} source='https://www.slashgear.com/img/gallery/how-the-iconic-back-to-the-future-car-came-back-better-than-ever/l-intro-1654025768.jpg' />
                                ))}
                            </section>
                        </Tab.Panel>
                        <Tab.Panel>
                            <section className='h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {projects.map((_, index) => (
                                    <ProjectCard key={index} source='https://www.oceancoyacht.com/wp-content/uploads/23-020-MVD_AEOLUS_CAM_034_sunset_F.jpg' />
                                ))}
                            </section>
                        </Tab.Panel>
                        <Tab.Panel>
                            <section className='h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {projects.map((_, index) => (
                                    <ProjectCard key={index} source='https://www.watches-news.com/wp-content/uploads/2023/01/hublot-mp-09-rainbow-watches-news-1087x610.jpg' />
                                ))}
                            </section>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
        </section>
    )
}

export default Projects