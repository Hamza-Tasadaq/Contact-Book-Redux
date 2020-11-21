import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <input type="text" name={this.props.name} className="form-control" placeholder={this.props.placeholder} onChange={(e)=>this.props.handleChange(e)} />
                </div>
            </div>
        )
    }
}
