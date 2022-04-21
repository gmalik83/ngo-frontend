import React from "react";

const Announcement = () => {
  return (
    <div className="col-md-4">
      <div className="panel panel-primary">
        <div className="panel-heading panel-heading-1 panel2">Announcement</div>
        <div className="panel-body">
          <marquee
            className="marquee"
            direction="up"
            scrolldelay="250"
            onMouseOver="this.stop();"
            onMouseOut="this.start();"
            height="300"
          >
            <p>This is Announcement 1</p>
            <p>This is Announcement 2</p>
            <p>This is Announcement 3</p>
            <p>This is Announcement 4</p>
            <p>This is Announcement 5</p>
            <p>This is Announcement 1</p>
            <p>This is Announcement 2</p>
            <p>This is Announcement 3</p>
            <p>This is Announcement 4</p>
            <p>This is Announcement 5</p>
          </marquee>
        </div>
      </div>
    </div>
  );
};
export default Announcement;
