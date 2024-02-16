import React from "react";
// import { ComponentA } from "./hooks/context/useContext/ComponentA";
// import { Counter } from "./hooks/Reducer/Counter";
// import { Counter2 } from "./hooks/Reducer/Counter2";
// import DataFetch from "./hooks/Reducer/DataFetchWithutReducer";
// import { DataFetchReducer } from "./hooks/Reducer/DataFetchReducer";
// import CallbackCounter from "./hooks/useCallback/CallbackCounter";
// import UseMemo from "./hooks/useMemo";
// import Ref from "./hooks/Ref/Ref";
import CustomCounter from "./hooks/custom/CustomCounter";

//this code is for useContext start
// export const  Username = React.createContext()
// export const Userage = React.createContext()
//this code is for useContext end

function App() {
  return (
    <>
   {/* This code is for useContext start 
   <Username.Provider value={'ranjan'}>
   <Userage.Provider value={30}>
     <ComponentA />
   </Userage.Provider>
 </Username.Provider>
 This code is for useContext end */}

     <CustomCounter />
    </>
  );
}

export default App;
