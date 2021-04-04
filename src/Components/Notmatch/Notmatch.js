import React from "react";
import "../../css/main.css";

const Notmatch = () => {
  return (
    <div>
      <div className="row not_found">
        <div className="col-sm-12">
          <h1>Page Not Found</h1>
          <p>
            The Page you are loking for could not be found. It might be
            remove, renamed or doesn't exists.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notmatch;
