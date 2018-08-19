import React, {Component} from 'react';
import './Orbit.css';

class Orbit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slowClass: false,
      randomSpeed: '15s',
      randomScale: 1
    };

    this.setSlowClass = this.setSlowClass.bind(this);
  }

  componentDidMount() {
    const randomSpeed = 15 + Math.floor(Math.random() * 10) + 's';
    const randomScale = (9 + Math.floor(Math.random() * 3)) * 0.1;

    this.setState({
      randomSpeed: randomSpeed,
      randomScale: randomScale
    });
  }

  setSlowClass(newValue) {
    this.setState({
      slowClass: newValue
    });
  }

  render() {
    return (
      <div className={'Orbit' + (this.state.slowClass ? ' Slow' : '')}
           style={{width: this.props.width, height: this.props.width, animationDuration: this.state.randomSpeed}}>
        <div className={'InnerOrbit'}>
          <div className={'Planet'} style={{transform: 'translate(-50%, -50%) scale(' + this.props.scale + ')'}}
               onMouseOver={() => this.setSlowClass(true)}
               onMouseLeave={() => this.setSlowClass(false)}>
            <img src={this.props.image} alt="img" className={'Logo'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Orbit;
