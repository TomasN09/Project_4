import React, { Component } from 'react'

export default class TotalPrice extends Component {
    render() {
        return (
            <div >
                <input type="text"  name="celkem" value={this.props.total} onChange={this.props.onChange} aria-label="Total price" aria-describedby="button-addon2" disabled></input>
                <div >
                    <button type="button" id="button-addon2" onClick={this.props.onClick}>&nbsp;&nbsp;&nbsp;Výpočet ceny&nbsp;&nbsp;&nbsp;</button>
                </div>
            </div>
        )
    }
}