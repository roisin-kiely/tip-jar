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
          to: '0x43B30adb2E3E77c4c04EC015F13C5cFc83126987',
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
