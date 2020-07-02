import React, { Component } from 'react';
import {RoomContext} from '../contexts/RoomContext';
import Loading from './Loading'
import Room from './Room'
import Title from './Title'
export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let {featuredRooms, loading} = this.context;
        const rooms = featuredRooms.map(room=> {
            return <Room key={room.id} room={room} />
        })
        //console.log(featuredRooms)
        return (
            <section className='featured-rooms'>
                <Title title='featured rooms' />
                <div className='featured-rooms-center'>
                    {loading? <Loading/>:rooms}
                </div>
            </section>
        )
    }
}
