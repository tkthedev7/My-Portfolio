import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

export const projectsData = [
    { 
        id: 1, 
        image: Work1, 
        title: 'Portfolio CI/CD', 
        category: 'devops', 
        demo: 'https://dev.azure.com/TKTheDev/My%20Portfolio',
    },
    { 
        id: 2, 
        image: Work2, 
        title: 'This Portfolio Website', 
        category: 'development', 
        demo: 'https://www.google.com/',
    },
    { 
        id: 3, 
        image: Work3, 
        title: 'Serverless Messaging Application', 
        category: 'cloud', 
        demo: 'https://www.google.com/',
    }, 
    { 
        id: 4, 
        image: Work4, 
        title: 'Pardon My Picks', 
        category: 'development', 
        demo: 'https://www.google.com/',
    }, 
    { 
        id: 5, 
        image: Work5, 
        title: 'Pardon My Picks - Cloud Storage', 
        category: 'cloud', 
        demo: 'https://www.google.com/',
    }, 
]

export const projectsNav = [ 
    { 
        name: 'all', 
    }, 
    {   
        name: 'devops', 
    }, 
    {   
        name: 'cloud', 
    }, 
    { 
        name: 'development',
    }, 
];
