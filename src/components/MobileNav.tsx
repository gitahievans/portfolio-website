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
                                <NavLink to={nav.to} className={({ isActive }) => isActive ? activeNavClassName : inactiveNavClassName} >{nav.text}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </Drawer>
        </>
    )
}

export default MobileNav