/**
*
* Dropdowns
*
*/

import React from 'react';
// import styled from 'styled-components';


function Dropdowns() {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Action
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  );
}

Dropdowns.propTypes = {

};

export default Dropdowns;
