const web3 = new Web3(Web3.givenProvider)

const form = document.querySelector("form")
const input = form.querySelector("input")

const send = async (amount) => {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

  const wei = web3.utils.toWei(amount, "ether")
    
  if (accounts.length > 0) {
    window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [{
          from: accounts[0],
          to: '0xa3d0d721Ffd65FeE90A4f4cd72C042D1EEE80fa3',
          value: web3.utils.toHex(wei)
        }]
      })
  }
}

if (window.ethereum) {
  form.classList.add("has-eth")
}

form.addEventListener("submit", function (event) {
  event.preventDefault()
    
  if (window.ethereum) {  
    send(input.value)
  } else {
    alert("Please install a wallet")
  }
})