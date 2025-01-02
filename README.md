# Ethereum Tip Jar for Portfolio Website

## Overview

The Ethereum Tip Jar is a project integrated into a portfolio website, allowing visitors to send tips using Ethereum cryptocurrency. The project showcases a developer's ability to work with blockchain technology and create a practical application of decentralized transactions without implementing a custom smart contract.

## Features

- **Ethereum Integration:** Allows users to send tips using Ether directly from their wallets (e.g., MetaMask).
- **Web3.js Usage:** Utilizes Web3.js to connect the user's browser to the Ethereum blockchain and facilitate transactions.
- **Responsive UI:** A clean and minimalistic form for entering and submitting tip amounts.

## How It Works

The project uses Web3.js to interact with the Ethereum blockchain. When a user enters a tip amount and submits the form:

1. The app requests access to the user's Ethereum wallet through MetaMask.
2. The user approves the transaction, sending the specified amount of Ether to the developer's wallet address.

**Note:** No smart contract is used in this implementation. All transactions are directly handled through the Ethereum network.

## Technologies Used

- **Frontend:** HTML, CSS
- **Blockchain Integration:** Ethereum, MetaMask, Web3.js
- **Development Tools:** VS Code, Git, GitHub
- **Deployment:** Vercel

## Project Setup

1. Clone the repository:
   ```bash
   git clone []

  # Deployment

This project is deployed on **Vercel**. To deploy your own version, follow these steps:

1. **Push Your Code**  
   Ensure your code is committed and pushed to a GitHub repository.

2. **Link to Vercel**  
   - Go to [Vercel's website]([https://vercel.com/home]).  
   - Link your GitHub repository to Vercel.

3. **Configure Environment Variables**  
   If your application requires environment variables (e.g., API keys), set them up in the Vercel dashboard under "Environment Variables."

4. **Deploy**  
   Vercel will automatically build and deploy your application. Access your deployed site via the provided Vercel URL.

---

# Challenges & Solutions

### Challenge: Connecting the Frontend to the Ethereum Blockchain  
- **Solution:** Integrated Web3.js to handle blockchain interactions and simplify connections with MetaMask.

### Challenge: Ensuring User Security During Transactions  
- **Solution:** Utilized MetaMask for wallet integration, ensuring sensitive data is securely managed by the user's wallet.

---

# Future Enhancements

1. **Custom Smart Contract**  
   - Develop and deploy a smart contract for enhanced application functionality and increased transparency.

2. **User Notifications**  
   - Add real-time notifications to confirm transaction success or failure, improving the user experience.

3. **Fallback Mechanism**  
   - Include an alternative for users who do not have MetaMask installed, such as WalletCo

