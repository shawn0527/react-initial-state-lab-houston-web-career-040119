// your ImageSlider code here!
import React, { Component } from 'react'

export default class ImageSlider extends Component {
    constructor(props) {
        super(props)
        this.state=({
            currentSlideIndex: 0
        })
    }
    render() {
        let current_slide = this.state.currentSlideIndex
        return(
            <div>I am on slide {current_slide}</div>
        )
    }
}