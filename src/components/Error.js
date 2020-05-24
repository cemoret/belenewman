import React from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// Components

export default function Error404() {
  return (
    <div className="row m-0 pt-5">
      <div className="col-12 pt-5 px-0">
        <h3 className="text-center px-3">
          Error:{" "}
          <Link to={`/`}>
            <span className="link"> Ir a Porfolio</span>
          </Link>
        </h3>
      </div>

      <div className="col-12 px-0 pt-error pb-error">
        <h4 className="text-center b-grey marquee py-2 my-0 font-mono">
          <span>
            &nbsp;Error 404 / Error 404 / Error 404 / Error 404 / Error 404 /
            Error 404 / Error 404 /
          </span>
          <span>
            &nbsp;Error 404 / Error 404 / Error 404 / Error 404 / Error 404 /
            Error 404 / Error 404 /
          </span>
          <span>
            &nbsp;Error 404 / Error 404 / Error 404 / Error 404 / Error 404 /
            Error 404 / Error 404 /
          </span>
        </h4>
      </div>
    </div>
  );
}
