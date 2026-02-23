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
      <div className="container">
        <h1>Giving to Konongo Odumase Senior High School (KOSHS)</h1>
        <p>
          Over the past several years, Ghana has funded its educational programs
          mainly from the government sources through the consolidated fund. It
          has come to a point where the government is finding it increasingly
          difficult to cope with the myriads of expenditures demanded by the
          educational system.
        </p>
        <h3>Alumni Funding</h3>
        <p>
          This is particularly true with the introduction of the free SHS. Of
          the many alternative sources of financing available, the alumni
          funding sources appear to be the best alternative source to assist
          with the financing of schools. Indeed, the alumni have a huge
          financial potential waiting to be tapped into for the development of
          institutions, especially the second cycle institutions including
          KOSHS.
        </p>
        <div className="contact-container">
          <h2 className="caption">Donate</h2>
          <h3>Bank Account </h3>
          <p>Fidelity Bank</p>
          <p>20230*****</p>
          <h3>Mobile Money</h3>
          <p>02444****</p>
          {/* <form className="contact-form">
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
        </form> */}
        </div>
        <h3>New Financing Approach</h3>
        <p>
          Given the financial potential of the alumni, we propose the
          all-inclusive and sustained financing approach to finance the
          activities of KOSHS. This is an approach whereby every alumnus is
          encouraged to give something small every year but on a sustained
          basis. These such contributions will be more than enough to provide
          funds needed for projects and even build a sizeable amount of
          financial reserves within a short period of time.
        </p>
        <h3>A Coordinating & Monitoring Council</h3>
        <p>
          To be able to coordinate all the activities involved in the processes,
          a coordinating and monitoring council (CMC) is created to coordinate
          all the activities involved in establishing the alumni financing
          arrangements.
        </p>
        <h3>Centralized Accounts & Accountability</h3>
        <p>
          Under the arrangements, a cedi and a dollar denominated accounts are
          being created to receive cedi and dollar payments from the alumni.
          Monthly reports of receipts of funds will be generated and broadcast
          to all alumni for transparency and trust.
        </p>
        <h2>*Accounts Overseers*</h2>
        <p>
          The signatories to the accounts include following below:
          <ol>
            <li>The President of the Anuanom Association - Accra</li>
            <li>The Vice President of Anuanom Association - Kumasi</li>
            <li>The Treasurer of Anuanom Association</li>
            <li>The Secretary of Anuanom Association</li>
          </ol>
          Under the timelines set in the proposal, it is expected that payments
          into the account created will commence in the first week of January
          2025. The support and cooperation of all alumni is appreciated in
          advance. Credit: Prof. Kofi A. Osei (020-818-0424) (kaosei@ug.edu.gh)
        </p>
      </div>
    </>
  );
}
