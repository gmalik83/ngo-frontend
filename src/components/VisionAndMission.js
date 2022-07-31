import React from "react";
import Values from "./Values";

export const VisionAndMission = () => {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Vision & Mission</h6>
            </div>
          </div>
        </div>
      </section>
      {/* This is Static Content */}
      <section className="section bg-c-light border-bottom">
        <div className="container text-justify">
          <h5 className="main-heading">Vision</h5>
          <hr></hr>
          {/* <div className="underline"></div> */}
          <p>  
            Parivartan, since decade and a half is active for social
            transformation, wherein the marginalized sections of community are
            socially, economically and politically empowered to lead life of
            security, dignity, and prosperity. Parivartan is working for
            strengthening people organizations to voice struggles for
            fundamental human rights and bringing forward participatory
            development models for economic as well as social development.
            Parivartan works intensively with women on its belief in the
            philosophy that sustainable development remains incomplete without
            dynamic participation of the women. </p>

            <h5 className="main-heading">Mission</h5>
          <hr></hr>
            <p> Deliberations for voicing
            industrial project affected community, struggle for establishment of
            their fundamental rights and strengthened cohesive federations for
            enhancing scope for women leadership to initiate and monitor
            equitable development process at village, block & district level are
            some of the key advocacy executions by Parivartan. </p>
            <p>Parivartan
            believes, 'While part of our nation lives in the late 20th century,
            another part is still living in the medieval age and no nation can
            progress much beyond the national average'. To get more science &
            technology effort channelized to developing the under-developed
            regions and sections of society, Parivartan is extending scientific
            methodology through education to all sections of society, in a way
            so that it is absorbed into the culture. This is being done through
            Advanced Knowledge and Rural Technology Implementation (AKRUTI)
            project partnering with B.A.R.C., a premier multidisciplinary R&D
            organization under the Department of Atomic Energy, Government of
            India and Rajiv Gandhi Science & Technology Commission
            (R.G.S.&T.C.). AKRUTI center of Parivartan is a steering model
            bringing forward the guiding principle - 'What is the prerequisite
            of comprehensive rural development! And how to attain this goal!'. </p>
            <p>
            Community livelihood manifestos highlighting needs and demands
            across all sections of the community with special attention to
            underprivileged communities, is an innovative model developed by
            Parivartan. This model has brought the just demands on the agendas
            of Panchayats and countered the village governance for transparency
            and responsibility. It's been a good sign for stepping ahead with
            values of justice, freedom and equality. Model plan for Natural Risk
            Reduction and Mitigation for villages in Ratnagiri district has been
            recognized as good option for bottom up planning & implementation to
            face the challenges resulted from global warming and climate change. </p>
            
            <p>Prolonged hand holding support to the target community through
            awareness and capacity building has resulted into strengthened
            people organizations in terms of information, knowledge and
            leadership. Presently the organization is active in five blocks
            (Khed, Mandangad, Guhaghar, Chiplun and Dapoli) of the Ratnagiri
            district. Parivartan recognizes that the People Organizations,
            Partner Institutes & sympathizers have enriched its learning and
            guided for mainstreaming justice and equality!
            <ul>
              <li>This is first Item</li>
              <li>This is Second Item</li>
            </ul>
          </p>
        </div>
      </section>
      {/* This is Dynamic Content  */} 
      <Values />
    </div>
  );
};
