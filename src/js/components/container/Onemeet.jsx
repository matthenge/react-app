import React, { Component } from "react";
import Meetup from "../presentational/Meetup.jsx";
import "../../../css/style.css"

class Onemeet extends Component {
  constructor() {
    super()
    this.state = {
        meetups: []
    };
  }

  componentDidMount() {
    const meetId = window.location.href.split("=")[1];
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    return fetch(`https://questioners-two-staging.herokuapp.com/api/meetups/${meetId}`, config)
      .then(res => res.json())
      .then(data => {
        this.setState({
            meetups: data.data
            })
      })
  }

  render() {
    const { meetups } = this.state;
    return(
      <div className="cont">
         { meetups.map( meetup =>
          <Meetup
            {...meetup}
            key={ meetup.id }
          />
        ) }
      </div>
    );
  }
    }

export default Onemeet;