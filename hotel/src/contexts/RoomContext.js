import React, { Component,createContext } from 'react'
import items from '../data'
const RoomContext= createContext();

class RoomProvider extends Component {
   state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast: false,
        pets: false,
   }
   //getData

   //lifecycle
    componentDidMount() {
        let rooms = this.formatData(items);
        //console.log(rooms);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(room => room.price));
        let maxSize = Math.max(...rooms.map(room => room.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        });
    }
    //Formatsthe data in data.js into a single room object
   formatData(items) {
       let tempItems = items.map(item => {
           let id = item.sys.id;
           let images = item.fields.images.map(image=> image.fields.file.url);
           let room = {...item.fields, images,  id};
           return room;
       })
       return tempItems
   }
     //gets room which matches url
    getRoom = (slug) => {
       let tempRooms = [...this.state.rooms];
       const room = tempRooms.find((room) => room.slug === slug);
       return room;
   };
   //handles change in RoomContainer
   handleChange = event => {
       const target = event.target;
       const value =target.type ==='checkbox'? target.checked : target.value;
       const name = event.target.name;
       this.setState({
           [name]: value
       },this.filterRooms)
   };
   //used in rooms container to filter the rooms under certain parameters
   filterRooms = () => {
      let {rooms,type,capacity,price,minSize,maxSize,breakfast,pets} = this.state
      let tempRooms =[...rooms];//all the rooms
      capacity = parseInt(capacity);
      price = parseInt(price)
      //filter by type
      if (type !== 'all'){
          tempRooms= tempRooms.filter(room => room.type === type)
      }
      //filter by capacity
      if (capacity !==1){
        tempRooms = tempRooms.filter(room => room.capacity >= capacity)
      }
       //filter by price
       tempRooms=tempRooms.filter(room=> room.price <= price);
       //filter by size
       tempRooms=tempRooms.filter(room=> room.size >= minSize && room.size <= maxSize);
       //filter by breakfast
       if (breakfast){
           tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        //filter pets
        if(pets){
            tempRooms= tempRooms.filter(room => room.pets === true)
        }

       //set state
      this.setState({
          sortedRooms: tempRooms
      })
    };
    render() {
        return (
            <div>
                <RoomContext.Provider value={{...this.state, getRoom:this.getRoom,handleChange:this.handleChange}}>
                    {this.props.children}
                </RoomContext.Provider>
            </div>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value}  />}
        </RoomConsumer>
    }
}
export{RoomProvider,RoomConsumer,RoomContext};