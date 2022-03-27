import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  // array details for dashboard component
  const dashData = [
    {
      title: "EARNINGS (MONTHLY)",
      price: "$40,000",
      styling1: true,
      stylingFont1: true,
      icon1: true,
    },
    {
      title: "EARNINGS (ANNUAL)",
      price: "$215,000",
      styling2: true,
      stylingFont2: true,
      icon2: true,
    },
    {
      title: "TASKS",
      price: "50%",
      progress: true,
      styling3: true,
      stylingFont3: true,
      icon3: true,
    },
    {
      title: "PENDING REQUESTS",
      price: "18",
      styling4: true,
      stylingFont4: true,
      icon4: true,
    },
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        {/* to link url-parameter */}
        <Link
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          to={"/form"}
        >
          <i className="fa-sm text-white-50"></i> Create User
        </Link>
      </div>
      <div className="row">
        {/* maping dashboard details */}
        {dashData.map((e,id) => { 
          return (
            <div key ={id} className="col-xl-3 col-md-6 mb-4">
              {/* styling dashboard data */}
              <div
                className={
                  e.styling1
                    ? "card border-left-primary shadow h-100 py-2"
                    : e.styling2
                    ? "card border-left-success shadow h-100 py-2"
                    : e.styling3
                    ? "card border-left-info shadow h-100 py-2"
                    : e.styling4
                    ? "card border-left-warning shadow h-100 py-2"
                    : ""
                }
              >
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      {/* styling dashboard data */}
                      <div
                        className={
                          e.stylingFont1
                            ? "text-xs font-weight-bold text-primary text-uppercase mb-1"
                            : e.stylingFont2
                            ? "text-xs font-weight-bold text-success text-uppercase mb-1"
                            : e.stylingFont3
                            ? "text-xs font-weight-bold text-info text-uppercase mb-1"
                            : e.stylingFont4
                            ? "text-xs font-weight-bold text-warning text-uppercase mb-1"
                            : ""
                        }
                      >
                        {e.title}
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            {e.price}
                          </div>
                        </div>
                        {/* for progressbar */}
                        {e.progress ? (
                          <div className="col">
                            <div className="progress progress-sm mr-2">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-auto">
                      {/* for dashboard icon */}
                      <i
                        className={
                          e.icon1
                            ? "fas fa-calendar fa-2x text-gray-300"
                            : e.icon2
                            ? "fas fa-dollar-sign fa-2x text-gray-300"
                            : e.icon3
                            ? "fas fa-clipboard-list fa-2x text-gray-300"
                            : e.icon4
                            ? "fas fa-comments fa-2x text-gray-300"
                            : ""
                        }
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
