import React from "react";

class InnerUserClass extends React.Component {
    constructor(props){
        super(props)
        console.log('inneruserclass constructor')
    }

    componentDidMount(){
        console.log('inneruserclass componentDidMount')
    }


    render (){
        console.log('inneruserclass render')
        return(
            <p>inner User class</p>
        )
    }
}

export default InnerUserClass