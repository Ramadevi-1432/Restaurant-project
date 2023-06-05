import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('child-componentdidount')
    }
    render(){
        console.log('child-render')
        return(
            <h1>I'm from profile class based component</h1>
        )

    }
}
export default Profile;