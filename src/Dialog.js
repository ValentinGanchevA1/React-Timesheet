import React, {Component} from "react"
import "./Dialog.css"

const $ = window.jQuery

class Dialog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentDidMount () {
    const that = this;
    $("#" + this.props.id).on('shown.bs.modal', function (e) {
      that.setState({
        isOpen: true
      })
    })
    $("#" + this.props.id).on('hidden.bs.modal', function (e) {
      that.setState({
        isOpen: false
      })
    })
  }

  render () {
    const {id, title, customClass} = this.props
    return (
      <div className="modal fade" id={id}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark text-light">
              <h4 className="modal-title">{title}</h4>
              <button type="button" className="close text-light" data-dismiss="modal">&times;</button>
            </div>
            <div className={"modal-body " + (customClass ? customClass : "")}>
              {this.props.children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dialog
