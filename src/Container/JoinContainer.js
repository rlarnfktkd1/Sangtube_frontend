import React, { Component } from 'react';
import {Join} from "../components/Join/Join"

class JoinContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Join />
      </div>
     );
  }
}
 
export default JoinContainer;