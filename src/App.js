import React, {Component} from 'react';
import topinNaama from './static/topi_naamakuva.jpg';
import angularLogo from './static/angular-logo.png';
import nodeLogo from './static/nodejs-logo.png';
import cssLogo from './static/css3-logo.png';
import './App.css';
import './Orbit.css';
import Orbit from './Orbit';

class App extends Component {
  constructor() {
    super();

    this.mouseOver = -1;
  }

  setAnimationState(className) {
    const wrapper = document.getElementsByClassName(className)[0];

    if (!wrapper || !wrapper.classList) {
      return;
    }

    wrapper.classList.remove('animationNormal');
    wrapper.classList.add('animationSlow');
  }

  resetAnimationState(className) {
    const wrapper = document.getElementsByClassName(className)[0];

    if (!wrapper || !wrapper.classList) {
      return;
    }

    wrapper.classList.remove('animationSlow');
    wrapper.classList.add('animationNormal');
  }

  render() {
    return (
      <div className="App">
        <div className="App-content">
          <h1 style={{'marginTop': '1rem'}}>TOPI SALONEN</h1>
          <h4 style={{'marginTop': '-1.5rem'}}>Web developer @ NordicEdu</h4>

          <div className="Img-circle">
            <img className="App-face-image" src={topinNaama} alt="naama"/>
          </div>

          <Orbit width={'30rem'} image={angularLogo} scale={0.8} />
          <Orbit width={'25rem'} image={nodeLogo} scale={1} />
          <Orbit width={'20rem'} image={cssLogo} scale={1.1} />
          <Orbit width={'15rem'} image={angularLogo} scale={1.3} />
        </div>
      </div>
    );
  }
}

export default App;
