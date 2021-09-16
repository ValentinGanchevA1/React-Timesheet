import React from 'react';
import './tabs.css';
import Table from './table';
import SlideNavigator from './slideNavigator.js';
import data from './tableData.json';
const $ = window.jQuery;
let tabData = [
  { name: 'Tab 1', isActive: true },
  { name: 'Tab 2', isActive: false },
  { name: 'Tab 3', isActive: false },
  { name: 'Tab 4', isActive: false },
  { name: 'Tab 5', isActive: false },
  { name: 'Tab 6', isActive: false }
];
class Tab extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount = ()=>{
    $('li.nav-item').hover(
        function(oEvent) {
          oEvent.currentTarget.firstChild.childNodes[1].className = "fa fa-times fa-fw";
        },
        function(oEvent) {
          oEvent.currentTarget.firstChild.childNodes[1].className = "";
        }
    );
  }
  delFn = (name)=>{
    let i = 0;
    tabData.map((tab)=>{
      if (tabData[i].name === name) {
        tabData.splice(i,1);
      }
      i++;
    } )
  }
  render() {
    return (
      <li  onClick={this.props.handleClick} className="nav-item" >
        <a className={this.props.isActive ? "nav-link active" : "nav-link"}  href="#">{this.props.data.name}<i style= {this.props.isActive ? {color : "#323d35"} : {color : "white"}} onClick={()=> {this.delFn(this.props.data.name)}} aria-hidden="true"></i></a>
      </li>
    );
  }
}
class Tabs extends React.Component{
  onAdd = ()=>{
    let newRow;
    if(tabData.length > 0){
      let lastName = tabData[tabData.length - 1].name;
      let name = "Tab " + (parseInt(lastName.match(/\d+/)[0]) + 1);
      newRow = {name: name, isActive: true};
    }else{
      newRow = {name: "Tab 1 ", isActive: true};
    }
    tabData.push(newRow);
    this.setState({activeTab: tabData[tabData.length - 1]})
  }
  render() {
    return (
      <div>
      <ul className="nav nav-tabs">
      <div className="addBt">
      <i className="fa fa-plus fa-2x" onClick={()=>{this.onAdd()}} aria-hidden="true"></i>
      </div>
        {tabData.map(function(tab,index){
          return (
            <Tab key={index} data={tab} isActive={this.props.activeTab === tab} handleClick={this.props.changeTab.bind(this,tab)} />
          );
        }.bind(this))}
      </ul>
      </div>
    );
  }
}

class Content extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount = ()=>{
    $("#navBt").click(function(){
   document.getElementById('mySidenav').style.width = "150px";
 });
 $("#myInput").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#myTable tr").filter(function() {
    $(this).toggle($(this).children(':eq(0)').text().toLowerCase().indexOf(value) > -1)
  });
});
  }
  onGropChange = (group)=>{
    document.getElementById("myInput").value = '';
    $("#myTable tr").filter(function() {
      if(group === "all"){
        group = "";
      }
      $(this).toggle($(this).children(':eq(6)').text().toLowerCase().indexOf(group) > -1)
    });
  }
  render() {
    return (
      <div className="content-style">
      <a className="navSlide"  id="navBt">&#10095;</a>
      <SlideNavigator onGroupSel={(group)=>{
        this.onGropChange(group.toLowerCase())
      }}/>
    <div className="body-container" style={{width:'100%',height:'100%'}}>
     <input className="form-control" id="myInput" type="text" placeholder="Search.." />
      <Table header={['Employee','ST Hours','OT Hours','DT Hours','Total','Add Notes','Gang']}
       selTab={this.props.activeTab.name} data={data}/>
        </div>
      </div>
    );
  }
}
export default class TabContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeTab: tabData[0]
    }
  }
  render() {
    return (
      <div className="tabStyle">
        <Tabs activeTab={this.state.activeTab} changeTab={(tab) => {
          this.setState({activeTab: tab});
        }} />
        <Content activeTab={this.state.activeTab} />
      </div>
    );
  }
}
