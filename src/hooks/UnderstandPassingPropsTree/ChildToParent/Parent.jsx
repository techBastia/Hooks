import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [messageFromChild, setMessageFromChild] = useState("");

  const handleChildData = (message) => {
    setMessageFromChild(message);
  };

  return (
    <div>
     
     <Child DataFromChild={handleChildData} />
     <h1>{messageFromChild}</h1>
    </div>
  );
}

export default Parent;