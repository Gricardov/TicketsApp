const { v4: uuid } = require('uuid');

class Ticket {

    constructor(numero) {
        this.id = uuid();
        this.numero = numero;
        this.escritorio = null;
        this.agente = null;
    }

}

module.exports = Ticket;