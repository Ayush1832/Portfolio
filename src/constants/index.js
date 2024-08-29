import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a blockchain enthusiast who dabbles in Solidity, Javascript, ReactJs and EthersJs. I spend my time dreaming up decentralized worlds where even my coffee runs on the blockchain. If it's decentralized, I've probably tried to make it cooler!`;

export const ABOUT_TEXT = `I am a blockchain enthusiast with a year of hands-on experience in Solidity, JavaScript, React.js, and Ethers.js. My passion lies in creating decentralized solutions and exploring innovative blockchain projects. I am eager to leverage my skills to contribute to impactful and cutting-edge developments in the blockchain space.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Blockchain Intern",
    company: "SoluLab",
    description: `■ Design and implement smart contracts on blockchain platforms like Ethereum, Binance Smart Chain, and Polygon.
■ Ensure the security and efficiency of smart contracts through thorough testing.
■ Implement and deploy decentralized applications (DApps) with secure and efficient smart contract logic.
■ Implement token standards like ERC-20, ERC1155, and ERC-721.
■ Create and manage tokenization processes for various assets, including fungible and non-fungible tokens.
■ Integrate Web3 technologies into traditional web applications.
■ Develop APIs for seamless communication between blockchain and external applications.`,
    technologies: ["Solidity", "JavaScript", "React.js", "Node.js", "MongoDB"],
  },
  {
    year: "Jul 2021 - Aug 2023",
    role: "Blockchain and Cybersecurity Blogger",
    company: "HackTheTech",
    description: `■ Platform sharing insights, news, and updates on blockchain technology trends.
■ Involved in database administration and website design, and built the logic for a streamlined ad-serving platform that scaled.`,
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    year: "May 2023 - Jun 2023",
    role: "Summer Intern",
    company: "Hindustan Aeronautics Limited, Sunabeda",
    description: `■ Worked on Sukhoi Saturn AL-31 engine and its components.`,
    technologies: [],
  },
  {
    year: "May 2022 - Jun 2022",
    role: "Vocational Trainee",
    company: "National Aluminium Company Limited",
    description: `■ Managed databases and improved feedback system.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Staking Dapp",
    image: project1,
    description: "Developed a decentralized staking application that allows users to lock their tokens in a smart contract. Implemented reward mechanisms to incentivize long-term participation and token holding. Integrated secure contract management and real-time staking status updates. Utilized Solidity and Web3 technologies to ensure transparency and efficiency in the staking process.",
    technologies: ["Solidity", "Javascript", "Hardhat", "Ethers.js", "React", "TailwindCSS"],
    demoLink: "https://stake-dapp-ayush.netlify.app/",
    githubLink: "https://github.com/Ayush1832/Staking-Dapp",
  },
  {
    title: "AI NFT Generator",
    image: project2,
    description:  "Developed a full-stack blockchain application for generating AI-based images, uploading them to IPFS via NFT.Storage, and minting NFTs on Ethereum. Integrated Stable Diffusion AI model from Hugging Face for image generation based on user input. Utilized React.js, Solidity, and ethers.js to create a seamless user experience for minting and viewing NFTs with metadata stored on IPFS.",
    technologies: ["Solidity", "Javascript", "Hardhat", "Ethers.js", "React", "TailwindCSS"],
    demoLink: "https://ai-nft-gen.netlify.app/",
    githubLink: "https://github.com/Ayush1832/AI-NFT-Generator",
  },
  {
    title: "Flash Loan",
    image: project3,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/username/repo",
  },
  {
    title: "Fractionalised NFTs",
    image: project4,
    description: "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "MySQL"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/username/repo",
  },
];

export const CONTACT = {
  address: "Damanjodi, Koraput, Odisha, 763008",
  phoneNo: "+91 8249325154",
  email: "ayushnayak1832@gmail.com",
};
