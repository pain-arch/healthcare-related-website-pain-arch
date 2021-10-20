import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Service.css';

const Service = () => {

    const {name}=useParams();

    const [service, setService] = useState({});
    
    useEffect(() => {
      fetch("./fakedb.json")
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          const filteredService = data.filter(
            (service) => service.title === name
          );
          setService({ ...filteredService[0] });
          console.log(data);
        })
        .catch((error) => console.log(error));

    }, [name]);

    // const {servicekey} = useParams();
    return (
        <div style={{marginTop: "100px", height: "55vh"}}>
            <Container className="text-center">
                <h1>Transitional Care</h1>
                <p>by <b>admin</b> April 23, 2019</p>
                <div>
                   <img style={{width: "12%"}} className="" src="https://i.ibb.co/4W2GXD3/2.png" alt="img" />
                </div>
                <p>Transitional care refers to the coordination and continuity of health care during a movement from one healthcare setting to either another or to home, called care transition, between health care practitioners and settings as their condition and care needs change during the course of a chronic or acute illness.</p>
            </Container>
        </div>
    );
};


export default Service;