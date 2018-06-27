import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateColorChanger = this.updateColorChanger.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this);
    this.state = {
      fontColor: 'black',
      fontSize: 14,
      fontFamily: 'courier',
      allowEdit: false,
    }
  }

  // updateColor
  updateColorChanger(fontColor) {
    this.setState({fontColor})
    console.log(this.state.fontColor)
  }
  // updateSize
  updateSize(fontSize) {
    this.setState({fontSize})
  }
  // updateFamily
  updateFamily(fontFamily) {
    this.setState({fontFamily})
  }
  // updateEditStatus
  updateEditStatus() {
    
    this.setState((prevState) => ({allowEdit: !prevState.allowEdit}))
  }
  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle 
          allowEdit={this.state.allowEdit}
          updateStatus={this.updateEditStatus}
          />
          <ColorChanger 
            fontColor={this.state.fontColor}
            updateColor={this.updateColorChanger}
            allowEdit={this.state.allowEdit}
          />
          <SizeChanger
            fontSize={this.state.fontSize}
            updateSize={this.updateSize}
            allowEdit={this.state.allowEdit}
            />
          <FamilyChanger
            fontFamily={this.state.fontFamily}
            updateFamily={this.updateFamily}
            allowEdit={this.state.allowEdit}
            />
        </div>
        <div className="textArea">
          <TextContainer 
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily}
          />
        </div>
      </div>
    )
  }
}

export default App;
