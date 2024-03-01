
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchRandomUser = () => {
    setLoading(true);
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        const randomUser = data.users[Math.floor(Math.random() * data.users.length)];
        setUserData(randomUser);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRandomUser();
  }, []); // Fetch a random user on component mount

  return (

    <div className="d-flex align-items-center justify-content-center vh-100">
<div>

<Card style={{ width: '20rem' }}>
        {loading ? (
          <Card.Body>
            <Card.Text>Loading...</Card.Text>
          </Card.Body>
        ) : (
          <>
            <Card.Img variant="top" src={userData.image} />
            <Card.Body>
              <Card.Title>{`${userData.firstName} ${userData.lastName}`}</Card.Title>
              <Card.Text>
                <strong>Age:</strong> {userData.age}
                <br />
                <strong>Gender:</strong> {userData.gender}
                <br />
                <strong>Phone:</strong> {userData.phone}
                <br />
                <strong>Place:</strong> {userData.address.city}, {userData.address.state}
              </Card.Text>
            </Card.Body>
          </>
        )}
      <Button className="mt-3" variant="primary" onClick={fetchRandomUser}>
        Get New User
      </Button>
      </Card>
</div>

</div>



  )
}

export default App
