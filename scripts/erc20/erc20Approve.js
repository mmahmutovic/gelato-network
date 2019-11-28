// Javascript Ethereum API Library
const ethers = require("ethers");

// Helpers
const sleep = require("../helpers/sleep.js").sleep;

// ENV VARIABLES
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const DEV_MNEMONIC = process.env.DEV_MNEMONIC;
const INFURA_ID = process.env.INFURA_ID;
console.log(
  `\n\t\t env variables configured: ${DEV_MNEMONIC !== undefined &&
    INFURA_ID !== undefined}`
);

// Contract Addresses
const erc20Address = process.env.ERC20;

// Setting up Provider and getting network-specific variables
let provider;

if (process.env.ROPSTEN) {
  console.log(`\n\t\t ✅ connected to ROPSTEN ✅ \n`);
  provider = new ethers.providers.InfuraProvider("ropsten", INFURA_ID);
} else if (process.env.RINKEBY && !process.env.ROPSTEN) {
  console.log(`\n\t\t ✅ connected to RINKEBY ✅ \n`);
  provider = new ethers.providers.InfuraProvider("rinkeby", INFURA_ID);
} else {
  console.log(`\n\t\t ❗NO NETWORK DEFINED ❗\n`);
}

// Signer (wallet)
const wallet = ethers.Wallet.fromMnemonic(DEV_MNEMONIC);
const connectedWallet = wallet.connect(provider);

const ierc20ABI = [
    "function approve(address spender, uint256 amount) external returns (bool)"
]

const erc20Contract = new ethers.Contract(
    erc20Address,
    ierc20ABI,
    connectedWallet
);

// Arguments for erc20.contract.approve
const SPENDER = process.env.SPENDER;
const AMOUNT = process.env.AMOUNT;

async function main() {
    try {
        const tx = await erc20Contract.approve(SPENDER, AMOUNT)
        console.log(`\n\t\t approve tx hash:\n\t ${tx.hash}`)
        const txReceipt = await tx.wait();
        console.dir(txReceipt);
    } catch(err) {
        console.error(err);
    }
}

main().catch(err => console.error(err));