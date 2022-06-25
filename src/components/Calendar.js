import React, { Component } from "react";

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <div>
          <select value={this.props.value} onChange={this.props.onChange}>
            <option value="5">5 dnů</option>
            <option value="7">týden</option>
            <option value="14">14 dní</option>
            <option value="30">měsíc</option>
          </select>
        </div>
      </div>
    );
  }
}
