import { Component } from 'react';
import './App.css';

import Logo from './components/Logo';
import Navigation from './components/Navigation';
import FaceRecognition from './components/FaceRecognition';
import UserInformation from './components/UserInformation';
import ImageLinkForm from './components/ImageLinkForm';
import UserForm from './components/UserForm';

import ParticlesBg from 'particles-bg';
const bg_type = ['color', 'circle', 'polygon', 'square'];
const bg_settings = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1
};

const initialState = {
  input: '',
  imgUrl: '',
  box: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    code: '',
    name: '',
    email: '',
    entries: '',
    faces: '',
    rank: '',
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  randomBg = () => bg_type[Math.floor(Math.random() * bg_type.length)]
  loadUser = (data) => this.setState({ user: {
    code: data.code,
    name: data.name,
    email: data.email,
    entries: data.entries,
    faces: data.faces,
    rank: data.rank,
    joined: data.joined
  }})
  onInputChange = (e) => this.setState({ input: e.target.value })
  calculateLocations = (data) => {
    const faceBoxes = data.map(d => d.region_info.bounding_box);
    const image = document.getElementById('Image');
    const width = Number(image.width);
    const height = Number(image.height);
    const boxes = [];
    for (let i = 0; i < faceBoxes.length; i++) {
      boxes.push({
        leftCol: faceBoxes[i].left_col * width,
        topRow: faceBoxes[i].top_row * height,
        rightCol: width - faceBoxes[i].right_col * width,
        bottomRow: height - faceBoxes[i].bottom_row * height
      });
    }
    return boxes;
  }
  displayBoxes = (box) => this.setState({ box })

  onImageSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    let url = this.state.input;
    fetch('http://localhost:3000/image', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: this.state.user.code,
        url: url
      })
    })
    .then(resp => resp.json())
    .then()
  }
  
  onRouteChange = (r) => {
    if (r === 'signout') { this.setState(initialState) }
    else if (r === 'home') { this.setState({ isSignedIn: true }) }
    this.setState({ route: r })
  }
  

  render() {
    let { imgUrl, box, route, isSignedIn } = this.state;
    let { name, entries, faces, rank } = this.state.user;
    return (
      <main className='App'>
        <section className='App-header'>
          <Logo />
          <Navigation
            isSignedIn={isSignedIn}
            onRouteChange={this.onRouteChange}
          />
        </section>
        { route === 'home'?
          <>
            <section className='App-body'>
              <FaceRecognition box={box} imgUrl={imgUrl} />
            </section>
            <section className='App-footer'>
              <UserInformation
                name={name}
                entries={entries}
                faces={faces}
                rank={rank}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onImageSubmit={this.onImageSubmit}
              />
            </section>
          </>:
          <UserForm formType={route} onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        }
        
        <ParticlesBg type={this.randomBg()} bg={bg_settings} />
      </main>
    )
  }
}

export default App;
