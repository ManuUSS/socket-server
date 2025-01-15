
const currentTicket = document.querySelector('span');
const createTicketButton = document.querySelector('button');

async function getLastTicket() {
  const response = await fetch('/api/ticket/last');
  const data = await response.json();
  console.log( data );
  currentTicket.innerText = data;
  return data;
} 

async function createTicket() {
  const response = await fetch('/api/ticket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  currentTicket.innerText = data.number;
}

createTicketButton.addEventListener('click', createTicket);

getLastTicket();
