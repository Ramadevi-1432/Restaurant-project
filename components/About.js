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
