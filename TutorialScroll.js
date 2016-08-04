import React from 'react'
import '../styles/layout/_tutorialScroll.scss'

var xor = function(a, b) {
 return (!(a && b) && (a || b));
}

export default class TutorialScroll extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    var domElement = this.refs.tutorialScroll;
     window.addEventListener('scroll', this.handleScroll.bind(this, domElement));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
   }

  handleScroll(el) {
    //console.log("scrolling...");
    this.inViewPort(el);
  }
  stick() {
    //console.log("sticking");
    this.refs.stick.className = "fixed--section-stick"
  }
  unstick(bounds, section) {
    this.refs.stick.className = "fixed--section"
    //console.log(bounds);
    if ((bounds.top) <= -(bounds.height - section.height)) {
      this.refs.stick.style.bottom = 0
      this.refs.stick.style.top = 'auto'
    }
    else {
      this.refs.stick.style.top = 0
      this.refs.stick.style.bottom = 'auto'
    }
  }

  inViewPort(element) {
    var elementBounds = element.getBoundingClientRect();
    var section = this.refs.stick.getBoundingClientRect()
    //console.log(elementBounds.top >= 0,(elementBounds.top) >= -(elementBounds.height - section.height));

    //console.log(elementBounds, section);
    //console.log(elementBounds);
    xor(elementBounds.top >= 0, (elementBounds.top) >= -(elementBounds.height - section.height)) ? this.stick() : this.unstick(elementBounds,section);
  }
  render() {

    return (
      <div className="tutorialScroll" ref="tutorialScroll">
        <div className="container">
          <div className="tutorialScroll--wrapper">
            <div className="col-1-2">
              <div className="fixed--section" ref="stick">
                <img src="../../assets/phone.png" className="device-img"/>
              </div>
            </div>
            <div className="tutorialScroll--context">
              <div className="tutorialScroll--section" ref="section">
                <div className="tutorialScroll--content">
                  <h2>Title</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="tutorialScroll--section" ref="section-2">
                <div className="tutorialScroll--content">
                  <h2>Title</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="tutorialScroll--section" ref="section-3">
                <div className="tutorialScroll--content">
                  <h2>Title</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
