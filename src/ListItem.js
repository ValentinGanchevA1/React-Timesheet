import React, {Component} from "react"
import "./ListItem.css"

const $ = window.jQuery

class ListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      "itemSelected": {},
      "itemsSelected": []
    }
    this.handleSelection = this.handleSelection.bind(this)
    this.getText = this.getText.bind(this)
    this.getInfo = this.getInfo.bind(this)
  }

  getText () {
    return $("#" + this.props.itemKey + " .item-text").text()
  }

  getInfo () {
    return $("#" + this.props.itemKey + " .item-info").text()
  }

  handleSelection (e) {
    this.props.onSelect(e)
  }

  render () {
    return (
      <div id={this.props.itemKey} className="list-group-item list-group-item-action"
        onClick={this.props.onSelect ? this.handleSelection : () => {} } data-dismiss="modal">
        <div className="item-text">{this.props.text}</div>
        <div className="item-info">{this.props.info}</div>
        {this.props.children}
      </div>
    )
  }
}

export default ListItem
