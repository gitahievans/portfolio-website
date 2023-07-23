import downloadIcon from '../assets/download-arrow.png';
import LinkedIn from '../assets/linkedin-logo.png'
import Twitter from '../assets/twitter.png';
import Github from '../assets/github.png';
import { Link } from "react-router-dom";
import AnimationLottie from "../utils/animation-lottie";
import lottieJson from '../utils/lottie.json';

const Hero = () => {
    return (
        <section className='px-2 md:px-5 lg:px-0 lg:max-w-[85%] mx-auto flex flex-col lg:flex-row gap-6 items-center lg:justify-center h-screen'>
            <div className="lg:w-1/2 flex flex-col gap-6 md:gap-10 dark:text-gray-300">
                <h1 className="font-name-font font-extrabold ">I am Evans</h1>
                <h2 className="text-2xl md:text-4xl 2xl:text-6xl leading-9 md:leading-[50px] 2xl:leading-[80px]">A web developer who's passion is creating highly appealing, interactive and fully responsive websites.</h2>
                <a href="https://drive.google.com/file/d/1fUY0sU_UXahpVYXmL_vLzMoHioWSxggS/view?usp=sharing"
                    download target="blank" className="border border-gray-400 flex items-center gap-3 rounded-xl px-4 py-1 w-fit hover:bg-gradient-to-r from-indigo-600 to-purple-600 dark:hover:bg-gradient-to-r dark:from-purple-700 dark:to-indigo-700 hover:text-gray-100 transition-all duration-500 ease-in-out">
                    <span className="font-name-font">Download CV</span>
                    <img src={downloadIcon} alt="download" />
                </a>
                <div className='flex items-center justify-start w-full py-4 gap-2'>
                    <Link to='https://twitter.com/gitahi_evans' download target="blank">
                        <img src={LinkedIn} alt='linkedin' className='w-14  lg:w-20 ' />
                    </Link>
                    <Link to='https://www.linkedin.com/in/evans-gitahi/' download target="blank">
                        <img src={Twitter} alt='twitter' className='w-14  lg:w-20 ' />
                    </Link>
                    <Link to='https://github.com/gitahievans' download target="blank">
                        <img src={Github} alt='github' className='w-16  lg:w-[88px] ' />
                    </Link>
                </div>
            </div>
            <div className=" flex lg:w-1/2 items-center justify-center">
                <AnimationLottie animationPath={lottieJson} width='80%' />
            </div>
        </section>
    )
}
export default Hero