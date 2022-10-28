import React, { Component } from 'react'
import './CustomRadioButton.css'

export default class CustomRadioButton extends Component {

  render() {
    return (
      <>
        <div>
            <label className="container">{this.props.val}
                <input type="radio" defaultChecked name={this.props.name} className="p-3"/>
                <span className="checkmark"></span>
            </label>
        </div>
      </>
    )
  }
}
