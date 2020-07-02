import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title:'free cocktails',
                info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,corporsis!'
            },
            {
                icon:<FaHiking/>,
                title:'free hiking',
                info:'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,corporsis!'
            },
            {
                icon:<FaShuttleVan/>,
                title:'free shuttle',
                info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,corporsis!'
            },
            {
                icon:<FaBeer/>,
                title:'free beer',
                info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,corporsis!'
            }
        ]

    }
    render() {
        return (
            <section className='services'>
               <Title title='Services' />
               <div className="services-center">
                   {this.state.services.map((service,index) => {
                        return <article key={index} className='service'>
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                   })}
               </div>
            </section>
        )
    }
}
