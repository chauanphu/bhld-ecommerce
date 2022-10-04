import React, { Component } from 'react'
import './index.sass'

export default class Section extends Component {
    render() {
        switch (this.props.variant) {
            case 'screen':
                return this.SectionScreen()
            case 'auto':
                return this.SectionAuto()
            default:
                return this.SectionDefault()
        }


    }
    SectionDefault() {
        return (
            <div className='section'>
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        )
    }
    SectionScreen() {
        return (
            <div className='section-screen'>
                {this.props.children}
            </div>
        )
    }
    /**
     * It will return a section with height auto
     * @returns 
     */
    SectionAuto() {
        return (
            <div className='section-auto'>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
