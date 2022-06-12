import React from "react";


const AdminPage = () =>{

    return (
        <div className="container">
          <h1 className="text-center m-2">Admin Panel for Announcement</h1>
          <div className="row">
              <div className="col-md-4">
                  {/* Add New Announcement */}
                  <button>New Announcement</button>
              </div>
              <div className="col-md-4">
                  {/* Table for All Announcements */}
                  <h2>Here we will have table </h2>
              </div>
          </div>
        </div>
      );
};

export default AdminPage;