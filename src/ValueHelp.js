import React, {Component} from 'react'
import "./ValueHelp.css"

class ValueHelp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "isOpen": false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  handleChange (e) {
    this.props.change(e)
    this.setState({
      "isOpen": false
    })
  }

  handleFocus (e) {
    document.querySelector(".app-title").focus()
    e.target.blur()
    this.setState({
      "isOpen": true
    })
    e.preventDefault()
  }

  render() {
    const {label, required, vhOnly, id, dialog, value} = this.props
    let labelClass = "", vhClass = "", mandatory = "", vh

    if (!label) {
      labelClass = "no-label "
      vhClass = "full-width"
    }

    if (required) {
      mandatory = "mandatory-input"
    }

    // Determines whether user can provide any input
    if (vhOnly) {
      vh = (
        <div className={"value-help-container " + vhClass} data-toggle="modal" data-target={"#" + dialog}>
          <input id={id} type="text" value={value} onChange={this.props.change ? this.handleChange : () => {}}
            onClick={this.handleFocus} className="form-control value-help-input" autoComplete="off"/>
          <button className="icon-btn value-help-icon" type="button">
            <i className="fas fa-list-alt"></i>
          </button>
        </div>
      )
    } else {
      vh = (
        <div className={"value-help-container " + vhClass}>
          <input id={id} type="text" value={value} onChange={this.props.change ? this.handleChange : () => {}}
            className="form-control value-help-input"/>
          <button className="icon-btn value-help-icon" type="button" data-toggle="modal" data-target={"#" + dialog}>
            <i className="fas fa-list-alt"></i>
          </button>
        </div>
      )
    }

    return (
      <div className={"value-help form-group " + (this.props.customClass ? this.props.customClass : "")}>
        <label htmlFor={id} className={labelClass + mandatory}>{this.props.label}:&nbsp;</label>
        {vh}
      </div>
    )
  }
}

export default ValueHelp
