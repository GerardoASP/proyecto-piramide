import React, { Component } from 'react'
import './Piramide.scss';

class Piramide extends Component {
    constructor(props) {
        super(props);
        this.state = {
          animationPaused: false,
        };
    }
    handlePiramideClick = () => {
        if (!this.state.animationPaused) {
          this.piramide.style.animationPlayState = 'paused';
          this.setState({ animationPaused: true });
          setTimeout(() => {
            this.piramide.style.animationPlayState = 'running';
            this.setState({ animationPaused: false });
          }, 2000);
        }
    };
    render(){
        return (
            <div className='loader'>
                <div className='piramide' id='animatedPiramide' ref={(piramide)=>(this.piramide = piramide)} onClick={this.handlePiramideClick}>
                    <div className='front'></div>
                    <div className='back'></div>
                    <div className='bottom'></div>
                    <div className='left'></div>
                    <div className='right'></div>
                </div>
            </div>
        )
    }
}

export default Piramide
