import React from 'react'
import Room from './Room'
export default function RoomsList({rooms}) {
    if (rooms.length === 0){
        return (
            <div className="empty-search">
            <h3>There are no rooms which match your search parameters</h3>
        </div>
        )
    }

    return (
        <div>
           <section className="rooms-list">
               <div className="roomslist-center">
                   {rooms.map(room =>{
                       return <Room key={room.id} room={room} />
                   })}
               </div>
           </section>
        </div>
    )
}
