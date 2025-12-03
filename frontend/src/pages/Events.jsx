import React from "react";
import { eventsData } from "../data";
import { NavLink } from "react-router";
import graduate from "../assets/graduate.jpg";

export default function Events() {
  const styles = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    marginBottom: "40px",
  };
  const displayEvents = eventsData.map((item) => {
    return (
      <NavLink to={`${item.id}`} key={item.id}>
        <div className="event">
          <div className="dates">
            <p className="event-date-month">{item.date.month}</p>
            <p className="event-date-day">{item.date.day}</p>
            <p className="event-date-year">{item.date.year}</p>
          </div>
          <div className="event-details">
            <p>
              {item.day}.<span>{item.time}</span>
            </p>
            <h4>{item.name}</h4>
            <p>{item.location.venue}</p>
          </div>
        </div>
      </NavLink>
    );
  });
  return (
    <>
      <img src={graduate} alt="" style={styles} />
      <div className="container">
        <h2 className="caption">UPCOMING EVENTS</h2>
        <div className="all-events">{displayEvents}</div>
      </div>
    </>
  );
}
