import { useState, createContext, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "../abis/Ticketing.json";
export const TicketingContext = createContext();
const { ethereum } = window;

// Create contract for accessing in the abi file.....
const createEthereumContract = () => {
  const contractAddress = "0x7BA1f8206df940a471Aae3283D98674345eb92C4";
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI.abi,
    signer
  );
  console.log(transactionsContract);

  return transactionsContract;
};
const TicketingProvider = ({ children }) => {
  const [account, setAccount] = useState();
  // connnection metamask.....
  const connectMetaMask = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setAccount(accounts[0]);
      // window.location.reload()
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  // get all the transactions...
  const getAllTransactions = async () => {
    const GetContract = createEthereumContract();
    const res = await GetContract.getTransactions();
    console.log(res);
  };

  useEffect(() => {
    createEthereumContract();
    getAllTransactions()
  }, []);

  return (
    <TicketingContext.Provider
      value={{
        account,
        connectMetaMask,
      }}
    >
      {children}
    </TicketingContext.Provider>
  );
};

export default TicketingProvider;
