import '../css/Home.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ setSearchQuery, searchQuery }) => {
    const [value, setValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [searchRoom, setSearchRoom] = useState(false);

    const handleSelect = (e) => {
        setValue(e);
    }

    const handleSecondSelect = (e) => {
        setSecondValue(e);
    }

    return searchRoom ?
        (
            <div className="home-page">
                <h1>Random hotel page</h1>
                <div className='button-params'>
                    <DropdownButton
                        alignRight
                        title={value ? value : 'Search filter'}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                        disabled={value === 'Location' || value === 'Price'}
                    >
                        <Dropdown.Item eventKey="Location">Location</Dropdown.Item>
                        <Dropdown.Item eventKey="Price">Price</Dropdown.Item>
                        <Dropdown.Item eventKey="All Available">All Available</Dropdown.Item>
                        <Dropdown.Item eventKey="All Rooms">All Rooms</Dropdown.Item>
                        <Dropdown.Divider />
                    </DropdownButton>

                    {value && value === 'Location' || value === 'Price' ?
                        <DropdownButton
                            alignRight
                            title={value === 'Location' ? 'City' : 'Per night'}
                            id="dropdown-menu-align-right"
                            onSelect={handleSecondSelect}
                            variant='info'
                        >
                            {value === 'Location' ?
                                <>
                                    <Dropdown.Item eventKey="Manchester">Manchester</Dropdown.Item>
                                    <Dropdown.Item eventKey="London">London</Dropdown.Item>
                                    <Dropdown.Item eventKey="Edinburgh">Edinburgh</Dropdown.Item>
                                </>
                                :
                                <>
                                    <Dropdown.Item eventKey="less than 100" >Price under £100 per night</Dropdown.Item>
                                    <Dropdown.Item eventKey="less than 150">Price under £150 per night</Dropdown.Item>
                                    <Dropdown.Item eventKey="less than 200">Price under £200 per night</Dropdown.Item>
                                    <Dropdown.Item eventKey="less than 10000">Price under £10,000 per night</Dropdown.Item>
                                </>
                            }

                            <Dropdown.Divider />
                        </DropdownButton> : null}
                </div>

                {value === 'Location' && secondValue && <p>search for rooms in: {secondValue} </p>}
                {value === 'Price' && secondValue && <p>search for rooms for: {secondValue} </p>}

                {value && secondValue || value === 'All Available' || value === 'All Rooms' ?
                    <>
                        <Link to='/roomBooking'>
                            <Button onClick={value && value === 'Location' ?
                                () => setSearchQuery({priceOrLocation: 'location', value: secondValue }) :
                                    value && value === 'Price' ? 
                                    () => setSearchQuery({ priceOrLocation: 'price', value: secondValue }) :
                                        () => setSearchQuery(value)
                            }>Search rooms</Button>
                        </Link>

                        <Button variant='info' onClick={() => {
                            setValue('');
                            setSecondValue('');
                        }}>Reset</Button>
                    </>
                    : null}
            </div>
        )
        :
        (
            <Button onClick={() => setSearchRoom(true)}> Click to search rooms! </Button>
        )

}

export default Home;