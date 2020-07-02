import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../contexts/RoomContext'
import Loading from './Loading'

function RoomContainer ({context}) {
    const {loading, sortedRooms,rooms} = context;
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    )
}

export default withRoomConsumer(RoomContainer);

// export default function Hello() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading,sortedRooms,rooms} =value
//                     if (loading) {
//                         return <Loading/>
//                     }
//                     return (
//                         <div>
//                             hello from rooms container
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>

//     )
// }
