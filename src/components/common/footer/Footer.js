import React from 'react'
import Logo from '../../../img/net-seeklogo.com.svg'

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-trueGray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-10">
            <div className="col-span-1 sm:col-span-2 md:col-span-3 h-full flex justify-center sm:block">
                <div className="h-full w-44 sm:w-28 ">
                    <img src={Logo} alt="nada " />
                </div>
            </div>
            <div className="col-span-1">
                {/* <div className="flex flex-col justify-center items-center"> */}
                    <div className="mb-2"><a href='https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0' className='text-xl hover:underline'>Documentacion Oficial</a></div>
                    <div className="mb-2"><a href='http://ujgh.edu.ve/' className='text-xl hover:underline'>Universidad</a></div>
                    <div className="mb-2"><a href='https://www.instagram.com/diegocashedev' className='text-xl hover:underline'>Instagram</a></div>
                    <div className="mb-2"><a href='https://es.wikipedia.org/wiki/ASP.NET' className='text-xl hover:underline'>Wiki </a></div>
                {/* </div> */}

            </div>
        </footer>
    )
}