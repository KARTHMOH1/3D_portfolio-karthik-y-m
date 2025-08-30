import { efl, mernstack, novitech } from "../assets/images";
import {
    contact,
    css,
    express,
    firebase,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    api,
    jwt,
    postman,
    vscode,
    vercel,
    forever,
    bulkmail,
    netflix,
    weather,
    udemy,
    greenden,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
    
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: api,
        name: "Api",
        type: "Backend",
    },
    {
        imageUrl: jwt,
        name: "Jwt",
        type: "Backend",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Backend",
    },
    {
        imageUrl: vscode,
        name: "Vscode",
        type: "frontend & Backend",
    },
    {
        imageUrl: vercel,
        name: "Vercel",
        type: "frontend & Backend",
    },
    
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Freelancer",
        icon: mernstack,
        iconBg: "#accbe1",
        date: "January 2025 - Present",
        points: [
            "MERN Stack Specialist - Builds responsive, scalable web apps using React, Node.js, Express, and MongoDB.",
            "Client-Focused Delivery - Translates requirements into clean, maintainable code with strong UX and performance.",
            "Agile Debugger - Quickly resolves issues, adapts to change, and ensures smooth end-to-end development.",
        ],
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "NoviTech R&D PVT LTD",
        icon: novitech,
        iconBg: "#fbc3bc",
        date: "July 2025 - August 2025",
        points: [
            "Spearheaded full stack development projects at NoviTech R&D PVT LTD, leveraging HTML, CSS, and JavaScript, resulting in a 30% boost in website performance. ",
            "Collaborated with senior developers, focusing on front-end development to design and implement innovative website features to enhance user engagement.",
            "Troubleshot and resolved complex technical challenges using JavaScript, contributing to a 20% reduction in server load.",
        ],
    },
    {
        title: "EDI Analyst",
        company_name: "EFL",
        icon: efl,
        iconBg: "#b7e4c7",
        date: "August 2021 - January 2022",
        points: [
            "Booking stage till destination we are updating shipment details in EDI application.",
            "Rectifying issues on cross checking with shipment document and spreadsheet regarding shipment information.",
            "Validating DSR and updating status for everyday and sending back to customer END.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/KARTHMOH1',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/karthik-y-m-949169191/',
    }
];

export const projects = [
    {
        iconUrl: forever,
        theme: 'btn-back-red',
        name: 'Forever E-Commerce',
        description: 'Forever is a MERN-based e-commerce platform offering seamless shopping with personalized recommendations, secure payments, and a responsive design. It ensures simplicity for customers and efficiency for admins.',
        link: 'https://forever-frontend-flax-omega.vercel.app',
    },
    {
        iconUrl: bulkmail,
        theme: 'btn-back-green',
        name: 'BulkMail',
        description: 'A bulk mail system streamlines mass email campaigns with an intuitive frontend for message creation and list uploads. The robust backend ensures secure, scalable delivery using services like Nodemailer or SendGrid.',
        link: 'https://bulkmail-frontend-nine.vercel.app',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-blue',
        name: 'Netflix-Clone',
        description: 'A Netflix clone built with React offers a sleek UI featuring responsive design, dynamic search, and content carousels. It showcases React concepts like components, state management, and API integration for an engaging frontend experience.',
        link: 'https://netflix-clone-three-taupe-12.vercel.app',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-pink',
        name: 'Weather App',
        description: 'A weather app built with React uses APIs to display real-time weather data with a responsive design and search functionality. It demonstrates skills like API integration, state management, and reusable components.',
        link: 'https://weather-app-react-weld-nine.vercel.app',
    },
    {
        iconUrl: udemy,
        theme: 'btn-back-black',
        name: 'Udemy Clone',
        description: 'A Udemy clone built with React without using APIs focuses on simulating dynamic course browsing and user interactions with local data. It features responsive design, reusable components, and state management to replicate a seamless learning experience while working entirely with static or locally stored data.',
        link: 'https://udemy-clone-react-ten.vercel.app',
    },
    {
        iconUrl: greenden,
        theme: 'btn-back-yellow',
        name: 'Greenden',
        description: 'Greenden, built using Tailwind CSS, offers a clean, responsive design perfect for promoting eco-friendly initiatives. Vibrant components and dynamic layouts emphasize sustainability and user engagement. This utility-first approach ensures flexibility and engaging user experiences. Perfect for environmental awareness campaigns.',
        link: 'https://karthmoh1.github.io/greenden-tailwind',
    }
];