import React, { Component } from 'react';
import Camera from 'react-camera';
import { analyseImage } from './services/analyseImage';
import './App.css';
import { __await } from 'tslib';

const style = {
  preview: {
    position: 'relative',
    maxWidth: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  }
  
};

class App extends Component {
  takePicture() {
    analyseImage();
    this.camera.capture()
    .then(blob => {
      this.img.src = URL.createObjectURL(blob);
      console.log(this.img);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
    })
  }

  render() {
    return (
      <div style={style.container}>
        <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
          <div style={style.captureContainer} onClick={() => this.takePicture()}>
            <div style={style.captureButton} />
          </div>
        </Camera>
        <div style={style.preview}>
          <img
            ref={(img) => {
              this.img = img;
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
