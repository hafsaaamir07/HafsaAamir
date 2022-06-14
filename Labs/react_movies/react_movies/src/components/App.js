// 1. import React
import React from "react"

// 2. additional imports
import OMBDQueryForm from "./OMDBQueryForm";

// 3. create component
class App extends React.Component{
  render (){
    return (
        <>
            <OMBDQueryForm />
        </>
    )
  }
};

// 4. export component
export default App;