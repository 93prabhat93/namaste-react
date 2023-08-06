import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props)
        console.log('Parent constructor ')
        this.state = {
            userData:[]
        }
    }

   async componentDidMount(){
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const json  = await data.json()
        this.setState(
            this.state.userData = json
            
        )
        console.log(json)
    }

    render(){
        console.log('Parent render')
        return(
            <div>
            <h1 className="page-title">About</h1>
           
            <div className="team-section">
                <h3 className="text-center">Meet Our Team</h3>
                <div className="team-box">
                {this.state.userData.map(user=>{
                    return <UserClass userInfo={user}/>
                })}
                </div>
               
               
            </div>
            
        </div>
        )
    }
}

export default About;