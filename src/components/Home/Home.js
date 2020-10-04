import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import Event from '../Event/Event';
import Navbar from '../Navbar/Navbar';
import eventData from '../../eventData';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const event20 = eventData.slice(0,20);
    const [events, setEvents] = useState(event20);
    return (
        <div className="container">
                <div className="">
                  <Navbar></Navbar>
                </div>
                 <div className=""> 
                  <h1 className="h-tittle">I GROW BY HELPING PEOPLE IN NEED</h1>
                </div>
               <div className=" search">
                 <Form inline> 
                    <FormControl type="text" placeholder="Search"/>
                    <Button type="submit">Search</Button>
                </Form>
              </div>
               <div className="">
                       {
                         events.map(eventItem => <Link to="/register"><Event eventItem={eventItem}></Event></Link>) 
                       }
                  
              </div>
        </div>
    );
};

export default Home;