const web3 = new Web3(Web3.givenProvider);

const form = document.querySelector("form");
const input = form.querySelector("input");

// Function to handle sending ETH
const send = async (amount) => {
  if (!window.ethereum) {
    alert("No wallet detected. Please install a Web3 wallet like MetaMask.");
    return;
  }

  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const wei = web3.utils.toWei(amount, "ether");

  if (accounts.length > 0) {
    window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: accounts[0],
          to: "0x43B30adb2E3E77c4c04EC015F13C5cFc83126987", // Your ETH address
          value: web3.utils.toHex(wei),
        },
      ],
    });
  }
};

// Ensure the form is always visible
form.classList.add("has-eth");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  send(input.value);
});
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (window.ethereum) {  
    send(input.value); // Send ETH if a wallet is available
  } else {
    alert("No wallet detected. The form is for demonstration purposes only.");
  }
});
