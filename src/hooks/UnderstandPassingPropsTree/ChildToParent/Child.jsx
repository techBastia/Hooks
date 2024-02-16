import React, { useEffect } from 'react';

const Child = ({ DataFromChild }) => {

  useEffect(() => {
    DataFromChild("Hello from Child!");
  }, [DataFromChild]);

  return(
    <>
    <h1>this is from child</h1>
    </>
  );
}

export default Child;