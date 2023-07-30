import React from "react";
import InnerUserClass from "./innerUserClass";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
        console.log('Child constructor'+ props.age )
    }

    componentDidMount(){
        const {age} = this.props
        console.log('Child componentDidMount' + age)
    }
    render(){
        
        const {username,age} = this.props
        console.log('Child render' + age)
        return (
            <div>
                <p>Name: {username}</p>
                <p>Age: {age}</p>
                <p>Count = {this.state.count} <button onClick={()=> {
                    this.setState({
                        count:this.state.count+1
                    })
                }
                }>Add +</button></p>
                <InnerUserClass/>
            </div>
            
        )
    }
}

export default UserClass;