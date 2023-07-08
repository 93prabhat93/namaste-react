import React from 'react'
import  ReactDOM  from 'react-dom/client';

const title  = (<h1 className="head-class">Namaste React 🚀🔥</h1>)


const HeadingComponent = () => (
    <React.Fragment>
    <div className='container'  id="heading">
        <h1>heading component head </h1>
        {/* <Title /> */}
    </div>
    <div className='container'>
        <h1>heading component head </h1>
        {/* <Title /> */}
    </div>
    </React.Fragment>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />)