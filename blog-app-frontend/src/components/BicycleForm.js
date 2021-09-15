import React, { Component } from 'react';

const initialState = {
    usage: "",
    frame_material: "",
    manufacturer: "",
    speeds: ""
}

export default class BicycleForm extends Component {

    state = initialState

    render(){
        return (
            <form className="bicycle-form" >
                <h3>Create a new bicycle entry</h3>
                <label>Usage</label>
                <input type="text" name="usage"/>
                <label>Frame Material</label>
                <input type="text" name="frame-material"/>
                <label>Manufacturer</label>
                <input type="text" name="manufacturer"/>
                <label>Speeds</label>
                <input type="text" name="speeds"/>
                <input type="submit" />
            </form>
        )
    }
}