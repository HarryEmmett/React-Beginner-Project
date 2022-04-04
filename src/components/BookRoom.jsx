import '../css/BookRoom.css';
import axios from "axios";
import { useState, useEffect } from "react";
import Room from "./Room";

const BookRoom = ({ searchQuery }) => {

    const [data, setData] = useState('');
    const [filteredData, setFilteredData] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get('http://localhost:8080/getAllRooms');
            const response = data.data;
            console.log(response)
            setData(response);
            setLoading(false);

            if (searchQuery === 'All Rooms') {
               setFilteredData(response);
            } else if (searchQuery === 'All Available') {
                const allAvailable = response.filter(allAvailable => allAvailable.booked === null);
                setFilteredData(allAvailable);
            } else if (searchQuery.priceOrLocation === 'location') {
                const filteredLocation = response.filter(loc => loc.location === searchQuery.value);
                setFilteredData(filteredLocation);
            } else {
                const price = response.filter(price => price.roomPrice <= searchQuery.value.split(' ')[2]);
                setFilteredData(price);
            }
        };
        getData();

    }, []);



    return (
        !loading && filteredData ? <div className='room-parent'><Room filteredData={filteredData} /> </div>
            : <h1>Loading...</h1>
    );
}

export default BookRoom;