import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './features/ticketSlice'

export const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
    },
})

export default store;