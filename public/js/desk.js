
const lblPending = document.querySelector('#lbl-pending');
const deskHtml = document.querySelector('h1');
const noMoreAlert = document.querySelector('.alert');


const searchParams = new URLSearchParams( window.location.search );

if( !searchParams.has('escritorio') ){
  window.location = 'index.html';
  throw new Error('El escritorio es obligatorio');
}

const deskNumber = searchParams.get('escritorio');
deskHtml.innerText = deskNumber;

function checkTicketCount( currentCount = 0 ){

  if( currentCount === 0 ){
    noMoreAlert.classList.remove('d-none');
    lblPending.classList.add('d-none');
    return;
  } else {
    noMoreAlert.classList.add('d-none');
    lblPending.classList.remove('d-none');
  }

  lblPending.innerText = currentCount;
}

async function loadInitialCount(){
  const pendingTickets = await fetch('/api/ticket/pending').then( response => response.json() );
  checkTicketCount( pendingTickets.length );
}

function connectToWebSockets() {

  const socket = new WebSocket( 'ws://localhost:3000/ws' );

  socket.onmessage = ( event ) => {
    const { type, payload } = JSON.parse( event.data );
    if( type !== 'on-ticket-count-changed') return;
    lblPending.innerText = payload;
    checkTicketCount( payload );
  };

  socket.onclose = ( event ) => {
    console.log( 'Connection closed' );
    setTimeout( () => {
      console.log( 'retrying to connect' );
      connectToWebSockets();
    }, 1500 );

  };

  socket.onopen = ( event ) => {
    console.log( 'Connected' );
  };

}

loadInitialCount();
connectToWebSockets();
