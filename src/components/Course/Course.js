import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const {Title,Level,Fee,Description,Duration,Thumbnail} = props.course;
    const handleAddCourse = props.handleAddCourse;
    return (   
               <div className="col-sm-4 col-md-4 mt-3">
                    <div className="card card-inverse card-info">
                        <img className="card-img-top" src={Thumbnail} alt=""></img>
                        <div className="card-body">
                            <h4 className="card-title mt-3">{Title}</h4>
                            <div className="meta card-text">
                            <span>
                                <FontAwesomeIcon icon={faDatabase} /> <small>{Level}</small>
                            </span>
                            <span className="float-right">
                                <FontAwesomeIcon icon={faDollarSign} />&nbsp;<strong>{Fee}</strong>
                            </span>
                            </div>
                            <div className="card-text">
                                {Description}
                            </div>
                        </div>
                        <div className="card-footer">
                            <FontAwesomeIcon icon={faClock} /> <strong>{Duration}</strong><span> (Total Hours)</span>
                            <button type="button" className="btn btn-info float-right btn-s" onClick={() => handleAddCourse(props.course)}><FontAwesomeIcon icon={faShoppingCart} />&nbsp; Enroll Now</button>
                        </div>
                    </div>
                </div>    

   
    );
};

export default Course;