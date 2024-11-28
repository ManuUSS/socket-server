

export interface Ticket {
  id:            string;
  number:        number;
  createdAt:     Date;
  done:          boolean;
  handleAt?:     Date;
  handleAtDesk?: string;
};



