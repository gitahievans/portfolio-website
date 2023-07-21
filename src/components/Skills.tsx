import { skillsData } from '../utils/skillsData';

const Skills = () => {
  return (
    <div className="flex flex-col items-center py-6 md:px-5 lg:px-0 lg:max-w-[85%] mx-auto ">

      <h2 className="font-primary font-bold text-3xl sm:text-4xl md:text-5xl text-center text-primary">evans.skills</h2>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:gap-4 place-items-center">
        {skillsData.map((skill) => (
          <div key={crypto.randomUUID()} className="bg-gray-100 dark:bg-gray-300 shadow-lg shadow:black dark:hover:shadow-purple-600  hover:shadow-2xl rounded-lg lg:w-64 lg:h-56 my-6 flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out hover:scale-105 md:hover:scale-125 group">
            <img src={skill?.image} alt={skill.skill} className="h-28 pointer-events-none group-hover:scale-50 group:hover: transition duration-700 ease-in-out" />
            <h3 className="font-big-shoulders-text font-medium text-lg mt-4 text-center text-tertiary">
              {skill?.skill}
            </h3>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Skills