import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import UserSearchManager from './components/UserSearchManager';

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <UserSearchManager searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </div>
  );
}

export default App;
