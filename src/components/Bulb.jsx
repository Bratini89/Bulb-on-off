import React, { useState } from 'react';

const Bulb = () => {

  const [other, setOther] = useState(true)

    const change = () => {
       setOther(!other)
    }

    return (
        <div>
            <div className='bulb' style={{background: other ? "orange" : "gray"}}></div>
            <button onClick={change}>On/Off</button>
           
        </div>
    );
};

export default Bulb;