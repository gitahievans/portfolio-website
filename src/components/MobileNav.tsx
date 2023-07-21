import { Drawer } from '@mantine/core';
import { NavLinks } from '../../Constants/constants.ts';
import { useDisclosure } from '@mantine/hooks';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { NavLink } from 'react-router-dom';


const MobileNav = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <GiHamburgerMenu onClick={open} className='md:hidden md:w-12 dark:text-white cursor-pointer' />
            <Drawer position='right' size='50%' opened={opened} onClose={close}>
                <ul className='flex flex-col gap-6'>
                    {
                        NavLinks.map(nav => (
                            <li key={crypto.randomUUID()} onClick={close} >
                                <NavLink to={nav.to} className={({ isActive }) => isActive ? 'border-b-2 border-b-purple-600 px-3 lg:px-6 py-2 text-sm md:text-lg dark:text-purple-600  font-medium transition-all duration-500' : 'px-3 lg:px-6 py-2 text-sm md:text-lg dark:text-gray-800 font-medium hover:bg-purple-600 hover:text-white border-b-2 border-b-transparent rounded-3xl  transition-all duration-150'} >{nav.text}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </Drawer>
        </>
    )
}

export default MobileNav