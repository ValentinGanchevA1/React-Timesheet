import React from 'react';
import './footer.css'
export default  class MessageToast extends React.Component{
    // eslint-disable-next-line no-useless-constructor
  constructor(props) {
super(props);
  }
render(){
  return(
    <div className="toast" id="myToast">
    <div className="toast-header">
          <strong className="mr-auto">
          <i className={this.props.type === "Warning" ? "fa fa-exclamation-triangle" : "fa fa-thumbs-up"}
    style={{color: this.props.type === "Warning" ? '#e5e83c' : '#73e83c', padding: '10px'}}/>
          {this.props.title}
          </strong>
    </div>
    <div className="toast-body">
          {this.props.text}
    </div>
    </div>
  )
}
}
