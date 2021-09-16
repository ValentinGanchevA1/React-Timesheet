import React from 'react';
import './footer.css';
import MessageToast from './messageToast.js';
import { Link } from 'react-router-dom';
const $ = window.jQuery;
export default  class Footer extends React.Component{
  constructor(props) {
super(props);
this.state = {
  messType : 'none',
  messTitle : "",
  messText : ""
}
  }
  componentDidMount = ()=>{
  }
  onBtClick = (oEvent) =>{
    switch (oEvent) {
      case 'Save':
        this.setState({
          messType : 'Success',
          messTitle : "Succeded!",
          messText : `data got saved Successfully!`
        });
        break;
          case 'Refresh':
          this.setState({
            messType : 'Warning',
            messTitle : "refreshed!",
            messText : "no function to handle this!"
          });
            break;
            case 'Post':
            this.setState({
              messType : 'Success',
              messTitle : "Succeded!",
              messText : `data got posted Successfully!`
            });
              break;
      default:
    }
    $("#myToast").toast({ delay: 3000 });
            $("#myToast").toast('show');
  }
render(){
  return(
    <div>
  <div className="footer">
  <div className="footerBtn">
  {this.props.buttons.map((btn,index)=>{
    if(btn.navigate){
      return(<Link to={btn.pattern}>
      <button key={index} type="button">{btn.name}</button>
      </Link>)
    }else{
      return(<button key={index} type="button" onClick={()=>{this.onBtClick(btn.name)}}>{btn.name}</button>)
    }
  })}
  </div>
</div>
<MessageToast title={this.state.messTitle} text={this.state.messText} type={this.state.messType}/>
</div>
  )
}

}
