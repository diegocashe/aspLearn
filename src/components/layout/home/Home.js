import React from 'react';
import DropDown from '../../common/containers/DropDown';
import imagen from '../../../img/aspnet-featured.png.webp';
import data from '../../../origin/info'

    const displayInfo= () => {
        const info = [];
        data.forEach((c) => {
            info.push(<DropDown title={c.title} info={c.info} img={c.img}/>)
        });
        return info;
    }

class Home extends React.Component {


    render() {

        const info = displayInfo();

        return (
            <div>
                <section >
                    <div className='container mx-auto flex flex-col justify-center'>

                        <h3 className="text-center sm:text-xl md:text-4xl lg:text-7xl my-5 font-medium text-gray-800">Aprende ASP .net</h3>

                        <img src={imagen} alt="asp.net" className="" />
                    </div>

                </section>
                <section className="">
                    {info}
                </section>

            </div>
        )
    }
}

export default Home;