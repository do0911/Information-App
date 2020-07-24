import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      lat: null,
      lng: null,
      num: 0,
    };
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: true,
    };

    const success = (position) => {
      this.setState({
        isLoaded: true,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const fail = () => {
      alert("위치정보 사용 불가능");
    };

    navigator.geolocation.getCurrentPosition(success, fail, options);
  }

  onMarkerClick = (e) => {
    this.setState({ num: this.state.num + 1 });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.isLoaded ? (
          <Map
            google={this.props.google}
            zoom={17}
            initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
            style={style}
          >
            <Marker onClick={this.onMarkerClick} name={"Current location"} />
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>do</h1>
              </div>
            </InfoWindow>
          </Map>
        ) : (
          <div>로딩중</div>
        )}
      </div>
    );
  }
}

const style = {
  width: "70%",
  height: "50%",
};

/* {this.state.selectedPlace.name} 
<Marker onClick={this.onMarkerClick} name={"Current location"} />*/
export default GoogleApiWrapper({
  apiKey: "AIzaSyCQ59HED9zpJ4ZJkYxBIkKuq0buYyb_bws",
})(Maps);
