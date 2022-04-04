import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Home from './Home';
import NotFoundPage from './NotFoundPage';
import BookRoom from './BookRoom';
import IndividualRoom from './IndividualRoom';

const UserSearchManager = ( {searchQuery, setSearchQuery} ) => {

    return (
        <div>
            <BrowserRouter >
                <Nav />
                <Routes>

                    <Route path='/' exact element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>} />
                    <Route path='/*' exact element={<NotFoundPage />} />
                    <Route path='/roomBooking' exact element={<BookRoom searchQuery={searchQuery}/>} />
                    <Route path='/roomBooking/room' exact element={<IndividualRoom />} />

                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default UserSearchManager;