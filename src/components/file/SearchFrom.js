import React, { useState, useEffect } from "react";

const SearchForm = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    village: "",
    block: "",
    tehsil: "",
    district: "",
    state: "",
    country: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    console.log("I am Clicked");
  };

  

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit} className="border border-success p-2">
            <h3 className="text-center">Search for Any Person</h3>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  value={data.name}
                  onChange={onChange}
                  name="name"
                />
              </div>
              <div class="form-group col-md-4">
                <label htmlFor="inputMobile">Mobile</label>
                <input
                  type="text"
                  class="form-control"
                  id="mobile"
                  name="mobile"
                  value={data.mobile}
                  onChange={onChange}
                  placeholder="Mobile"
                />
              </div>
              <div class="form-group col-md-4">
                <label htmlFor="inputMobile">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={onChange}
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label htmlFor="Village">Village</label>
                <input
                  type="text"
                  class="form-control"
                  id="village"
                  value={data.village}
                  onChange={onChange}
                  name="village"
                />
              </div>
              <div class="form-group col-md-4">
                <label htmlFor="inputBlock">Block</label>
                <input
                  type="text"
                  class="form-control"
                  id="block"
                  name="block"
                  value={data.block}
                  onChange={onChange}
                />
              </div>
              <div class="form-group col-md-4">
                <label htmlFor="inputTehsil">Tehsil</label>
                <input
                  type="text"
                  class="form-control"
                  id="Tehsil"
                  name="tehsil"
                  value={data.tehsil}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label htmlFor="District">District</label>
                <input
                  type="text"
                  class="form-control"
                  id="District"
                  value={data.district}
                  onChange={onChange}
                  name="district"
                />
              </div>
              <div class="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <input
                  type="text"
                  class="form-control"
                  id="state"
                  name="state"
                  value={data.state}
                  onChange={onChange}
                />
              </div>
              <div class="form-group col-md-4">
                <label htmlFor="inputCountry">Country</label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
                  name="country"
                  value={data.country}
                  onChange={onChange}
                />
              </div>
            </div>

            <button type="submit" class="btn btn-danger btn-block">
              Search
            </button>
            {message && (
              <div className="form-group col-md-5 offset-md-4">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default SearchForm;
