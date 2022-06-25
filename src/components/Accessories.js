import React, { Component } from "react";

export default class AddExtras extends Component {
  render() {
    return (
      <div>
        <div style={this.props.height2}>
          <div style={this.props.text}>
            <h5>Cyklonosič střešní</h5>
            <div
              className="input-group justify-content-center"
              onChange={this.props.onChange}
            >
              <div>
                <div>
                  <input
                    className="input-group-text"
                    type="radio"
                    value="1.05"
                    name="extra"
                    id="extra1"
                  />
                  <label for="extra1">5% z celkové ceny zápůjčky</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={this.props.height2}>
            <div>
              <h5>Cyklonosič na tažné zařízení</h5>
              <div
                className="input-group justify-content-center"
                onChange={this.props.onChange}
              >
                <div>
                  <div>
                    <input
                      className="input-group-text"
                      type="radio"
                      value="1.1"
                      name="extra"
                      id="extra2"
                    />
                    <label for="extra2">10% z celkové ceny zápůjčky</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={this.props.height2}>
            <div>
              <div onChange={this.props.onChange}>
                <h5>Bez cyklonosiče</h5>
                <div>
                  <input
                    type="radio"
                    value="1"
                    name="extra"
                    id="extra3"
                    defaultChecked
                  />
                  <label for="extra3">Bez cyklonosiče</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
