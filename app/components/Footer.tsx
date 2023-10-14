import React from "react";
import { footerData } from "../data/footer";

const Footer = () => {
  const {
    subscribeText,
    privacyPolicyLink,
    normalDivs,
    sustainabilityDiv,
    aboutDiv,
    socialMediaDiv,
  } = footerData;
  return (
    <footer>
      <div id="footer">
        <div className="footer-div-one for-lg">
          <div>
            <input placeholder="Email address" />
            <i className="fas fa-arrow-right"></i>
          </div>
          <div>
            <aside></aside>
            <div>
              <p>{subscribeText}</p>
              <h6>{privacyPolicyLink}</h6>
            </div>
          </div>
        </div>

        <section className="footer-section">
          <div className="footer-div-one for-sm">
            <div>
              <input placeholder="Email address" />
              <i className="fas fa-arrow-right"></i>
            </div>
            <div>
              <aside></aside>
              <div>
                <p>{subscribeText}</p>
                <h6>{privacyPolicyLink}</h6>
              </div>
            </div>
          </div>
          {normalDivs.map((div, index) => (
            <div className="footer-normal-div" key={index}>
              <h5>{div.title}</h5>
              {div.links.map((link, linkIndex) => (
                <p key={linkIndex}>{link}</p>
              ))}
            </div>
          ))}
        </section>
        <section className="footer-section">
          <div className="footer-normal-div">
            <h5>{sustainabilityDiv.title}</h5>
            <p>{sustainabilityDiv.text}</p>
          </div>
          <div className="footer-normal-div">
            <h5>{aboutDiv.title}</h5>
            {aboutDiv.links.map((link, linkIndex) => (
              <p key={linkIndex}>{link}</p>
            ))}
          </div>
          <div className="footer-normal-div">
            <h5>{socialMediaDiv.title}</h5>
            {socialMediaDiv.links.map((link, linkIndex) => (
              <p key={linkIndex}>{link}</p>
            ))}
          </div>
        </section>
      </div>
      <div id="footer-bottom-most">
        <p>© Aesop</p>
      </div>
    </footer>
  );
};

export default Footer;
