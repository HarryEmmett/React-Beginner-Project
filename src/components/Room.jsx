import '../css/Room.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

const Room = ({ filteredData }) => {

    //not using atm as changed from all data to filtered
    // const datesInUse = data.map((dates, id) => {
    //     return dates.id;
    // })

    console.log(filteredData);

    return (
        <div className="room-container">
            {filteredData.map((room, i) => {
                return (
                    <div className='card'>
                        <Card className="h-25" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={room.imgUrl} />
                            <Card.Body className='card-body'>
                                <Card.Title>£{room.roomPrice}, {room.location} </Card.Title>

                                    <Link
                                        to={room.booked ? '#' : '/roomBooking/room' }
                                        state={
                                            {
                                                data: { ...room },
                                                // datesInUse: { ...datesInUse }
                                            }
                                        }>

                                        <Button variant="info" size="lg" disabled={room.booked}>
                                            {room.booked ?
                                                <h5> Unavailable </h5>
                                                :
                                                <h5> See More </h5>}
                                        </Button>
                                    </Link>

                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div >
    );
}

export default Room;
