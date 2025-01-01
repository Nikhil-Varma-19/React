import React from 'react'
import Card from './Card'
import { useState } from 'react'
const Cards = (props) => {
    let courses = props.courses
    let category=props.category
    // render k bad liked koi nhi hai
    const [liked, setliked] = useState([])
    let allCourse = []
     //this will return the All course in a array singal
    function getAllCourses() {
       if(category ==='All'){
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                    allCourse.push(courseData)
                }
            )
        }
    )
    return allCourse
       }
       else{
        return courses[category]
       }
    }
    return (
        <div className='flex flex-wrap justify-center gap-4 m-5'>
            {
                getAllCourses().map((course) => {
                   return <Card key={course.id} course={course}
                   liked={liked}
                   setliked={setliked}
                   />
                })
            }
        </div>
    )
}

export default Cards
