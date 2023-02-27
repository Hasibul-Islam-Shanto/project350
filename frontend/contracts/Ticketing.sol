//SPDX-License-Identifier: Unlicense
pragma solidity >=0.5.0 <0.9.0;


contract Ticketing {
 struct Event{
   address organizer;
   string brandName;
   string starting;
   string destination;
   uint date; //0 1 2
   uint price;
   uint ticketCount;  //1 sec  0.5 sec
   uint ticketRemain;
   uint vehicleNumber;
 }

 struct Transaction {
     string brandName;
     address buyer;
     uint paid;
     uint quantity;
 }


 Event[] public events;
 mapping(address=>mapping(uint=>uint)) public tickets;
 Transaction[] public transactions;
 address payable owner;

 constructor() {
     owner = payable(msg.sender);
 }
 
 function createEvent(string memory brandName, string memory starting, string memory destination, uint date, uint price, uint ticketCount, uint vehicleNumber) external{
   require(date>block.timestamp,"You can organize event for future date");
   require(ticketCount>0,"You can organize event only if you create more than 0 tickets");

   events.push(Event(msg.sender, brandName, starting, destination, date, price, ticketCount, ticketCount, vehicleNumber));
 }

 function buyTicket(uint id, uint quantity) external payable {
   require(events[id].date!=0,"Event does not exist");
   require(events[id].date>block.timestamp,"Event has already occured");
   require(quantity>0, "Count cannot be zero");
   require(quantity<5, "You cannot buy more than 4 tickets");
   Event storage _event = events[id];
   require(msg.value==(_event.price*quantity),"Ethere is not enough");
   require(_event.ticketRemain>=quantity,"Not enough tickets");
   _event.ticketRemain-=quantity;
   tickets[msg.sender][id]+=quantity;
   transactions.push(Transaction(_event.brandName, msg.sender, msg.value, quantity));
   owner.transfer(msg.value);
 }

 function getEvents() public view returns(Event[] memory) {
     return events;
 }

 function getTransactions() public view returns(Transaction[] memory) {
     return transactions;
 }
}