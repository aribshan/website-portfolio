import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Low-Latency Trading Simulator',
        projectDesc: 'TThis is a simple low latency trading sim to process binary market feeds, maintain a lock-free order book, and execute trades.',
        tags: ['C++17', 'thread-safe', 'multithreading', 'UDP'],
        code: 'https://github.com/aribshan/Low-Latency-Trading-Simulator',
        demo: 'https://github.com/aribshan/Low-Latency-Trading-Simulator',
        image: one
    },
    {
        id: 2,
        projectName: 'Flight Simulator',
        projectDesc: 'This is a physics based flight simulator programmeed for multiple types of aircrafts.',
        tags: ['Unity 3D', 'Blender'],
        code: 'https://github.com/aribshan/Interactive-Flight-Simulator',
        demo: 'https://youtu.be/6M6xWVt7W4Q',
        image: two
    },
    {
        id: 3,
        projectName: 'Stock Portfolio Analysis',
        projectDesc: 'A website to view and compare stocks, and also visualize personal portfolio.',
        tags: ['Python', 'Streamlit', 'yfinance'],
        code: 'https://github.com/aribshan/stock-analysis',
        demo: 'https://stock-analysis-arib.streamlit.app/',
        image: three
    },
    {
        id: 4,
        projectName: 'Virtual Reality Laboratories',
        projectDesc: 'This project facilitates training for the intricate laboratory processes utilizing sophisticated machinery using Virtual Reality.',
        tags: ['Unity 3D', 'VR', 'Blender'],
        code: 'https://github.com/aribshan/SiliconFabrication',
        demo: 'https://youtu.be/oAgPavAKCRE',
        image: four
    },
    {
        id: 5,
        projectName: 'Portfolio website',
        projectDesc: 'My protfolio website.',
        tags: ['React'],
        code: 'https://github.com/aribshan/website-portfolio',
        demo: 'https://aribshan.netlify.app/',
        image: five
    },

    {
        id: 6,
        projectName: 'Web-based Promotional Game',
        projectDesc: 'This project is  a three-level game for promotion of a movie and received an engagement of over 3,00,000 people across India and more than 5,000 registrations on the platform.',
        tags: ['React', 'Unity 3D'],
        code: 'NA',
        demo: 'NA',
        image: six
    },
    
    // {
    //     id: 6,
    //     projectName: 'Uber Lite',
    //     projectDesc: 'Uber clone',
    //     tags: ['Flutter'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: six
    // },
    // {
    //     id: 7,
    //     projectName: 'Stock Market App',
    //     projectDesc: 'A simple stock market API app',
    //     tags: ['React', 'Redux', 'Bootstrap'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: seven
    // },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/