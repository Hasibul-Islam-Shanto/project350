//SPDX-License-Identifier: Unlicense
pragma solidity >=0.5.0 <0.9.0;


contract Ticketing {

 address payable owner;
mapping(address=>mapping(uint=>uint)) public tickets;

// Create Structure for Event.........
 struct Event{
   address organizer;
   string brandName;
   string starting;
   string destination;
   uint date;
   uint price;
   uint ticketCount;
   uint ticketRemain;
 }

// Create Structure for Transactions......
 struct Transaction {
     string brandName;
     address buyer;
     address seller;
     uint paid;
     uint quantity;
 }

// Create Structure for Profile..................
struct Profile {
    address userAccount;
    string name;
    string email;
    string phone;
    string pic;
}


// Defining the owner in the deploy time.........
 constructor() {
     owner = payable(msg.sender);
 }

// Creating Structure arrays.......
Event[] public events;
Profile[] public profiles;
Transaction[] public transactions;


//Create a new Events..........
 function createEvent(string memory brandName, string memory starting, string memory destination, uint date, uint price, uint ticketCount) external{
   require(date>block.timestamp,"You can organize event for future date");
   require(ticketCount>0,"You can organize event only if you create more than 0 tickets");

   events.push(Event(msg.sender, brandName, starting, destination, date, price, ticketCount, ticketCount));
 }

// Buying a ticket and make the transactions.........
 function buyTicket(uint id, uint quantity, uint amount) external payable {
   require(events[id].date!=0,"Event does not exist");
   require(events[id].date>block.timestamp,"Event has already occured");
   require(quantity>0, "Count cannot be zero");
   require(quantity<5, "You cannot buy more than 4 tickets");
   Event storage _event = events[id];
   require(_event.ticketRemain>=quantity,"Not enough tickets");
   _event.ticketRemain-=quantity;
   tickets[msg.sender][id]+=quantity;
   transactions.push(Transaction(_event.brandName, msg.sender,_event.organizer, amount, quantity));
   owner.transfer(msg.value);
 }

 function getEvents() public view returns(Event[] memory) {
     return events;
 }

 function getTransactions() public view returns(Transaction[] memory) {
     return transactions;
 }

 function createProfile(address _userAccount, string memory _name, string memory _email, string memory _phone,string memory _pic) public{
     profiles.push(Profile(_userAccount,_name, _email, _phone,_pic));
 }

 function allProfiles()public view returns(Profile[] memory){
     return profiles;

 }

 function getProfile(address _userAccount) public view returns(Profile memory){
     for(uint i=0; i<profiles.length; i++){
         if(profiles[i].userAccount == _userAccount){
             return profiles[i];
         }
     }
    revert("Struct not found");
 }

}