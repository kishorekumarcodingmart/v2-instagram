import React, { Component } from 'react'
import './ToggleSwitch.css'

export default class ToggleSwitch extends Component {
  render() {
    return (
      <div>
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
      </div>
    )
  }
}
