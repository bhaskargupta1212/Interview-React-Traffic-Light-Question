import React, { useEffect, useState } from 'react';
import { LIGHT_DURATION, LIGHT_COLORS } from '../constant/constants'; 

const TrafficLights = () => {
  const [activeLight, setActiveLight] = useState('red');
  const [nextLight, setNextLight] = useState('yellow');

  useEffect(() => {
    const timer = setInterval(() => {
      switch (activeLight) {
        case 'green':
          setTimeout(() => {
            setActiveLight('yellow');
            setNextLight('red');
          });
          break;
        case 'yellow':
          setTimeout(() => setActiveLight(nextLight));
          break;
        case 'red':
          setTimeout(() => {
            setActiveLight('yellow');
            setNextLight('green');
          });
          break;
        default:
          break;
      }
    }, LIGHT_DURATION[activeLight]);

    return () => clearInterval(timer);
  }, [activeLight, nextLight]);

  return (
    <div className='traffic-light'> 
      {LIGHT_COLORS.map(color => (
        <div
          key={color}
          className={`light ${color} ${activeLight === color ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default TrafficLights;
