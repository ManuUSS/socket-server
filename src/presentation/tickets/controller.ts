import type { Request, Response } from 'express';
import { TicketService } from '../services/ticket.service';


export class TicketController {

  constructor(
    private readonly ticketService:TicketService = new TicketService()
  ){};

  public getTickets = async ( req:Request, res:Response ) => {
    res.json( this.ticketService.tickets);
  }

  public lastTicket = async ( req:Request, res:Response ) => {
    res.json( this.ticketService.lastTicketNumber );
  }

  public pendingTickets = async ( req:Request, res:Response ) => {
    res.json( this.ticketService.pendingTickets );
  }

  public drawTicket = async ( req:Request, res:Response ) => {
    const { desk } = req.params;

    res.json( this.ticketService.drawTicket( desk ) );
  }

  public workingOn = async ( req:Request, res:Response ) => {
    res.json( this.ticketService.workingTickets );
  }

  public createTicket = async ( req:Request, res:Response ) => {
    res.status( 201 ).json( this.ticketService.createTicket() );
  }

  public doneTicket = async ( req:Request, res:Response ) => {
    const { id } = req.params;
    res.json( this.ticketService.doneTicket( id ) );
  }


};


