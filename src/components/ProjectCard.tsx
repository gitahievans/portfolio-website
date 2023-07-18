import Github from '../assets/github.png';
import LinkIcon from '../assets/link.png';
import { ProjectCardType } from '../utils/types';

const ProjectCard = ({ project }: ProjectCardType) => {

    return (
        <>
            {
                project?.map(item => (
                    <div key={crypto.randomUUID()} className="relative w-full rounded-2xl h-80 bg-lime-200 max-w-lg border border-gray-300 hover:shadow-2xl hover:shadow-black dark:shadow-purple-600 transition-shadow duration-500 ease-out">
                        <img
                            className="w-full h-full object-cover rounded-2xl dark:brightness-75 transition-all duration-700"
                            alt="Card Image"
                            src={item?.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 from-10% to-purple-950 to-100% flex flex-col gap-6 items-center justify-center opacity-0 hover:opacity-100 rounded-2xl transition-opacity duration-1000">
                            <h1 className="text-xl text-white capitalize font-bold">{item?.name}</h1>
                            <p className="px-8 text-white text-lg font-medium">{item?.description}</p>
                            <div className="flex justify-center items-center gap-4">
                                <a href={item?.github} target="_blank" >
                                    <img src={Github} alt="github" />
                                </a>
                                <a href={item?.live} target="_blank">
                                    <img src={LinkIcon} alt="live site" />
                                </a>
                            </div>
                            <div className="flex text-white">
                                {
                                    item?.tools?.map(tool => (
                                        <span key={crypto.randomUUID()} className="mr-2">{tool}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default ProjectCard