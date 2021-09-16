import React, {Component} from "react"
import "./List.css"
import ListItem from "./ListItem"

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      "item-selected": {},
      "items-selected": [],
      "search-value": ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
  }

  handleChange (e) {

  }

  handleSelection (values) {
    this.props.onSelect(values)
  }

  render () {
    const itemTemplate = this.props.children
    let attributes, items = this.props.items.map((item) => {

      // Check if attributes are there
      if (itemTemplate.props.children) {
        attributes = itemTemplate.props.children.map((attr, index) => {
          return <div className="item-attribute" key={index}>{attr.props.children + item[attr.props.value]}</div>
        })
        return (
          <ListItem key={item[itemTemplate.props.itemKey]} itemKey={item[itemTemplate.props.itemKey]}
            text={item[itemTemplate.props.text]} info={item[itemTemplate.props.info]}
            onSelect={this.handleSelection}>
            {attributes}
          </ListItem>
        )

      } else {
        return <ListItem key={item[itemTemplate.props.itemKey]} itemKey={item[itemTemplate.props.itemKey]}
          text={item[itemTemplate.props.text]} info={item[itemTemplate.props.info]}
          onSelect={this.handleSelection}/>
      }


    })

    return (
      <div className={"container " + (this.props.customClass || "")}>
        <h2>{this.props.title}</h2>
        <div className={"search-bar " + (this.props.search ? "searchable" : "")}>
          <input type="text" placeholder={this.props.searchPH} className="form-control" onChange={this.handleChange}/>
        </div>
        <div className="list-group">
          {items}
        </div>
      </div>
    )
  }
}

export default List
