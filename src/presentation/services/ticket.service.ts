import { UUIDAdapter } from '../../config/uuid.adapter';
import type { Ticket } from '../../domain/interfaces/ticket';


export class TicketService{

  readonly tickets:Ticket[] = [
    { id: UUIDAdapter.v4(), number: 1, createdAt: new Date(), done: false },
    { id: UUIDAdapter.v4(), number: 2, createdAt: new Date(), done: false },
    { id: UUIDAdapter.v4(), number: 3, createdAt: new Date(), done: false },
    { id: UUIDAdapter.v4(), number: 4, createdAt: new Date(), done: false },
    { id: UUIDAdapter.v4(), number: 5, createdAt: new Date(), done: false },
    { id: UUIDAdapter.v4(), number: 6, createdAt: new Date(), done: false },
    { id: UUIDAdapter.v4(), number: 7, createdAt: new Date(), done: false },
    { id: UUIDAdapter.v4(), number: 8, createdAt: new Date(), done: false },
    { id: UUIDAdapter.v4(), number: 9, createdAt: new Date(), done: false },
    { id: UUIDAdapter.v4(), number: 10, createdAt: new Date(), done: false },
  ];

  private readonly workingOnTickets:Ticket[] = [];


  constructor(){};


  public get pendingTickets():Ticket[]{
    return this.tickets.filter( ticket =>  !ticket.done && !ticket.done );
  };

  public get workingTickets():Ticket[]{
    return this.workingOnTickets.splice(0, 4);
  };

  public get lastTicketNumber():number{
    return (this.tickets.length > 0) 
      ? this.tickets[this.tickets.length - 1].number 
      : 0;
  }

  public createTicket():Ticket{
    
    const ticket:Ticket = {
      id: UUIDAdapter.v4(),
      number: this.lastTicketNumber + 1,
      createdAt: new Date(),
      done: false
    };

    this.tickets.push( ticket );

    return ticket;
  }

  public drawTicket( desk:string ) {
    const ticket:Ticket = this.pendingTickets[0];

    if( !ticket ) return { status:'error', message:'No hay tickets pendientes' };

    ticket.handleAtDesk = desk;
    ticket.handleAt = new Date();

    this.workingOnTickets.unshift({ ...ticket });



    return { status:'success', ticket };
  }

  public doneTicket( ticketId:string ) {
    const ticket = this.tickets.find( ticket => ticket.id === ticketId );

    if( !ticket ) return { status:'error', message:'Ticket no encontrado' };

    this.tickets.map( t => {
      if( t.id === ticketId ) t.done = true;
      return t;
    });

    return { status:'success', ticket };
  }


};


