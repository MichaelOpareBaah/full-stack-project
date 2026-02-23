import React from "react";
import { useParams } from "react-router";
import { eventsData } from "../data";

export default function EventDetail() {
  const styles = {
    width: "100%",
    height: "500px",
    objectFit: "cover",
  };
  const { id } = useParams();
  const displayParam = eventsData.find((item) => item.id === Number(id));
  return (
    <div className="container">
      <img src={displayParam.image_url} alt=" " style={styles} />
      <h4 className="blog-caption">{displayParam.name}</h4>
      <p>{displayParam.description}</p>
    </div>
  );
}
