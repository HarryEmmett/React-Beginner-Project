const RoomDetails = ({ id, roomNo, roomPrice, capacity, imgUrl, description, title, locationValue }) => {
    return (
        <div>
            <img src={imgUrl} alt="No pic" height="400px" width="500px" />
            <h1>{title}, {locationValue} </h1>
            <h3> £{roomPrice} per night </h3>
            <p>{description}</p>
            <h3>Details:</h3>
            <p> Persons: {capacity} </p>
            <p> Room Number: {roomNo} </p>
            <p>Room id: {id} </p>
        </div>
    );
}

export default RoomDetails;