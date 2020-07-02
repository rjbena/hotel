import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import {RoomContext} from '../contexts/RoomContext'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
   constructor(props){
       super(props)
       //console.log(this.props)
       this.state={
           slug:this.props.match.params.slug,
           defaultBcg
       };
   }
   static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room)
        if (!room) {
            return <div className="error">
                <h3>No such room can be found</h3>
                <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
            </div>
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        //3:17 destructured array
        return (
            <div>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='../rooms' className='btn-primary'>
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                  <div className="single-room-images">
                      {images.map((image,index)=>{
                        return <img key={index} src={image} alt={name}/>
                      })}
                  </div>
                  <div className="single-room-info">
                      <article className="desc">
                          <h3>details</h3>
                          <p>{description}</p>
                      </article>
                      <article className="info">
                          <h3>info</h3>
                          <h6>price: ${price}</h6>
                          <h6>size: {size} SQFT</h6>
                          <h6>Max Capacity:{ capacity > 1? `${capacity} people` : `${capacity} person` }</h6>
                          <h6>{pets? 'Pets allowed': 'No pets allowed'}</h6>
                          <h6>{breakfast && 'free breakfast included'}</h6>
                      </article>
                  </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item,index)=>{
                            return <li key={index}>-{item}</li>
                        })}
                    </ul>
                </section>
            </div>
        )
    }
}
