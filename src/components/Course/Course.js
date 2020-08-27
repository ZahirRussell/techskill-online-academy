import React from 'react';


const courseStyle={border:'1px solid red', margin:'10px', padding:'10px'}
const Course = (props) => {
    const handleAddCourse = props.handleAddCourse;
    return (
        <div style={courseStyle}>
            <h3>Title: {props.course.Title}</h3>
            <h3>Description: {props.course.Description}</h3>
            <h3>Duration: {props.course.Duration}</h3>
            <h3>Fee: {props.course.Fee}</h3>
            <h3>Lessons: {props.course.Lessons}</h3>
            <h3>Level: {props.course.Level}</h3>
            <button onClick={() => handleAddCourse(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Course;