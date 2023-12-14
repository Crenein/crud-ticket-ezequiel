import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { agregarTicket } from '../features/ticketSlice'


export default function formularioTicket() {

    const dispatch = useDispatch();

    const [id, setId] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [selecEstado, setSelectEstado] = useState('Estados');
    const [selecCategoria, setSelecCategoria] = useState('Categorias');

    const [isOpenState, setIsOpenState] = useState(false);
    const [isOpenCategory, setIsOpenCategory] = useState(false);

    const cambiarEstado = () => {
        setIsOpenState(!isOpenState);
    };

    const cambiarCatgegoria = () => {
        setIsOpenCategory(!isOpenCategory);
    };

    const manejarEstado = (value) => {
        setSelectEstado(value);
        setIsOpenState(false);
    };

    const manejarCategoria = (value) => {
        setSelecCategoria(value);
        setIsOpenCategory(false);
    };


    const manejarEnvio = (e) => {
        if (selecEstado === 'Estados' || selecCategoria === 'Categorias') {
            alert('Debe seleccionar un estado y categoría');
            return;
        }

        e.preventDefault();

        const newTicket = {
            ticketId: id,
            ticketTitulo: titulo,
            ticketDescripcion: descripcion,
            ticketEstado: selecEstado,
            ticketCategoria: selecCategoria,
        }

        dispatch(agregarTicket(newTicket));

        setId(id + 1);
        setTitulo('');
        setDescripcion('')
        setSelectEstado('Estados');
        setSelecCategoria('Categorias');
    }

    return (
        <div className='flex felx-col items-center'>
            <form className='flex flex-col items-center space-y-6 bg-slate-400 w-full pb-8' onSubmit={manejarEnvio} action='#'>
                <h2 className='text-4xl font-medium bg-slate-700 text-white w-full text-center py-4'>Agregar Ticket</h2>
                <div className='flex flex-row items-center justify-center mb-5'>
                    <label className='block mb-2 text-lg font-medium text-gray-900 pr-8' htmlFor='titulo'>Título</label>
                    <input className='bg-gray-50 border border-gray-500 text-lg rounded-lg block p-4' type='text' id='titulo' required
                        onChange={(e) => setTitulo(e.target.value)} value={titulo} />
                </div>
                <div className='flex flex-row items-center justify-center mb-5 pr-5'>
                    <label className='block mb-2 text-lg font-medium text-gray-900 pr-2' htmlFor='descripcion'>Descripción</label>
                    <textarea className='bg-gray-50 border border-gray-500 text-lg rounded-lg block p-4' type='text' id='descripcion' required
                        onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
                </div>
                <div className='flex flex-row space-x-16'>
                    <div className='relative'>
                        <button className='text-blue-700 bg-white hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg p-5 text-center inline-flex items-center' id='defaultBoton' data-dropdwn-toggle='menuEstados' type='button'
                            onClick={cambiarEstado}>
                            {selecEstado}
                            🔽
                        </button>
                        <div className={`absolute mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44
                        ${isOpenState ? "block" : "hidden"}`}>
                            <ul className='py-2 text-sm text-gray-800' aria-labelledby='defaultBoton'>
                                <li>
                                    <a className='block px-4 py-2 hover:bg-gray-200' href='#' onClick={() => manejarEstado('Abierto')}>Abierto</a>
                                    <a className='block px-4 py-2 hover:bg-gray-200' href='#' onClick={() => manejarEstado('Cerrado')}>Cerrado</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='relative'>
                        <button className='text-blue-800 bg-white hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-400
                        font-medium rounded-lg text-lg p-5 text-center inline-flex items-center' type='button' id='menuCategorias' onClick={cambiarCatgegoria}>
                            {selecCategoria}
                            🔽
                        </button>
                        <div className={`absolute mt-2 z-10 bg-white divide-y divide-gray-200 rounded-lg shadow w-44 ${isOpenCategory ? 'block' : 'hidden'}`} id='menuCategorias'>
                            <ul className='py-2 text-sm text-gray-700' aria-labelledby='defaultBoton'>
                                <li>
                                    <a className='block px-4 py-2 hover:bg-slate-300' onClick={() => manejarCategoria('Soporte')} href='#'>Soporte</a>
                                    <a className='block px-4 py-2 hover:bg-slate-300' onClick={() => manejarCategoria('Interno')} href='#'>Interno</a>
                                    <a className='block px-4 py-2 hover:bg-slate-300' onClick={() => manejarCategoria('Mudanza')} href='#'>Mudanza</a>
                                    <a className='block px-4 py-2 hover:bg-slate-300' onClick={() => manejarCategoria('Instalacion')} href='#'>Intalación</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button className='text-white bg-blue-700 border border-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-20 py-5 text-center me-2 mb-2 t'>
                    Cargar Ticket
                </button>
            </form>
        </div>
    )
}
