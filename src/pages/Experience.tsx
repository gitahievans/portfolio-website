import AnimationLottie from "../utils/animation-lottie";
import lottieJson from '../utils/lottie.json';
import folder from '../assets/coding-folder.png';
import { useState } from "react";

const Experience = () => {
    const [showMore, setShowMore] = useState<boolean>(false);


    return (
        <section className='px-2 md:px-5 lg:px-0 lg:max-w-[85%] mx-auto flex flex-col gap-6 items-center lg:justify-center h-screen '>
            <h1 className=" text-3xl sm:text-4xl md:text-5xl font-semibold text-primary">evans.experience</h1>
            <div className="flex flex-col lg:flex-row gap-6 items-center lg:justify-center h-screen ">
                <div className=" flex lg:w-1/2 items-center justify-center">
                    <AnimationLottie animationPath={lottieJson} width='80%' />
                </div>
                <div className="w-full md:w-4/5 lg:w-1/2 flex flex-col gap-6 md:gap-10 hover:shadow-2xl dark:hover:shadow-purple-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 rounded-lg py-3 transition-all duration-300 ease-in-out">
                    <div className="flex gap-2 items-center">
                        <img src={folder} alt="folder" className="w-24" />
                        <div className="flex flex-col gap-3 px-1">
                            <h1 className="text-base md:text-xl font-semibold">March 2023 - Present</h1>
                            <div className="flex flex-col">
                                <h1 className="md:text-2xl font-medium">Volunteer Frontend Developer</h1>
                                <h1 className='text-xl md:text-2xl font-light'>Space Ya Tech</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mx-2 -mt-4 md:-mt-8">
                        <p className="sticky top-0 bg-gray-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 underline cursor-pointer md:text-lg" onClick={() => setShowMore(!showMore)}>{showMore ? 'See less' : 'Achievements'}</p>
                        <ol className={`dark:text-gray-100 max-h-56 overflow-y-auto transition-all duration-300 px-4 md:text-xl list-disc ${showMore ? 'text' : 'hidden'}`}>
                            <li>Utilizing React.js and React libraries to enhance website functionality and user experience.</li>
                            <li>Refactoring codebase to eliminate code redundancies and improve maintainability and performance of the website.</li>
                            <li>Implementing web designs with high precision.</li>
                            <li>Collaborating with developers, product managers, and designers in building products.</li>
                            <li>Actively participating in product review meetings, contributing insights and ideas to enhance the project's overall direction and functionality.</li>
                            <li>Conducting thorough code reviews to ensure code quality, and identify opportunities for improvement.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience