import { createSlice } from "@reduxjs/toolkit";

/* define un slice de Redux llamado "tickets" con dos acciones (addTicket y deleteTicket) que actualizan el estado de acuerdo con las operaciones de agregar y eliminar tickets. Este slice y sus funciones asociadas pueden ser utilizados en conjunto con Redux Toolkit en una aplicación React para gestionar el estado relacionado con tickets. */

export const ticketSlice = createSlice({
    name: 'tickets',
    initialState: [],
    reducers: {
        agregarTicket: (state, action) => {
            state.push(action.payload)
        },
        borrarTicket: (state, action) => {
            return state.filter(ticket => ticket.ticketID !== action.payload)
        }
    }
})

export const { agregarTicket, borrarTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
