## # 🏗 Lifafa

**README**

**Table of Contents**

* Introduction
* Features
* Getting Started
    * Prerequisites
    * Installation
    * Usage
        * Creating Red Envelopes
        * Distributing Red Envelopes
        * Randomizing Rewards
        * Claiming Red Envelopes
* Security
* Transaction History
* Contributing
* License

**Introduction**

The Red Envelope Distribution System is a smart contract-based solution that enables the creation, distribution, and claiming of digital red envelopes. Red envelopes can contain various digital assets, including cryptocurrency and NFTs, and the system ensures secure and transparent handling of these assets.

This README provides an overview of the system's features, how to get started, and guidelines for using and contributing to the project.

**Features**

The Red Envelope Distribution System offers the following functionalities:

* **Red Envelope Creation:** Participants can create digital red envelopes containing various digital assets, such as cryptocurrency and NFTs.
* **Distribution:** The system implements a secure and transparent method for distributing red envelopes. Red envelopes can be sent to multiple recipients simultaneously via various channels, such as links and email.
* **Randomization:** A fair and transparent method is employed to randomize the distribution of red envelope rewards among recipients, ensuring equitable distribution.
* **Claiming Red Envelopes:** Recipients can easily claim red envelopes with their web3 wallets through a user-friendly interface.
* **Security:** The smart contract is designed to be secure and tamper-resistant, with measures in place to prevent fraudulent activities.
* **Transaction History:** The system maintains an immutable ledger of all red envelope transactions, allowing users to verify past distributions and ensure transparency.

**Getting Started**

Follow these steps to set up and use the Red Envelope Distribution System.

**Prerequisites**

Before getting started, you need the following:

* A compatible web3 wallet for creating and claiming red envelopes.
* Node.js and npm (Node Package Manager) installed on your machine.

**Usage**

**Creating Red Envelopes**

1. Access the system using your web3 wallet.
2. Navigate to the "Create Red Envelope" section.
3. Specify the amount and type of digital assets to include in the red envelope.
4. Confirm and create the red envelope.

**Distributing Red Envelopes**

1. Access the system using your web3 wallet.
2. Select the red envelope you want to distribute.
3. Choose the distribution method (e.g., email or link).
4. Specify the recipients.
5. Initiate the distribution process.

**Randomizing Rewards**

The system automatically randomizes rewards among recipients during distribution to ensure fairness.

**Claiming Red Envelopes**

Recipients can claim red envelopes by:

1. Accessing the system with their web3 wallets.
2. Navigating to the "Claim Red Envelope" section.
3. Entering the unique red envelope code or link.
4. Claiming the red envelope.

**Security**

The smart contract is designed to be secure and tamper-resistant. We encourage users to report any suspicious activities or vulnerabilities to the project maintainers.

**Transaction History**

Users can access the transaction history to view all red envelope distributions, providing transparency and auditability.

**Contributing**

We welcome contributions from the community. If you'd like to contribute to the Red Envelope Distribution System, please follow our contribution guidelines.

**License**

This project is licensed under the MIT License, which means you are free to use, modify, and distribute it as per the terms of the license.

**Conclusion**

Thank you for using the Red Envelope Distribution System. If you have any questions, encounter issues, or wish to contribute, please feel free to reach out to us. Enjoy using the system and spreading joy with digital red envelopes!



# 🏗 Lifafa

🧪 A simple gamified campaign bringing the traditional red envelope gifting into the digital payments world.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.


## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Lifafa, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/nikhilverma360/Lifafa.git
cd Lifafa
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. 

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `RedEnvelope.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Deploying your Smart Contracts to a Live Network

Once you are ready to deploy your smart contracts, there are a few things you need to adjust.

1. Select the network

By default, `yarn deploy` will deploy the contract to the local network. You can change the defaultNetwork in `packages/hardhat/hardhat.config.ts.` You could also simply run `yarn deploy --network target_network` to deploy to another network.

Check the `hardhat.config.ts` for the networks that are pre-configured. You can also add other network settings to the `hardhat.config.ts file`. Here are the [Alchemy docs](https://docs.alchemy.com/docs/how-to-add-alchemy-rpc-endpoints-to-metamask) for information on specific networks.

Example: To deploy the contract to the Sepolia network, run the command below:

```
yarn deploy --network sepolia
```

2. Generate a new account or add one to deploy the contract(s) from. Additionally you will need to add your Alchemy API key. Rename `.env.example` to `.env` and fill the required keys.

```
ALCHEMY_API_KEY="",
DEPLOYER_PRIVATE_KEY=""
```

The deployer account is the account that will deploy your contracts. Additionally, the deployer account will be used to execute any function calls that are part of your deployment script.

You can generate a random account / private key with `yarn generate` or add the private key of your crypto wallet. `yarn generate` will create a random account and add the DEPLOYER_PRIVATE_KEY to the .env file. You can check the generated account with `yarn account`.

3. Deploy your smart contract(s)

Run the command below to deploy the smart contract to the target network. Make sure to have some funds in your deployer account to pay for the transaction.

```
yarn deploy --network network_name
```

4. Verify your smart contract

You can verify your smart contract on Etherscan by running:

```
yarn verify --network network_name
```

## Deploying your NextJS App

**Hint**: We recommend connecting your GitHub repo to Vercel (through the Vercel UI) so it gets automatically deployed when pushing to `main`.

If you want to deploy directly from the CLI, run `yarn vercel` and follow the steps to deploy to Vercel. Once you log in (email, github, etc), the default options should work. It'll give you a public URL.

If you want to redeploy to the same production URL you can run `yarn vercel --prod`. If you omit the `--prod` flag it will deploy it to a preview/test URL.


## Disabling type and linting error checks

> **Hint**
> Typescript helps you catch errors at compile time, which can save time and improve code quality, but can be challenging for those who are new to the language or who are used to the more dynamic nature of JavaScript. Below are the steps to disable type & lint check at different levels

### Disabling commit checks

We run `pre-commit` [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) which lints the staged files and don't let you commit if there is an linting error.

To disable this, go to `.husky/pre-commit` file and comment out `yarn lint-staged --verbose`

```diff
- yarn lint-staged --verbose
+ # yarn lint-staged --verbose
```

### Deploying to Vercel without any checks

By default, Vercel runs types and lint checks before building your app. The deployment will fail if there are any types or lint errors.

To ignore these checks while deploying from the CLI, use:

```shell
yarn vercel:yolo
```

If your repo is connected to Vercel, you can set `NEXT_PUBLIC_IGNORE_BUILD_ERROR` to `true` in a [environment variable](https://vercel.com/docs/concepts/projects/environment-variables).

### Disabling Github Workflow

We have github workflow setup checkout `.github/workflows/lint.yaml` which runs types and lint error checks every time code is **pushed** to `main` branch or **pull request** is made to `main` branch

To disable it, **delete `.github` directory**

## Contributing to Lifafa

We welcome contributions to Lifafa!

Please see [CONTRIBUTING.MD](https://github.com/nikhilverma360/Lifafa/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Lifafa.
