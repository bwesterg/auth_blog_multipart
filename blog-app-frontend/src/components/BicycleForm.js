import React, { Component } from 'react';

const initialState = {
    usage: "",
    frame_material: "",
    manufacturer: "",
    speeds: ""
}

export default class BicycleForm extends Component {

    state = initialState

    handleChange = (event) => {
        let { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        let {submitAction, handleToggle} = this.props
        event.preventDefault()
        submitAction(this.state)
        if(handleToggle){
            handleToggle()
        }
    }

    render(){
        const { usage, frame_material, manufacturer, speeds } = this.state
        return (
            <form className="bicycle-form" onSubmit={this.handleSubmit} >
                <h3>Create a new bicycle entry</h3>
                <label>Usage</label>
                <input type="text" name="usage" value={usage} onChange={this.handleChange}/>
                <label>Frame Material</label>
                <input type="text" name="frame-material" value={frame_material} onChange={this.handleChange}/>
                <label>Manufacturer</label>
                <input type="text" name="manufacturer" value={manufacturer} onChange={this.handleChange}/>
                <label>Speeds</label>
                <input type="text" name="speeds" value={speeds} />
                <input type="submit" />
            </form>
        )
    }
}