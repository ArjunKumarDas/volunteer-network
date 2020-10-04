import React from 'react';
import './Event.css'
const Event = (props) => {
    // console.log(props);
    const { img, name } = props.eventItem

    return (
     <div className="items">
                <div>
                <img className="event-pic" src={img} alt=""/>
                <h4 className="tittle">{name}</h4>
                </div>
     </div>
    );
};

export default Event;

































// import React, { useState } from 'react';
// import './Event.css';
// import eventData from '../../EventData'

// const Event = () => {
//     const event20 = eventData.slice(0,20);
//     const [events, setEvents] = useState(event20);
//     return (
//         <div className="row">
//             <div className="col-md-3">
//                 {
                 
//                 }
//             </div>
//         </div>
//     );
// };

// export default Event;