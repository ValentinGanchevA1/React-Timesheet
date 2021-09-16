import React from 'react';
import './tabs.css';
const $ = window.jQuery;
export default class SlideNavigator extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        selGroup : 'All'
      }
  }
  closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
}
  render() {
    return (
      <div id="mySidenav" className="sidenav" >
      <div>
        <h4>Gangs</h4>
        <a onClick={() => {this.props.onGroupSel('All')}} href="#">All</a>
        <a onClick={() => {this.props.onGroupSel('G002')}} href="#">G002</a>
        <a onClick={() => {this.props.onGroupSel('G008')}} href="#">G008</a>
        <a onClick={() => {this.props.onGroupSel('G022')}} href="#">G022</a>
        <a onClick={() => {this.props.onGroupSel('G023')}} href="#">G023</a>
        <a onClick={() => {this.props.onGroupSel('G025')}} href="#">G025</a>
        </div>
        <a className="navBack" style={{color:'white'}} onClick={()=> {this.closeNav()}} id="navBtBack">&#10094;</a>
      </div >
    );
  }
}
