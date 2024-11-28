import { Router } from "express";
import { TicketController } from "./controller";


export class TicketRoutes {

  static get routes(){

    const router = Router();
    const ticketController = new TicketController();

    router.get('/', ticketController.getTickets);
    router.get('/last', ticketController.lastTicket);
    router.get('/pending', ticketController.pendingTickets);
    router.get('/draw/:desk', ticketController.drawTicket );
    router.get('/working-on', ticketController.workingOn);

    router.post('/', ticketController.createTicket);

    router.put('/done/:id', ticketController.doneTicket);


    return router;

  };

};


