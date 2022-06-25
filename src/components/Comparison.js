import React, { Component } from 'react'



export default class Comparison extends Component {
    render() {
        return (
            <div>
                <div >
                    <input  type="text" name="lim" value={this.props.limit} onChange={this.props.onChange} />
                    <div >
                        <label >Zadejte svůj limit</label>
                    </div>
                </div>
                <div >
                    <input  type="text" name="lim_kont" disabled value={(this.props.limit >= this.props.total)? 'Zadaná cena je OK':'Musíš přidat!'} />
                    <div >
                        <label >&nbsp;Kontrola&nbsp;&nbsp;</label>
                    </div>
                </div>
        
            </div>
        )
    }
}