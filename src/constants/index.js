import walletMigrator from "../assets/projects/wallet-migrator.png";
import escrowBot     from "../assets/projects/escrow-bot.png";
import dexAggregator from "../assets/projects/dex-aggregator.png";
import icoDapp       from "../assets/projects/ico-dapp.png";
import lendingPool   from "../assets/projects/lending-pool.png";
import corwatch      from "../assets/projects/corwatch.png";
import project1      from "../assets/projects/project-1.jpg";
import project2      from "../assets/projects/project-2.jpg";
import project3      from "../assets/projects/project-3.jpg";
import project4      from "../assets/projects/project-4.jpg";
import project6      from "../assets/projects/project-6.png";

/* ─── Links ──────────────────────────────────────────────────── */
export const LINKS = {
  github: "https://github.com/Ayush1832",
  linkedin: "https://www.linkedin.com/in/ayushh-nayak/",
};

/* ─── Hero tagline ───────────────────────────────────────────── */
export const HERO_CONTENT = `Blockchain developer with 3+ years of experience building account abstraction wallets, DeFi tooling, and full-stack Web3 products across EVM chains, Layer 2s, and Solana. I take products from Solidity contracts to production backends and polished frontends.`;

/* ─── About text (paragraphs separated by \n\n) ──────────────── */
export const ABOUT_TEXT = `I'm a blockchain and full-stack developer with 3+ years of hands-on experience across smart contracts, wallets, and Web3 products. At Quest Global I built the ERC-4337 paymaster behind a gasless wallet extension and contributed to cross-chain bridging between IBVM, Ethereum, Polygon, and Layer 2 networks. Before that I shipped identity, token sale, and NFT work with startups.

Outside of client work I build products end to end: a Telegram escrow bot with 3,000 monthly active users, RentalChain, a startup anchoring rental evidence on Ethereum, and a Solana burn-to-earn platform built for a client with real-time rounds and on-chain payouts. My day-to-day stack is Solidity, TypeScript, Node.js, PostgreSQL, and Next.js.

I'm especially interested in account abstraction (ERC-4337, EIP-7702) and in the less glamorous parts of crypto products: custody flows, payouts, and dispute handling, where reliability matters most. Two-time hackathon winner (Graphite Network and Cronos x402).`;

/* ─── Work experience ─────────────────────────────────────────── */
export const EXPERIENCES = [
  {
    year: "October 2025 – Present",
    role: "Freelance Blockchain & Full-Stack Developer",
    company: "Freelance",
    description: `■ NovaHealth (part-time): building the backend and running operations of a healthcare application in a two-person team, with 10 doctors and 30–40 users onboarded.
■ Thoughts Market (client project, in development): customizing an open-source prediction-market platform and building multi-chain custodial deposits and withdrawals with withdrawal safety checks, ledger crediting, and admin-managed treasury settings.`,
    technologies: ["Node.js", "Next.js", "Polygon", "Supabase", "Backend"],
  },
  {
    year: "June 2025 – September 2025",
    role: "Blockchain Developer",
    company: "Quest Global Technologies",
    description: `■ Built the ERC-4337 paymaster end to end, enabling gasless payments in an EVM wallet browser extension.
■ Contributed to a cross-chain bridging platform for asset transfers between IBVM chain (L1), Ethereum, Polygon, and Layer 2 networks.`,
    technologies: ["EVM", "ERC-4337", "Paymaster", "Cross-chain", "Solidity"],
  },
  {
    year: "September 2024 – June 2025",
    role: "Blockchain Developer",
    company: "VDOIT Technologies",
    description: `■ Integrated wallet-based authentication and on-chain identity verification into an AI character-twin platform.
■ Optimized backend APIs for the platform while keeping on-chain identity verification secure.`,
    technologies: ["Blockchain Auth", "On-chain Identity", "API Optimization"],
  },
  {
    year: "May 2024 – August 2024",
    role: "Blockchain Trainee",
    company: "SoluLab",
    description: `■ Built and tested smart contracts for a token sale platform on Polygon.`,
    technologies: ["Polygon", "Smart Contracts", "Token Sale"],
  },
  {
    year: "August 2023 – January 2024",
    role: "Blockchain Intern (Remote)",
    company: "Metacrafters",
    description: `■ Contributed to NFT marketplace development, writing and reviewing Solidity smart contracts.`,
    technologies: ["Solidity", "NFT Marketplace"],
  },
];

/* ─── Projects ────────────────────────────────────────────────── */
/* `image` is optional (a gradient tile is shown without one).
   `badge` is optional (shown over the image, used for hackathon wins). */
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
    title: "P2P Escrow Telegram Bot",
    image: escrowBot,
    description:
      "Telegram escrow bot for crypto P2P deals, serving 1,500+ monthly transactions and 3,000 monthly active users. Generates per-group deposit addresses from an HD wallet, detects deposits automatically, and supports dual-confirmation release and refund, dispute handling, and configurable per-group fees. Node.js and MongoDB backend with Solidity EscrowVault contracts on BSC and Tron support.",
    technologies: ["Node.js", "MongoDB", "Telegram", "Solidity", "BSC", "Tron"],
    githubLink: "https://github.com/Ayush1832/tg-escrow-bot",
  },
  {
    title: "Ashnance",
    description:
      "Solana burn-to-earn competition platform built for a client. Users burn USDC to climb a live leaderboard, and the top-ranked player wins the round's prize pool, paid out on-chain. Built the full stack (25k+ lines of TypeScript): Next.js frontend, Express, PostgreSQL, and Redis backend, Socket.IO real-time rounds, JWT, email OTP, wallet and Google sign-in, TOTP 2FA, staking, referrals, and admin and owner panels, covered by Jest tests.",
    technologies: ["Solana", "Next.js", "Express", "PostgreSQL", "Socket.IO", "Redis"],
    demoLink: "https://ashnance.com",
    githubLink: "https://github.com/Ayush1832/ashnance",
  },
  {
    title: "RentalChain",
    description:
      "Startup in MVP stage: rental evidence and trust infrastructure for India. Anchors SHA-256 hashes of rental agreements, payments, and move-in and move-out evidence on Ethereum, while documents stay off-chain in PostgreSQL and IPFS, giving renters portable proof of rental history. Wrote the IdentityRegistry and RentalRegistry Solidity contracts with a Hardhat test suite, plus the Express API, React web app, and Expo mobile app.",
    technologies: ["Solidity", "Hardhat", "Ethereum", "Express", "React", "Expo", "IPFS"],
  },
  {
    title: "DeFi Karma",
    description:
      "Yield vault for public goods, built for the Octant DeFi Hackathon 2025. An ERC-4626 vault routes deposits across Aave v3, Morpho, Spark, and a Yearn v3 strategy and donates 20% of the yield to public goods. Includes a Uniswap v4 hook, a The Graph subgraph, and a Next.js frontend.",
    technologies: ["ERC-4626", "Aave", "Morpho", "Uniswap v4", "The Graph", "Next.js"],
    demoLink: "https://de-fi-karma.vercel.app",
    githubLink: "https://github.com/Ayush1832/DeFi-Karma",
  },
  {
    title: "Trust-Based Lending Pool",
    image: lendingPool,
    badge: "Winner · Graphite Network Hackathon",
    description:
      "Lending pool on Graphite Network with KYC-gated deposits, borrowing at 50% LTV, and reentrancy protection, built in a hackathon sprint. Solidity contract with Hardhat tests and a React dashboard for depositing, borrowing, repaying, and withdrawing.",
    technologies: ["Solidity", "Hardhat", "React", "KYC", "Graphite Network"],
    demoLink: "https://trust-based-lending-pool.vercel.app",
    githubLink: "https://github.com/Ayush1832/trust-based-lending-pool",
  },
  {
    title: "CORWatch x402",
    image: corwatch,
    badge: "Winner · Cronos x402 Hackathon",
    description:
      "Observability and pay-per-request validation platform for the Cortensor network. Requests are authorized with x402-style signed payment headers verified by a Node.js middleware, and a React and Wagmi dashboard shows trust signals and validation sessions.",
    technologies: ["x402", "Node.js", "React", "Wagmi", "Ethers.js"],
    demoLink: "https://cor-watch-x402.vercel.app",
    githubLink: "https://github.com/Ayush1832/CORWatch-x402",
  },
  {
    title: "DEX Aggregator",
    image: dexAggregator,
    description:
      "Built a DEX aggregator using Next.js and Ethers.js to source optimal swap pricing across multiple decentralized exchanges. Features real-time price comparison, price impact calculations, and a clean swap interface with token search and approval management.",
    technologies: ["Next.js", "Ethers.js", "DEX Aggregation", "TypeScript"],
    demoLink: "https://dex-aggregator-an.vercel.app",
    githubLink: "https://github.com/Ayush1832/DEX-aggregator",
  },
  {
    title: "ICO dApp",
    image: icoDapp,
    description:
      "Designed a decentralized ICO platform for ERC-20 token sales with tiered pricing, automated cliff + linear vesting schedules, and IPFS-based metadata. Built smart contracts for whitelist management, contribution caps, and refund mechanics. Integrated a Hardhat deployment pipeline with contract verification on Etherscan.",
    technologies: ["ERC-20", "Automated Vesting", "IPFS", "ICO", "Hardhat"],
    demoLink: "https://ayush-ico-dapp.netlify.app/",
    githubLink: "https://github.com/Ayush1832/Token-ICO",
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
      "Developed a decentralized staking application allowing users to lock ERC-20 tokens in a smart contract with time-weighted reward mechanics incentivizing long-term participation. Implemented a compound-interest reward model, real-time staking status updates, and an emergency withdrawal function.",
    technologies: ["Solidity", "JavaScript", "Hardhat", "Ethers.js", "React", "TailwindCSS"],
    demoLink: "https://stake-dapp-ayush.netlify.app/",
    githubLink: "https://github.com/Ayush1832/Staking-Dapp",
  },
  {
    title: "Flash Loan Arbitrage",
    image: project3,
    description:
      "Developed a Solidity-based flash loan contract enabling instant uncollateralized borrowing and atomic repayment within a single transaction. Implemented strategy hooks for arbitrage, liquidation, and leveraged trading across DeFi protocols, with a Hardhat simulation environment for strategy testing against forked mainnet state.",
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

/* ─── Hackathons ──────────────────────────────────────────────── */
export const HACKATHONS = [
  {
    event: "Graphite Network Hackathon",
    result: "Winner",
    prize: "$1,000",
    project: "Trust-Based Lending Pool",
    description:
      "KYC-gated lending pool on Graphite Network with 50% LTV borrowing and a React dashboard.",
    link: "https://github.com/Ayush1832/trust-based-lending-pool",
  },
  {
    event: "Cronos x402 Hackathon",
    result: "Winner",
    prize: "$200",
    project: "CORWatch x402",
    description:
      "Pay-per-request validation and observability platform using x402-style signed payment headers.",
    link: "https://github.com/Ayush1832/CORWatch-x402",
  },
];

/* ─── Contact ─────────────────────────────────────────────────── */
export const CONTACT = {
  address: "Odisha, India",
  phoneNo: "+91 8249325154",
  email: "ayushnayak1832@gmail.com",
};
