import { useState, createContext, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "../abis/Ticketing.json";
export const TicketingContext = createContext();
const { ethereum } = window;

// Create contract for accessing in the abi file.....
const createEthereumContract = () => {
  const contractAddress = "0xc47E264DF1bd2bD1365b364A688d6568ca11F35f";
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

  // Buy tickets
  const buyTickets = async({id, quantity}) => {
    const GetContract = createEthereumContract();
    await GetContract.buyTicket(id, quantity);
  }

  // create tickets
  const createTickets = async ({
    brandName,
    startingPoint,
    destination,
    date,
    price,
    ticketCount,
  }) => {
    console.log(
      brandName,
      startingPoint,
      destination,
      date,
      price,
      ticketCount
    );
    const conDate = new Date(date);
    const GetContract = createEthereumContract();
    await GetContract.createEvent(
      brandName,
      startingPoint,
      destination,
      conDate.getTime(),
      price,
      ticketCount
    );
    getAllEvents();
  };
  // get all the transactions...
  const getAllTransactions = async () => {
    const GetContract = createEthereumContract();
    const res = await GetContract.getTransactions();
    console.log(res);
  };

  const getAllEvents = async () => {
    const GetContract = createEthereumContract();
    const res = await GetContract.getEvents();
    console.log(res);
  };

  useEffect(() => {
    createEthereumContract();
    getAllEvents();
    getAllTransactions();
  }, []);

  return (
    <TicketingContext.Provider
      value={{
        account,
        connectMetaMask,
        createTickets,
        getAllEvents,
      }}
    >
      {children}
    </TicketingContext.Provider>
  );
};

export default TicketingProvider;
