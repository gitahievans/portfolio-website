import { Drawer } from '@mantine/core';
import { NavLinks } from '../../Constants/constants.ts';
import { useDisclosure } from '@mantine/hooks';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';


const MobileNav = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <GiHamburgerMenu onClick={open} className='md:hidden md:w-12 dark:text-white cursor-pointer' />
            <Drawer position='right' size='50%' opened={opened} onClose={close}>
                <div className='flex flex-col gap-6'>
                    {NavLinks.map(link => {
                        return (
                            <div key={link.id} onClick={close} className='bg-indigo-800 px-3 lg:px-4 py-2 font-medium rounded-xl text-white  text-sm md:text-lg hover:bg-gray-200 hover:text-gray-800 transition-all duration-500'>
                                {link.text}
                            </div>
                        )
                    })}
                </div>
            </Drawer>
        </>
    )
}

export default MobileNav