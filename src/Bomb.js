// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state=({
            secondsLeft: this.props.initialCount
        })
    }
    
    render() {
        let seconds_left = this.state.secondsLeft
            if(seconds_left === 0) {
                return(
                    <p>Boom!</p>
                )
            } else {
                return(
                    <p>{seconds_left} seconds left before I go boom!</p>
                )
            }
    }
}
