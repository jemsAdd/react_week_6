import React, { Component } from 'react'

export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h2> Even Clicks Counter :{this.props.evenCounter}</h2>
      </div>
    )
  }
}
