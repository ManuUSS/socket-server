import type { Request, Response } from 'express';


export class TicketController {

  constructor(){};

  public getTickets = async ( req:Request, res:Response ) => {
    res.json({
      ok: true,
      msg: 'getTickets'
    });
  }


  public lastTicket = async ( req:Request, res:Response ) => {
    res.json({
      ok: true,
      msg: 'lastTicket'
    });
  }

  public pendingTickets = async ( req:Request, res:Response ) => {
    res.json({
      ok: true,
      msg: 'pendingTickets'
    });
  }

  public drawTicket = async ( req:Request, res:Response ) => {
    res.json({
      ok: true,
      msg: 'drawTicket'
    });
  }

  public workingOn = async ( req:Request, res:Response ) => {
    res.json({
      ok: true,
      msg: 'workingOn'
    });
  }

  public createTicket = async ( req:Request, res:Response ) => {
    res.json({
      ok: true,
      msg: 'createTicket'
    });
  }

  public doneTicket = async ( req:Request, res:Response ) => {
    res.json({
      ok: true,
      msg: 'doneTicket'
    });
  }


};


