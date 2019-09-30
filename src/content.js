import React, { Component } from 'react';

class Content extends Component {
    //state = {  }
    render() { 
        const {activities} = this.props; //Es6  destructuring

        return (  
            <div className="content">
                <div className="line"></div>

                {/*Timeline item*/}
                {activities.map((activity) => {
                    <div className="item">
                    <div className="avatar">
                        <img alt={activity.text} src={activity.user.avatar} />{activity.user.name} 
                    </div>
                

                    <span className="time">{activity.timestamp}</span>
                    <p>{activity.text}</p>
                    <div className="commentCount">{activity.comments.length}</div>
                    <button className="btn btn-danger">Button</button>
                </div>
                {/*.............*/}
            
                })}
                </div> 
        );
    }
}
 
export default Content;