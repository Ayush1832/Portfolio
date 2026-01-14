import walletMigrator from "../assets/projects/wallet-migrator.png";
import escrowBot from "../assets/projects/escrow-bot.png";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `Blockchain Developer skilled in building dApps, DeFi protocols (lending, DEXes), NFT platforms, wallets, and cross-chain solutions across L1s and L2s. Proficient in Solidity, Rust, and modern frameworks with expertise in ERC-20/721/1155, account abstraction, smart contract security, gas optimization, and Web2 integration.`;

export const ABOUT_TEXT = `I am a Blockchain Developer skilled in building dApps, DeFi protocols (lending, DEXes), NFT platforms, wallets, and cross-chain solutions across L1s and L2s. Proficient in Solidity, Rust, and modern frameworks with expertise in ERC-20/721/1155, account abstraction, smart contract security, gas optimization, and Web2 integration.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - September 2025",
    role: "Blockchain Developer",
    company: "Quest Global Technologies",
    description: `■ Built an EVM wallet browser extension supporting 5,000+ daily transactions with gasless payments using EIP-4337 paymasters.
■ Designed and implemented a cross-chain bridging platform enabling seamless asset transfers between IBVM chain(L1), Ethereum, Polygon, and Layer 2 networks.
■ Developed a blockchain explorer indexing 1M+ transactions with real-time search and dashboards.`,
    technologies: ["EVM", "EIP-4337", "Cross-chain", "Ethereum", "Polygon"],
  },
  {
    year: "September 2024 - June 2025",
    role: "Blockchain Developer",
    company: "VDOIT Technologies",
    description: `■ Integrated blockchain-based authentication and optimized APIs for a character AI twin project, reducing latency by 20% while ensuring secure data handling.`,
    technologies: ["Blockchain Authentication", "API Optimization", "Security"],
  },
  {
    year: "May 2024 - August 2024",
    role: "Blockchain Trainee",
    company: "SoluLab",
    description: `■ Worked on a token sale project on Polygon while refining smart contract development skills.`,
    technologies: ["Polygon", "Smart Contracts", "Token Sale"],
  },
  {
    year: "November 2023 - January 2024",
    role: "Remote Blockchain Developer",
    company: "Metacrafters",
    description: `■ Contributed to the development of an NFT marketplace by writing and auditing Solidity smart contracts`,
    technologies: ["Solidity", "NFT Marketplace", "Auditing"],
  },
];

export const PROJECTS = [
  {
    title: "Wallet Migrator",
    image: walletMigrator,
    description:
      "Built a one-click wallet migrator using EIP-7702 to delegate EOAs and move ERC-20, ERC-721, and ERC-1155 assets in one transaction (with scam-token filtering). Designed an account abstraction pipeline that discovers balances, signs EIP-7702, builds a UserOperation, and executes atomically via Pimlico.",
    technologies: [
      "EIP-7702",
      "ERC-20",
      "ERC-721",
      "ERC-1155",
      "Account Abstraction",
      "Pimlico",
    ],
    githubLink: "https://github.com/Ayush1832",
  },
  {
    title: "Escrow Telegram Bot",
    image: escrowBot,
    description:
      "Built a Telegram TON escrow: Tact contract + Node.js bot (TonConnect, Jettons). Designed on/off-chain ops: CLI flows, idempotent payouts, expiries, disputes.",
    technologies: ["TON", "Tact", "Node.js", "TonConnect", "Jettons"],
    githubLink: "https://github.com/Ayush1832",
  },
  {
    title: "DEX-Aggregator",
    image: project6,
    description:
      "Built a DEX aggregator using NextJS and Ethers.js to source optimal pricing from multiple decentralized exchanges. Reduced swap slippage by 12% using aggregation logic.",
    technologies: ["NextJS", "Ethers.js", "DEX Aggregation"],
    githubLink: "https://github.com/Ayush1832",
  },
  {
    title: "ICO-dapp",
    image: project5,
    description:
      "Designed a decentralized ICO dApp for token sales with ERC-20 compliance, automated vesting schedules, and integrated IPFS for metadata storage.",
    technologies: ["ERC-20", "Automated Vesting", "IPFS", "ICO"],
    githubLink: "https://github.com/Ayush1832",
  },
  {
    title: "Staking Dapp",
    image: project1,
    description:
      "Developed a decentralized staking application that allows users to lock their tokens in a smart contract. Implemented reward mechanisms to incentivize long-term participation and token holding. Integrated secure contract management and real-time staking status updates. Utilized Solidity and Web3 technologies to ensure transparency and efficiency in the staking process.",
    technologies: [
      "Solidity",
      "Javascript",
      "Hardhat",
      "Ethers.js",
      "React",
      "TailwindCSS",
    ],
    demoLink: "https://stake-dapp-ayush.netlify.app/",
    githubLink: "https://github.com/Ayush1832/Staking-Dapp",
  },
  {
    title: "Flash Loan",
    image: project3,
    description:
      "Developed a Solidity-based flash loan smart contract enabling instant, fee-less borrowing and repayment within a single transaction. Implemented logic to support arbitrage, liquidation, and leveraged trading opportunities on decentralized finance (DeFi) platforms. Optimized smart contract for gas efficiency and secure execution on the Ethereum blockchain.",
    technologies: ["Solidity", "Hardhat"],
    githubLink: "https://github.com/Ayush1832/Flash-Loans",
  },
  {
    title: "AI NFT Generator",
    image: project2,
    description:
      "Developed a full-stack blockchain application for generating AI-based images, uploading them to IPFS via NFT.Storage, and minting NFTs on Ethereum. Integrated Stable Diffusion AI model from Hugging Face for image generation based on user input. Utilized React.js, Solidity, and ethers.js to create a seamless user experience for minting and viewing NFTs with metadata stored on IPFS.",
    technologies: [
      "Solidity",
      "Javascript",
      "Hardhat",
      "Ethers.js",
      "React",
      "TailwindCSS",
    ],
    demoLink: "https://ai-nft-gen.netlify.app/",
    githubLink: "https://github.com/Ayush1832/AI-NFT-Generator",
  },

  {
    title: "Fractional NFTs",
    image: project4,
    description:
      "Created a Solidity smart contract for fractionalizing NFTs, enabling ERC721 tokens to be divided into fungible ERC20 tokens.Implemented functionality for NFT fractional ownership, sales, and redemption of fractional shares for Ether. Utilized OpenZeppelin libraries for secure token transfers, minting, and ownership management.",
    technologies: ["Solidity", "Hardhat"],
    githubLink: "https://github.com/Ayush1832/Fractional-NFTs",
  },
];

export const CONTACT = {
  address: "Odisha, India",
  phoneNo: "+91 8249325154",
  email: "ayushnayak1832@gmail.com",
};
