const TicketList = require('./ticket-list');

class Sockets {

    constructor(io) {

        this.io = io;

        // Creo la instancia
        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

            console.log('Cliente conectado');

            socket.on('solicitar-ticket', (data, callback) => {
                const ticket = this.ticketList.crearTicket();
                callback(ticket);
            });

            socket.on('siguiente-ticket', ({ agente, escritorio }, callback) => {
                const ticket = this.ticketList.asignarTicket(agente, escritorio);
                callback(ticket);

                this.io.emit('ticket-asignado', this.ticketList.ultimos13);
            });

        });
    }
}


module.exports = Sockets;