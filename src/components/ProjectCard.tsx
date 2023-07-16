import { useState } from "react";
import Github from '../assets/github.png';
import Link from '../assets/link.png';

type propsType = {
    source: string;
}


const ProjectCard = ({ source }: propsType) => {

    return (
        <div className="relative h-full w-full ">
            <img
                className="w-full h-full object-cover"
                src={source}
                alt="Card Image"
            />
            <div className="absolute inset-0 bg-indigo-900 flex flex-col gap-6 items-center justify-center opacity-0 hover:opacity-100  transition-opacity duration-500">
                <h4 className="text-lg text-white">GREEN ROOM</h4>
                <p className="px-8 text-white">A website that enables user to view and purchase house plants.</p>
                <div className="flex justify-center items-center">
                    <a href="https://github.com/gitahievans/plant-shop-website" target="_blank" >
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://plant-shop-website-git-main-gitahievans.vercel.app/" target="_blank">
                        <img src={Link} alt="" />
                    </a>
                </div>
                <div className="flex text-white">
                    <span className="mr-2">ReactJS</span>
                    <span>Tailwind CSS</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard