import React, { useState, useEffect } from 'react';
import './RealTimeDate.css'

const RealTimeDate = () => {
  // State to store the current date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the current date and time every second
    const timerID = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className='ali'>
      <h2>Current Date and Time:</h2>
      <p>{currentDateTime.toLocaleString()}</p>
      {/* You can customize the format as needed */}
    </div>
  );
};

export default RealTimeDate;
