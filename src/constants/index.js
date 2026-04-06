import walletMigrator from "../assets/projects/wallet-migrator.png";
import escrowBot     from "../assets/projects/escrow-bot.png";
import project1      from "../assets/projects/project-1.jpg";
import project2      from "../assets/projects/project-2.jpg";
import project3      from "../assets/projects/project-3.jpg";
import project4      from "../assets/projects/project-4.jpg";
import project5      from "../assets/projects/project-5.png";
import project6      from "../assets/projects/project-6.png";

/* ─── Hero tagline ───────────────────────────────────────────── */
export const HERO_CONTENT = `Blockchain Developer specializing in DeFi protocols, account abstraction, and cross-chain infrastructure. I build production-grade smart contracts in Solidity & Rust, full-stack dApps, and high-throughput EVM systems, focused on security, gas efficiency, and real user impact.`;

/* ─── About text (paragraphs separated by \n\n) ──────────────── */
export const ABOUT_TEXT = `I'm a Blockchain Developer with 2+ years of hands-on experience shipping production decentralized systems. From EVM wallet extensions handling 5,000+ daily transactions to DeFi protocols, NFT platforms, and cross-chain bridges across Ethereum, Polygon, and multiple Layer 2 networks.

I specialize in Solidity and Rust, with deep expertise in DeFi primitives (lending, DEX aggregation, yield vaults), account abstraction (EIP-4337, EIP-7702), and smart contract security. My work spans the full Web3 stack: on-chain contract logic, event indexing with The Graph, frontend integration via Ethers.js and Wagmi, and scalable backend APIs in Node.js.

I think hard about economic design, gas optimization, and attack surfaces. I write tests that break things before users do, and I believe the best blockchain infrastructure is the kind that just works reliably for people who shouldn't need to understand what's underneath.`;

/* ─── Work experience ─────────────────────────────────────────── */
export const EXPERIENCES = [
  {
    year: "June 2025 – September 2025",
    role: "Blockchain Developer",
    company: "Quest Global Technologies",
    description: `■ Built an EVM wallet browser extension supporting 5,000+ daily transactions with gasless payments using EIP-4337 paymasters.
■ Designed and implemented a cross-chain bridging platform enabling seamless asset transfers between IBVM chain (L1), Ethereum, Polygon, and Layer 2 networks.
■ Developed a blockchain explorer indexing 1M+ transactions with real-time search and analytics dashboards.`,
    technologies: ["EVM", "EIP-4337", "Cross-chain", "Ethereum", "Polygon"],
  },
  {
    year: "September 2024 – June 2025",
    role: "Blockchain Developer",
    company: "VDOIT Technologies",
    description: `■ Integrated blockchain-based authentication and optimized APIs for a character AI twin project, reducing latency by 20% while ensuring secure data handling.`,
    technologies: ["Blockchain Auth", "API Optimization", "Security"],
  },
  {
    year: "May 2024 – August 2024",
    role: "Blockchain Trainee",
    company: "SoluLab",
    description: `■ Worked on a token sale project on Polygon while refining smart contract development skills.`,
    technologies: ["Polygon", "Smart Contracts", "Token Sale"],
  },
  {
    year: "November 2023 – January 2024",
    role: "Remote Blockchain Developer",
    company: "Metacrafters",
    description: `■ Contributed to the development of an NFT marketplace by writing and auditing Solidity smart contracts.`,
    technologies: ["Solidity", "NFT Marketplace", "Auditing"],
  },
];

/* ─── Projects ────────────────────────────────────────────────── */
export const PROJECTS = [
  {
    title: "Wallet Migrator",
    image: walletMigrator,
    description:
      "Built a one-click wallet migration tool using EIP-7702 to delegate EOA signing rights and atomically move ERC-20, ERC-721, and ERC-1155 assets in a single transaction with scam-token filtering. Designed an account abstraction pipeline that discovers balances, constructs an EIP-7702 authorization, builds a UserOperation, and executes atomically via Pimlico's bundler.",
    technologies: ["EIP-7702", "ERC-20", "ERC-721", "ERC-1155", "Account Abstraction", "Pimlico"],
    demoLink: "https://wallet-migrator.vercel.app",
    githubLink: "https://github.com/Ayush1832/wallet-migrator",
  },
  {
    title: "Escrow Telegram Bot",
    image: escrowBot,
    description:
      "Built a Telegram-native TON escrow system: a Tact smart contract plus a Node.js bot with TonConnect wallet auth and Jetton support. Implemented idempotent on-chain payouts, configurable expiry windows, and a dispute-escalation flow, all driven from a conversational CLI entirely within Telegram.",
    technologies: ["TON", "Tact", "Node.js", "TonConnect", "Jettons"],
    demoLink: "https://t.me/ayush_escrow_bot",
    githubLink: "https://github.com/Ayush1832/tg-escrow-bot",
  },
  {
    title: "DEX Aggregator",
    image: project6,
    description:
      "Built a DEX aggregator using Next.js and Ethers.js to source optimal swap pricing across multiple decentralized exchanges. Implemented split-routing logic that reduced average slippage by 12%. Features real-time price impact calculations, gas-cost-adjusted routing, and a clean swap interface with token search and approval management.",
    technologies: ["Next.js", "Ethers.js", "DEX Aggregation", "TypeScript"],
    demoLink: "https://dex-aggregator-an.vercel.app",
    githubLink: "https://github.com/Ayush1832/DEX-aggregator",
  },
  {
    title: "ICO dApp",
    image: project5,
    description:
      "Designed a decentralized ICO platform for ERC-20 token sales with tiered pricing, automated cliff + linear vesting schedules, and IPFS-based metadata. Built smart contracts for whitelist management, contribution caps, and refund mechanics. Integrated a Hardhat deployment pipeline with contract verification on Etherscan.",
    technologies: ["ERC-20", "Automated Vesting", "IPFS", "ICO", "Hardhat"],
    demoLink: "https://ayush-ico-dapp.netlify.app/",
    githubLink: "https://github.com/Ayush1832",
  },
  {
    title: "DEX Screener",
    image: project6,
    description:
      "Built a real-time DEX token screener that tracks live price movements, liquidity, volume, and trading activity across decentralized exchanges. Displays token pair data with price charts, buy/sell pressure indicators, and wallet-level transaction history, giving traders a clear view of on-chain market activity.",
    technologies: ["Next.js", "Ethers.js", "DeFi", "React", "TailwindCSS"],
    demoLink: "https://dex-screener-ayush.netlify.app",
    githubLink: "https://github.com/Ayush1832/DEX-screener",
  },
  {
    title: "Staking Dapp",
    image: project1,
    description:
      "Developed a decentralized staking application allowing users to lock ERC-20 tokens in a smart contract with time-weighted reward mechanics incentivizing long-term participation. Implemented a compound-interest reward model, real-time staking status updates, and an emergency withdrawal function. Gas-optimized contract reduces average interaction cost by 18%.",
    technologies: ["Solidity", "JavaScript", "Hardhat", "Ethers.js", "React", "TailwindCSS"],
    demoLink: "https://stake-dapp-ayush.netlify.app/",
    githubLink: "https://github.com/Ayush1832/Staking-Dapp",
  },
  {
    title: "Flash Loan Arbitrage",
    image: project3,
    description:
      "Developed a Solidity-based flash loan contract enabling instant uncollateralized borrowing and atomic repayment within a single transaction. Implemented strategy hooks for arbitrage, liquidation, and leveraged trading across DeFi protocols. Gas-optimized execution with a Hardhat simulation environment for strategy testing against forked mainnet state.",
    technologies: ["Solidity", "Hardhat", "Flash Loans", "Arbitrage", "Mainnet Fork"],
    githubLink: "https://github.com/Ayush1832/Flash-Loans",
  },
  {
    title: "AI NFT Generator",
    image: project2,
    description:
      "Built a full-stack dApp that generates AI images via Stable Diffusion (Hugging Face), pins them to IPFS through NFT.Storage, and mints ERC-721 NFTs on Ethereum, all in one user flow. Metadata and image are fully decentralized; the contract supports on-chain provenance and transfer history.",
    technologies: ["Solidity", "JavaScript", "Hardhat", "Ethers.js", "React", "Stable Diffusion", "IPFS"],
    demoLink: "https://ai-nft-gen.netlify.app/",
    githubLink: "https://github.com/Ayush1832/AI-NFT-Generator",
  },
  {
    title: "Fractional NFTs",
    image: project4,
    description:
      "Created a smart contract system for fractionalizing ERC-721 NFTs into fungible ERC-20 tokens, enabling shared ownership and liquid markets for high-value assets. Implemented fractional purchase, buyout mechanics, and ETH-based redemption of fractional shares. Used OpenZeppelin for safe token handling, minting, and ownership management.",
    technologies: ["Solidity", "ERC-721", "ERC-20", "OpenZeppelin", "Hardhat"],
    githubLink: "https://github.com/Ayush1832/Fractional-NFTs",
  },
];

/* ─── Contact ─────────────────────────────────────────────────── */
export const CONTACT = {
  address: "Odisha, India",
  phoneNo: "+91 8249325154",
  email: "ayushnayak1832@gmail.com",
};
