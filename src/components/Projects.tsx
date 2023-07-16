import { Tabs } from '@mantine/core'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const arr = Array(6);
    arr.fill(0);
    const projects = arr.map((_, index) => index + 1);

    return (
        <section className='h-full max-w-[95%] mx-auto flex flex-col gap-6'>
            <div className='flex flex-col gap-4 md:w-3/5 mx-auto text-center'>
                <h1>Projects</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero cumque aliquid consequatur. Quidem, quod atque. Nemo temporibus !</p>
            </div>
            <div>
                <Tabs variant="default" color='indigo' radius='sm' defaultValue="websites">
                    <Tabs.List position="center" grow>
                        <Tabs.Tab value="websites"><span className='text-gray-900 dark:text-gray-100'>Websites</span></Tabs.Tab>
                        <Tabs.Tab value="landingpages"><span className='text-gray-900 dark:text-gray-100'>Landing Pages</span></Tabs.Tab>
                        <Tabs.Tab value="articles"><span className='text-gray-900 dark:text-gray-100'>Articles</span></Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="websites" pt="xl">
                        <section className='h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {projects.map((_, index) => (
                                <ProjectCard key={index} source='https://www.watches-news.com/wp-content/uploads/2023/01/hublot-mp-09-rainbow-watches-news-1087x610.jpg' />
                            ))}
                        </section>
                    </Tabs.Panel>

                    <Tabs.Panel value="landingpages" pt="xl">
                        <section className='h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {projects.map((_, index) => (
                                <ProjectCard key={index} source='https://www.slashgear.com/img/gallery/how-the-iconic-back-to-the-future-car-came-back-better-than-ever/l-intro-1654025768.jpg' />
                            ))}
                        </section>
                    </Tabs.Panel>

                    <Tabs.Panel value="articles" pt="xl">
                        <section className='h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {projects.map((_, index) => (
                                <ProjectCard key={index} source='https://www.oceancoyacht.com/wp-content/uploads/23-020-MVD_AEOLUS_CAM_034_sunset_F.jpg' />
                            ))}
                        </section>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </section>
    )
}

export default Projects