import React from 'react'
import { NavItem } from 'react-bootstrap'

const Card = ({name, desc}) => {
  return (
    <div className="card mb-3 mt-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{desc}
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card