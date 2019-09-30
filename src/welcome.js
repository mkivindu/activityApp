import React, { Component } from 'react';

class Welcome extends Component {
    //state = {  }
 
    render() { 
        function Welcome(props){
            return<h1>Hello, {props.name}</h1>
        }
       
        return ( 
            <div>
            <Welcome name="Sara"/>
            </div>
         );
    }
}
 
export default Welcome;