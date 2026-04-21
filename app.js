let web3;
let contract;

const address = "PASTE_CONTRACT_ADDRESS";
const abi = []; // paste ABI

window.onload = async () => {
  if(window.ethereum){
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    contract = new web3.eth.Contract(abi, address);
    load();
  }
};

async function addComplaint(){
  const accounts = await web3.eth.getAccounts();
  const name = document.getElementById("name").value;
  const train = document.getElementById("train").value;
  const issue = document.getElementById("issue").value;

  await contract.methods.addComplaint(name,train,issue)
    .send({from: accounts[0]});

  load();
}

async function load(){
  const data = await contract.methods.getComplaints().call();
  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(c=>{
    let div = document.createElement("div");
    div.innerHTML = c.name + " | " + c.train + " | " + c.issue + " | " + (c.solved?"Solved":"Unsolved");
    list.appendChild(div);
  });
}
