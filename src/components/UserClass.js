import React from "react";
import InnerUserClass from "./innerUserClass";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
    }

    componentDidMount(){
       
    }
    render(){
        
        const {username,name,email,address} = this.props.userInfo
        
        return (
            <div >
                
                <div className="team-card">
                <p>Name: {name}</p>
                <p>Username: {username}</p>
                <p>Contact: {email}</p>
                <p>Address: {address.suite+', '+address.street+", " + address.city+', '+address.zipcode}</p>
                
                </div>
            </div>
            
            
        )
    }
}

export default UserClass;