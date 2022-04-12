import 'react-calendar/dist/Calendar.css';
import '../css/IndividualRoom.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import RoomDetails from './RoomDetails.jsx';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


const IndividualRoom = () => {

    const location = useLocation();
    const {
        id,
        roomNo,
        roomPrice,
        capacity,
        imgUrl,
        description,
        title,
        location: locationValue,
        orderDate,
    } = location.state.data;

    const [show, setShow] = useState(false);
    const [dateSelected, setDateSelected] = useState('');
    const [bookedDates, setBookedDates] = useState('');
    const [currentDate, setCurrentDate] = useState(new Date());
    const [reloadedData, setReloadedData] = useState(false);

    useEffect(() => {
        if (orderDate && !reloadedData) {
            setBookedDates(orderDate);
        }
        else if (reloadedData) {
            const getData = async () => {
                const data = await axios.get(`http://localhost:8080/getRoomBy/${id}`);
                const response = data.data;
                setBookedDates(response.orderDate);
            }
            getData();
        }
    }, [bookedDates]);

    const onClicked = (date) => {
        setDateSelected(date);
    }

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {

            const preBooked = new Date(date).toLocaleDateString() === bookedDates;

            const previousDay = date < currentDate;

            return previousDay || preBooked;
        }
    }

    const bookRequest = async () => {

        try {
            //ISOSString date offset by 1 day
            // const correct = new Date(dateSelected.getTime() + 86400000);
            // const javaDateFormat = correct.toISOString();

            const javaDateFormat = new Date(dateSelected).toLocaleDateString();

            const updatedata = {
                roomNo: roomNo,
                roomPrice: roomPrice,
                capacity: capacity,
                imgUrl: imgUrl,
                location: locationValue,
                description: description,
                title: title,
                orderDate: javaDateFormat,
            }


            const data = await axios.put(`http://localhost:8080/updateDateBooked/${id}`, updatedata);
            const response = data.data;
            setReloadedData(true);
            setBookedDates(new Date(dateSelected).toLocaleDateString());
            setShow(false);
    
        } catch (err) {
            console.log(err);
        }
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
                            <Calendar
                                onChange={onClicked}
                                value={dateSelected}
                                tileDisabled={tileDisabled}
                            />
                        </div>

                        <div className='modal-button'>
                            <Button variant='info'
                                onClick={bookRequest}
                            > Book </Button>
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