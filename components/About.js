import React from "react";
import Profile from "./ProfileClass";
import ProfileFunc from "./ProfileFunc";
class About extends React.Component {
  constructor(props) {
    super(props);
    
    console.log("parent-constructor");
  }
   componentDidMount() {
   console.log('parent-componentdidmount')
   this.timer = setInterval(()=>{
    console.log('rams')
   },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render() {
    console.log("parent-render");
    return (
      <div>
        <h1>This is a FoodVilla SPA...</h1>
        <Profile name={"first child"} />
        
       
      </div>
    );
  }
}
export default About;
