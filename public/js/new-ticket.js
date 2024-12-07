
const currentTicket = document.querySelector('span');
const createTicketButton = document.querySelector('button');

async function getLastTicket() {
  const response = await fetch('/api/ticket/last');
  const data = await response.json();
  console.log( data );
  currentTicket.innerText = data.ticket;
  return data;
} 

getLastTicket();
