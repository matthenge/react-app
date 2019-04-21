import React, { Component } from "react";
import Meetup from "../presentational/Meetup.jsx";
import "../../../css/style.css"

class Meetups extends Component {
  constructor() {
    super()
    this.state = {
      meetups: []
    };
  }

  componentDidMount() {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    return fetch("https://questioners-two-staging.herokuapp.com/api/meetups/", config)
      .then(res => res.json())
      .then(data => {
        this.setState({
          meetups: data.results
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

export default Meetups;