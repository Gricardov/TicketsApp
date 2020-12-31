const Ticket = require('./ticket');

class TicketList {

    constructor() {
        this.ultimoNumero = 0;
        this.pendientes = [];
        this.asignados = [];
    }

    get siguienteNumero() {
        this.ultimoNumero += 1;
        return this.ultimoNumero;
    }

    get ultimos13() {
        return this.asignados.slice(0, 13);
    }

    crearTicket() {
        const ticket = new Ticket(this.siguienteNumero);
        this.pendientes.push(ticket);
        return ticket;
    }

    asignarTicket(agente, escritorio) {
        const siguienteTicket = this.pendientes.shift();
        if (siguienteTicket) {
            siguienteTicket.agente = agente;
            siguienteTicket.escritorio = escritorio;
            this.asignados.unshift(siguienteTicket);
            return siguienteTicket;
        } else {
            return null;
        }
    }

}

module.exports = TicketList;