import React from "react";
import "../CSS/about.css";
import Navbar from "../components/Navbar";
import kitchen from "../assets/kitchen.jpg";
import signature from "../assets/signature.png";

const About = () => {
  return (
    <div className="main">
      <Navbar />

      <br />
      <br />

      <div className="container_one">
        <h1>About Cap75-Eatery</h1>
        <br />
      </div>

      <div className="textbody">
        <div className="frame">
          <img className="img" src={kitchen} alt="kitchen" />
        </div>

        <div className="text">
          <br />
          <h1>
            We are doing more than
            <br /> you expect{" "}
          </h1>
          <br />
          <br />

          <h4>
            Faudantium magnam error temporibus ipsam aliquid neque quibusdam
            dolorum, quia ea numquam assumenda mollitia dolorem impedit.
            Voluptate at quis exercitationem officia temporibus adipisci quae
            totam enim dolorum, assumenda. Sapiente soluta nostrum reprehenderit
            a velit obcaecati facilis vitae magnam tenetur neque vel itaque
            inventore eaque explicabo commodi maxime! Aliquam quasi, voluptates
            odio.
            <br /> <br /> Consectetur adipisicing elit. Cupiditate nesciunt amet
            facilis numquam, nam adipisci qui voluptate voluptas enim obcaecati
            veritatis animi nulla, mollitia commodi quaerat ex, autem ea
            laborum.
            <br /> <br /> Sapiente soluta nostrum reprehenderit a velit
            obcaecati facilis vitae magnam tenetur neque vel itaque inventore
            eaque explicabo commodi maxime! Aliquam quasi, voluptates odio.
          </h4>

          <br />
          <br />

          <img className="sign" src={signature} alt="signature" />
        </div>
      </div>

      <br />
    </div>
  );
};

export default About;
