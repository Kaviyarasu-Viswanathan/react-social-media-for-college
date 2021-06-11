import React from "react";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <div className="rightsidebar">
      <h3>Updated News from Vcet</h3>

      <div className="right-content">
        <marquee
          className="right-content"
          behavior="scroll"
          direction="up"
          height="250"
          scrollamount="2"
          scrolldelay="10"
        >
          Revised Academic Schedule 2020-21 Odd Semester(Nov. 2020 – Mar. 2021)
          I Year B.E/B.Tech, I Year M.E
          <p className="dots">
            {" "}
            .......................................................................
          </p>
          <br />
          VCET has been accredited by NBA(National Board of Accreditation, New
          Delhi) for five UG Programmes (BE - ECE, EEE, CSE, BME & B.Tech - IT)
          <p className="dots">
            {" "}
            ..............................................................................
          </p>
          <br />
          VCET accredited with "A" Grade by NAAC VCET has been accredited by
          NBA(National Board of Accreditation, New Delhi) for five UG Programmes
          (BE - ECE, EEE, CSE, BME & B.Tech - IT) College will remain closed for
          the students and staff until further order CGPA to Percentage Mark
          Conversion Academic Schedule 2020-21 Odd Semester(Aug. 2020 - Nov.
          2021) II, III & IV Year UG(BE/B.Tech), II Year ME, MCA & MBA III Year
          MCA
          <p className="dots">
            {" "}
            ...............................................................................
          </p>
          <br />
          VCET accredited with "A" Grade by NAAC VCET has been accredited by
          NBA(National Board of Accreditation, New Delhi) for five UG Programmes
          (BE - ECE, EEE, CSE, BME & B.Tech - IT) College will remain closed for
          the students and staff until further order CGPA to Percentage Mark
          Conversion Academic Schedule 2020-21 Odd Semester(Aug. 2020 - Nov.
          2021) II, III & IV Year UG(BE/B.Tech), II Year ME, MCA & MBA III Year
          MCA Revised Academic Schedule 2020-21 Odd Semester(Nov. 2020 – Mar.
          2021) I Year B.E/B.Tech, I Year M.E
          <p className="dots">
            {" "}
            ................................................................................
          </p>
          <br />
        </marquee>
      </div>
    </div>
  );
}

export default RightSidebar;
