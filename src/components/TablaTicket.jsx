import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { borrarTicket } from "../features/ticketSlice";

export default function TablaTicket() {
    const dispatch = useDispatch();

    const tickets = useSelector((state) => state.tickets);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleDelete = (id) => {
        dispatch(borrarTicket(id));
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg m2">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-lg text-white uppercase bg-blue-800">
                    <tr>
                        <th className="px-6 py-3 border-r border-white" scope="col">Id</th>
                        <th className="px-6 py-3 border-r border-white" scope="col">Título</th>
                        <th className="px-6 py-3 border-r border-white" scope="col">Descripción</th>
                        <th className="px-6 py-3 border-r border-white" scope="col">Estado</th>
                        <th className="px-6 py-3 border-r border-white" scope="col">Categoría</th>
                        <th className="px-6 py-3 border-r border-white" scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((tickets, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope="row">{tickets.ticketId + 1}</th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope="row">{tickets.ticketTitulo}</th>
                            <td className="px-6 py-4">{tickets.ticketDescripcion}</td>
                            <td className="px-6 py-4">{tickets.ticketEstado}</td>
                            <td className="px-6 py-4">{tickets.ticketCategoria}</td>
                            <td className="px-6 py-4">
                                <button className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300
                                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                                    type="button"
                                    onClick={handleModal}>Editar</button>
                                <button className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:ring-red-300
                                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                                    type="button"
                                    onClick={() => { handleDelete(tickets.ticketId) }}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden='true'></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden='true'>&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 max-w-lg w-full">
                            <div className="bg-white px-4 pt-5 pb-4">
                                <div className="mt-3 text-center">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                        Editar Ticket
                                    </h3>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse">
                                <button className="inline-flex justify-center rounded-md border border-transparent shadow-sm py-2 bg-red-700 text-base font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-red-300 ml-3 w-auto"
                                    type="button"
                                    onClick={handleModal}>
                                    Cerrar
                                </button>
                                <button className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ml-3 w-auto"
                                    type="button"
                                    onClick={handleModal}>
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}