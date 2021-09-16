import React, {Component} from 'react'
import ValueHelp from "./ValueHelp"
import Dialog from "./Dialog"
import List from "./List"
import ListItem from "./ListItem"
import "./Header.css"

const $ = window.jQuery

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "filtersExpanded": false,
      "singleEntry": false,
      "dateAvailable": false,
      "adminData": [
        {
          "Id": "035",
          "Name": "Justin Delacruz"
        },
        {
          "Id": "017",
          "Name": "Blake Foly"
        },
        {
          "Id": "092",
          "Name": "Linda Wells"
        }
      ],
      "gangsData": [
        {
          "GangId": "G001",
          "Name": "Welding Gang 1",
          "Status": "Active"
        },
        {
          "GangId": "G002",
          "Name": "Welding Gang 2",
          "Status": "Active"
        },
        {
          "GangId": "G003",
          "Name": "Welding Gang 3",
          "Status": "Inactive"
        }
      ],
      "currentAdmin": "",
      "currentAdminName": "",
      "currentGangs": "",
      "currentActs": ""
    }
    this.openFilters = this.openFilters.bind(this)
    this.handleAdminSelect = this.handleAdminSelect.bind(this)
    this.handleGangSelect = this.handleGangSelect.bind(this)
  }

  // Called to open the filters section
  openFilters () {
    const showFilters = !this.state.filtersExpanded
    const filterPanel = document.querySelector(".filter-panel")

    this.setState({
      filtersExpanded: showFilters
    })

    if (showFilters) {
      filterPanel.classList.add("show-filters")
    } else {
      filterPanel.classList.remove("show-filters")
    }
  }

  handleAdminSelect (e) {
    this.setState({
      currentAdmin: $("#" + e.currentTarget.id + " .item-info").text(),
      currentAdminName: $("#" + e.currentTarget.id + " .item-text").text()
    })
  }

  handleGangSelect (e) {
    const text = $("#" + e.currentTarget.id + " .item-text").text()
    this.setState({
      currentGangs: text,
    })
  }

  render() {
    return (
      <div className="header-container">
        <section className="content">
          <button className="icon-btn" type="button" onClick={this.openFilters} title="Show Filters">
            <i className="fas fa-filter"></i>
          </button>
          <div className="app-title">{this.props.title}</div>
          <button className="icon-btn" type="button" onClick={this.openFilters}>
            <i className="fas fa-user-plus"></i>
          </button>
        </section>
        <section className="filter-panel">
          <div className="filter-header">
            <h3>Filters</h3>
          </div>
          <div className="filter-content row">
            <div className="col-sm-6 col-md-6 customVH">
              <div>
                <ValueHelp id="adminInp" label="Admin" value={this.state.currentAdmin} dialog="adminDialog" required vhOnly/>
              </div>
              <div>{this.state.currentAdminName}</div>
            </div>
            <ValueHelp id="gangsInp" label="Gangs" value={this.state.currentGangs}
              customClass="col-sm-6 col-md-6" dialog="gangsDialog" required vhOnly/>
            <ValueHelp id="actsInp" label="Activities" value={this.state.currentActs}
              customClass="col-sm-6 col-md-6" dialog="actsDialog"/>
          </div>
        </section>
        <Dialog id="adminDialog" title="Admins" customClass="no-padding">
          <List search="Name" searchPH="Search on Name" items={this.state.adminData}
            customClass="no-padding" onSelect={this.handleAdminSelect}>
            <ListItem text="Name" info="Id" itemKey="Id"/>
          </List>
        </Dialog>
        <Dialog id="gangsDialog" title="Gangs" type="List" customClass="no-padding">
          <List search="GangId" searchPH="Search on Gang ID" items={this.state.gangsData}
            customClass="no-padding" onSelect={this.handleGangSelect}>
            <ListItem text="GangId" info="Name" itemKey="GangId">
              <div value="Status">Operational Status:&nbsp;</div>
              <div value="Status">Status:&nbsp;</div>
            </ListItem>
          </List>
        </Dialog>
        <Dialog id="actsDialog" title="Activities">
          Act - TV - tees
        </Dialog>
      </div>
    )
  }
}

export default Header

// <div>
// <nav className="navbar navbar-expand-md bg-dark navbar-dark">
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="collapsibleNavbar">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//     </ul>
//   </div>
// </nav>
// <div class="container">
//   <h3>Collapsible Navbar</h3>
//   <p>In this example, the navigation bar is hidden on small screens and replaced by a button in the top right corner (try to re-size this window).</p>
//   <p>Only when the button is clicked, the navigation bar will be displayed.</p>
//   <p>Tip: You can also remove the .navbar-expand-md class to ALWAYS hide navbar links and display the toggler button.</p>
// </div>
// </div>
