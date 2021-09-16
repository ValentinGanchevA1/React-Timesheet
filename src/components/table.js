import React from 'react';
import './tabs.css';
export default class Table extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="content-style">
      <table className="table">
      <thead>
          <tr>
          {this.props.header.map((col)=>{
            return(<th>{col}</th>)
          })}
          </tr>
      </thead>
      <tbody  id="myTable">
      {this.props.data.map((row,index)=>(
        <tr key={index}>
            <td>{row.eId} {row.Employee}</td>
            <td>{row.st}</td>
            <td>{row.ot}</td>
            <td>{row.dt}</td>
            <td>{row.st + row.ot + row.dt}</td>
            <td><input/></td>
            <td>{row.Gang}</td>
        </tr>
      ))}
      </tbody>
  </table>
  </div>
    );
  }
}
