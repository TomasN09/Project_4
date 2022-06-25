import React, { Component } from "react";

export default class BikeType extends Component {
  render() {
    return (
      <div>
        <div>
          <h5>{this.props.label}</h5>
          <h6>{this.props.price} Kč/den</h6>
          <p style={this.props.style}>{this.props.description}</p>
          <div style={{display:"flex", flexDirection:"row", }}>
            <input
              data-pos={this.props.id}
              name="checkbox"
              checked={this.props.checked}
              onChange={this.props.onChange}
              type="checkbox"
            />
            <input
              data-pos={this.props.id}
              name="value"
              type="number"
              value={this.props.value}
              onChange={this.props.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

