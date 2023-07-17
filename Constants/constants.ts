export const NavLinks = [
    {
        to: 'evans', id: 1, text: 'Evans'
    }, {
        to: 'projects', id: 2, text: 'projects'
    }
    , {
        to: 'contact', id: 3, text: 'contact'
    }
    , {
        to: 'skills', id: 4, text: 'skilla'
    }
]

export const projects = [
    {
        websites: [
            {
                name: 'green room',
                image: '../src/assets/plant.png',
                description: 'A website that enables user to view and purchase house plants.',
                tools: ['React.js', 'Tailwind CSS'],
                github: 'https://github.com/gitahievans/plant-shop-website',
                live: 'https://plant-shop-beta.vercel.app/'
            },
            {
                name: 'tasks app',
                image: '../src/assets/todo.png',
                description: 'A simple Todo App that allows users to create, manage, and organize their tasks in a user-friendly interface.',
                tools: ['React.js', 'Vanilla CSS'],
                github: 'https://github.com/gitahievans/Todo-app',
                live: 'https://todo-app-git-main-gitahievans.vercel.app/'
            },
            {
                name: 'advice generator',
                image: '../src/assets/advice.png',
                description: 'An application that generates random pieces of advice and allows users to search for advice by keyword.',
                tools: ['React.js', 'Vanilla CSS'],
                github: 'https://github.com/gitahievans/advice-generator2',
                live: 'https://advice-generator-pro-git-main-gitahievans.vercel.app/'
            }
        ],
        landingpages: [
            {
                name: 'transcargo movers',
                image: '../src/assets/movers.png',
                description: 'An responive and appealling transportation website.',
                tools: ['HTML, JavaScript, CSS, GSAP'],
                github: 'https://github.com/gitahievans/trans-cargo',
                live: 'https://trans-cargo-git-main-gitahievans.vercel.app/#quote'
            },
            {
                name: 'sunny side',
                image: '../src/assets/sunnyside.png',
                description: 'An responive and appealling marketing website.',
                tools: ['HTML', 'JavaScript', 'CSS'],
                github: 'https://github.com/gitahievans/sunny-side',
                live: 'https://sunny-side-one.vercel.app/'
            }
        ],
        articles: []
    },

]

export const IconStyles = 'hover:bg-slate-300 border-2 border-transparent hover:border-2 hover:border-gray-600 p-3 rounded-full transition-all duration-500 ease-in-out cursor-pointer dark:text-slate-100 dark:hover:bg-gray-100 dark:hover:text-slate-950 '