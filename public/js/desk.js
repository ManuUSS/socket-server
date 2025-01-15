
const lblPending = document.querySelector('#lbl-pending');

async function loadInitialCount(){
  const pendingTickets = await fetch('/api/ticket/pending').then( response => response.json() );
  lblPending.innerText = pendingTickets.length || 0;

}

function connectToWebSockets() {

  const socket = new WebSocket( 'ws://localhost:3000/ws' );

  socket.onmessage = ( event ) => {
    const { type, payload } = JSON.parse( event.data );
    if( type !== 'on-ticket-count-changed') return;
    lblPending.innerText = payload;
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
