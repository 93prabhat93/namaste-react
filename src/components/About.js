import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props)
        console.log('Parent constructor ')
    }

    componentDidMount(){
        console.log('Parent Component did mount')
    }

    render(){
        console.log('Parent render')
        return(
            <div>
            <h1>About</h1>
            <p>This is a food order app in progress</p>
            <UserClass username={'Prabhat from Class'} age={29}/>
            <UserClass username={'Pragati from Class'} age={30}/>
        </div>
        )
    }
}

export default About;