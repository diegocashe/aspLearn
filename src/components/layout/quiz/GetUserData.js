import React, { useState } from 'react';

const GetUserData = ({ onSetEmail, onSetUser }) => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    const sendData = () => {
        onSetUser(user);
        onSetEmail(email);
    }

    return (
        <div className="relative flex flex-col space-y-10 justify-center items-center h-3/6">
            <div className="bg-white md:shadow-lg shadow-none rounded p-6 w-96" >
                <h1 className="text-3xl font-bold leading-normal" >Ingrese sus datos</h1>
                <p className="text-sm leading-normal">Estos seran guardados junto a su puntaje</p>
                <form className="space-y-5 mt-5">
                    <div className="mb-4 relative">
                        <input id="name" onChange={(e) => setUser(e.target.value)} className="w-full rounded border border-gray-500 px-3 pt-5 focus:ring focus:border-blue-500 outline-none pb-2 active:border-blue-500" type="text" autoFocus />
                        <label htmlFor="name" className="label text-gray-500 text-base cursor-text">Nombre Completo</label>
                    </div>
                    <div className="mb-4 my-2">
                        <input id="email" onChange={(e) => setEmail(e.target.value)} className="w-full rounded border border-gray-500 px-3 pt-5 focus:ring focus:border-blue-500 outline-none pb-2 active:border-blue-500" type="email" />
                        <label htmlFor="email" className="label text-gray-500 text-base cursor-text">Correo Electrónico</label>
                    </div>
                    <button className="w-full btn-special" onClick={sendData}>Hacer el Examen</button>
                </form>
            </div>
        </div>
    );
}

export default GetUserData;
