type propsType = {
    source: string;
}


const ProjectCard = ({ source }: propsType) => {
    return (

        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-500">
            <img className="object-cover w-full rounded-t-lg h-96 lg:h-56 lg:w-56 lg:rounded-none lg:rounded-l-lg" src={source} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>

    )
}

export default ProjectCard