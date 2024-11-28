import { UUIDAdapter } from '../../config/uuid.adapter';
import type { Ticket } from '../../domain/interfaces/ticket';


export class TicketService{

  private readonly tickets:Ticket[] = [
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

  constructor(){};

};


