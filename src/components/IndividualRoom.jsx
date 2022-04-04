import 'react-calendar/dist/Calendar.css';
import '../css/IndividualRoom.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import RoomDetails from './RoomDetails.jsx';
import { useLocation } from "react-router-dom";
import { useState } from 'react';


const IndividualRoom = () => {

    const [date, setDate] = useState('');
    const [show, setShow] = useState(false);
    const [dateSelected, setDateSelected] = useState('');

    const location = useLocation();
    const {
        id,
        roomNo,
        roomPrice,
        capacity,
        imgUrl,
        description,
        title,
        location: locationValue
    } = location.state.data;

    const onClicked = (date) => {
        // userResults.filter(result => {
        //     const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
        //     const newCalDateFormat = date.toLocaleString().split(",")[0]
        //     return newResultFormat === newCalDateFormat
        // })

        setDateSelected(date);
        console.log(new Date(date).toLocaleString())
        const newResultFormat = new Date(date).toLocaleString().split(",")[0];
        console.log(newResultFormat)
    }

    return (
        <div>
            <RoomDetails
                id={id}
                roomNo={roomNo}
                roomPrice={roomPrice}
                capacity={capacity}
                imgUrl={imgUrl}
                description={description}
                title={title}
                locationValue={locationValue}
            />

            <div className='modal-calendar-wrapper'>
                <Button className="me-2" onClick={() => setShow(true)}>
                    Book Now
                </Button>

                <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Body className='modal-body' >
                        <div className='modal-calender'>
                            <Calendar onChange={onClicked} />
                        </div>

                        <div className='modal-button'>
                            <Button variant='info'> Book </Button>
                            <Button variant='dark' 
                                onClick={() => {
                                    setShow(false);
                                    setDateSelected('');             
                                }}       
                            > Cancel </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default IndividualRoom;