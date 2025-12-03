import React from "react";
import graduate from "../assets/graduate.jpg";

export default function Donate() {
  const styles = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    marginBottom: "40px",
  };
  return (
    <>
      <div>
        <img src={graduate} alt="" style={styles} />
      </div>
      <div className="contact-container">
        <h2 className="caption">Donate</h2>
        <form className="contact-form">
          <label>Donate Amount</label>
          <input
            type="number"
            min="1"
            step="0.01"
            placeholder="Enter amount"
            required
          ></input>
          <label>Full Name</label>
          <input type="text" name="firstname" placeholder="Michael Opare" />
          <label>Email</label>
          <input type="email" name="email" placeholder="mikeowusu@gmail.com" />
          <button type="submit" className="contact-btn">
            Donate
          </button>
        </form>
      </div>
    </>
  );
}
