import Github from '../assets/github.png';
import LinkIcon from '../assets/link.png';
import { ProjectCardType } from '../utils/types';

const ProjectCard = ({ project }: ProjectCardType) => {

    return (
        <>
            {
                project?.map(item => (
                    <div key={crypto.randomUUID()} className="relative w-full rounded-2xl h-80 bg-lime-200 max-w-lg border border-gray-300 hover:shadow-2xl transition-shadow duration-1000">
                        <img
                            className="w-full h-full object-cover rounded-2xl"
                            alt="Card Image"
                            src={item?.image}
                        />
                        <div className="absolute inset-0 bg-indigo-900 flex flex-col gap-6 items-center justify-center opacity-0 hover:opacity-100 rounded-2xl transition-opacity duration-500">
                            <h4 className="text-lg text-white capitalize">{item?.name}</h4>
                            <p className="px-8 text-white">{item?.description}</p>
                            <div className="flex justify-center items-center">
                                <a href={item?.github} target="_blank" >
                                    <img src={Github} alt="" />
                                </a>
                                <a href={item?.live} target="_blank">
                                    <img src={LinkIcon} alt="" />
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