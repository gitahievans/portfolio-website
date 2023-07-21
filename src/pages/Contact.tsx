/* eslint-disable @typescript-eslint/no-misused-promises */
import location from '../assets/location-pin.png'
import emailIcon from '../assets/mail.png';
import phone from '../assets/phone.png';
import LinkedIn from '../assets/linkedin-logo.png'
import Twitter from '../assets/twitter.png';
import Github from '../assets/github.png';
import { Link } from "react-router-dom";
import { useState } from 'react';


const Contact = () => {
    const [copied, setCopied] = useState<boolean>(false);

    const email = 'evanygk@gmail.com';

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1500);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className="container mx-auto py-10 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 dark:text-gray-300">CONTACT ME</h1>
            <div className='flex flex-col w-full md:text-xl dark:text-gray-300'>
                <div className='flex items-center justify-between w-full px-2'>
                    <div className='flex items-center gap-3'>
                        <img src={location} alt="" className='w-12' />
                        <p>Location</p>
                    </div>
                    <div>
                        <p>Nairobi, Kenya</p>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full px-2'>
                    <div className='flex items-center gap-3'>
                        <img src={emailIcon} alt="" className='w-12' />
                        <p>Email</p>
                    </div>
                    <div>
                        <p onClick={() => copyEmail()} className='cursor-copy'>{copied ? <span className='text-green-600'>Copied! ✅</span> : <span className='underline'>{email}</span> }</p>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full px-2'>
                    <div className='flex items-center gap-3'>
                        <img src={phone} alt="" className='w-12' />
                        <p>Phone</p>
                    </div>
                    <div>
                        <p>+254722739527</p>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full px-2'>
                    <div className='flex items-center gap-3'>
                        <img src={phone} alt="" className='w-12' />
                        <p>Location</p>
                    </div>
                    <div>
                        <p>Nairobi, Kenya</p>
                    </div>
                </div>
            </div>
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
        </section>

    )
}

export default Contact