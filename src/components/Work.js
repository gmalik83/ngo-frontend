import React from 'react';
import { Link } from 'react-router-dom';
import Service1 from './images/image1.jpg';
export const Work = () => {
  return (
    <div>
      <section className="py-4 bg-info"> 
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Our Work</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Our Work</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light border-bottom ">
        <div className="container">
          <h5 className="main-heading">Shiksha Initiaves</h5>
          <div className="underline"></div>
          <p> 
            We at North Legion takes our work serious and always encourage our
            members , volunteers to take initiaves for the greater good. We work
            with different sectors to enable benefit for more and more people by
            providing the the chance . Our member also take pride in helping
            anyone out in need. Our Organization has helped more than 10,000
            deserving ones. 
          </p> 
        </div>
      </section>
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Our Work</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom "
                  alt="services"
                />
                <div className="card-body">
                  <h6>Education</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a .
                  </p>
                  <Link to="/work" className="btn btn-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom "
                  alt="services"
                />
                <div className="card-body">
                  <h6>Healthcare</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a .
                  </p>
                  <Link to="/work" className="btn btn-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom "
                  alt="services"
                />
                <div className="card-body">
                  <h6>Nutrition</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a .
                  </p>
                  <Link to="/work" className="btn btn-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
