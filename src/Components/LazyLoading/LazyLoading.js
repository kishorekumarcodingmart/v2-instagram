import React, { Component } from 'react'
import './LazyLoading.css'

export default class LazyLoading extends Component {
  render() {
    return (
        <>
            <div className={`${this.props.classN} titleLazy`}></div>
        </>
    )
  }
}
