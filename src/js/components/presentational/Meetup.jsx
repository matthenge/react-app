import React from "react";
import "../../../css/style.css"

const Meetup = (meetup) => {
    const date = new Date(meetup.scheduled_date);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();
    let weekday = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12? (hours -= 12, "pm") : "am";
    let fulldate = weekday+" "+hours+":"+minutes+"0"+ampm+", "+day+" "+month+" "+year;
    let tag = "#" + meetup.tags;
    return(
      <a href={`/meetup?meetid=${meetup.id}`}>
      <div className="card">
       <div>
        <img src={"../../../images/planet.jpg"} alt={"image"} />
       </div>
       <h2>{ meetup.title }</h2>
       <h6>{ "Description:" }</h6>
       <p>{ meetup.body }</p>
       <h6>{ "Venue:" }</h6>
       <p>{ meetup.location }</p>
       <h6>{ "Date:" }</h6>
       <p>{ fulldate }</p>
       <h6>{ "Organizer:" }</h6>
       <p>{ meetup.creator.name }</p>
       <span className="tags">{ tag }</span>
      </div>
      </a>
    );
}

export default Meetup;