import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// watcher
import { observer } from 'mobx-react';

import School from './components/School';

import './App.css';

@observer
class App extends Component {
  static defaultProps = {
    center: {lat: -37.8136, lng: 144.9631},
    zoom: 11
  };

  render() {
    let schoolDisplay;

    if(!this.props.data.is_loading) {
      console.log(this.props.data.schools);

      schoolDisplay = this.props.data.schools.map( (school, index) => {
        let mytext = school.schoolName + ' ' + school.medianScore + ' ' + school.top40;
        return (
          <School
            key={index}
            lat={school.latLng.lat}
            lng={school.latLng.lng}
            text={mytext}
          />
        )
      });
    }
    else {

    }

    //console.log('-- test --');
    //console.log(schoolDisplay);

    return (
      <div className="App">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          { schoolDisplay }
        </GoogleMapReact>

        <div className="explain">
          <p><strong>2016 VCE results</strong> by location. Records only contain median score > 30 points</p>
          <p>
            E.g. <u>Westbourne Grammar School 33 14.7</u><br/>
            <strong>School name:</strong> Westbourne Grammar School<br/>
            <strong>Median score:</strong> 33. Max 50 points<br/>
            <strong>Top 40 points percentage:</strong> 14.7%
          </p>

        </div>
      </div>
    );
  }
}

export default App;
