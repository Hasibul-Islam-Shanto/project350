import { useState, createContext, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "../abis/Ticketing.json";
export const TicketingContext = createContext();
const { ethereum } = window;

// Create contract for accessing in the abi file.....
const createEthereumContract = () => {
  const contractAddress = "0x8a6cd2371125DECE41c9E187fdaE46111da15ec9";
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
  const [allTickets, setAllTickets] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  const [transactHash, setTransactHash] = useState("");

  // connnection metamask.....
  const connectMetaMask = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };
  // Create Profile...........
  const CreateNewProfile = async (data) => {
    console.log(data);
    const { name, email, phone,pic } = data;
    const GetContract = createEthereumContract();
    await GetContract.createProfile(account, name, email, phone,pic);
  };
  // get profile data.......
  const GetUserProfile = async () => {
    const GetContract = createEthereumContract();
    console.log(account);
    const res = await GetContract.getProfile(account);
    setUserProfile(res);
    console.log(res);
  };
  // Buy tickets
  const buyTickets = async (data) => {
    console.log(data);
    const { id, organizer, numberOfTicket, amount } = data;
    const GetContract = createEthereumContract();
    const parsedAmount = ethers.utils.parseEther(amount);

    await ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: account,
          to: organizer,
          gas: "0x5208",
          value: parsedAmount._hex,
        },
      ],
    });
    const buyTransaction = await GetContract.buyTicket(
      id,
      numberOfTicket,
      amount
    );
    await buyTransaction.wait();
  };

  // create tickets
  const createTickets = async ({
    brandName,
    startingPoint,
    destination,
    date,
    price,
    ticketCount,
  }) => {
    const conDate = new Date(date);
    const GetContract = createEthereumContract();
    const AddEvent = await GetContract.createEvent(
      brandName,
      startingPoint,
      destination,
      conDate.getTime(),
      price,
      ticketCount
    );
    await AddEvent.wait();
    setTransactHash(AddEvent.hash);
  };
  // get all the transactions...
  const getAllTransactions = async () => {
    const GetContract = createEthereumContract();
    const res = await GetContract.getTransactions();
    setAllTransactions(res);
  };

  const getAllEvents = async () => {
    const GetContract = createEthereumContract();
    const res = await GetContract.getEvents();
    setAllTickets(res);
  };

  useEffect(() => {
    connectMetaMask();
    //   getAllEvents();
    getAllTransactions();
    GetUserProfile();
  }, []);

  return (
    <TicketingContext.Provider
      value={{
        account,
        connectMetaMask,
        createTickets,
        getAllEvents,
        allTickets,
        buyTickets,
        allTransactions,
        getAllTransactions,
        CreateNewProfile,
        GetUserProfile,
        userProfile,
        transactHash,
      }}
    >
      {children}
    </TicketingContext.Provider>
  );
};

export default TicketingProvider;
