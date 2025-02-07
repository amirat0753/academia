import Back from '../common/back/Back'
import CoursesCard from './CoursesCards'
import OnlineCourses from './OnlineCourses'



const CourseHome = () => {
  return (
    <div>
      <Back title = 'Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </div>
  )
}

export default CourseHome