import React from 'react'

const App = () => {
  interface CoursePartBase{
    name: string,
    exerciseCount: number,
  }
  interface CoursePartBasic extends CoursePartBase{
    description: string,
    kind: "basic"
  }
  interface CoursePartGroup extends CoursePartBase{
    groupProjectCount: number,
    kind: "group"
  }
  interface CoursePartBackground extends CoursePartBase{
    description : string,
    backgroundMaterial: string,
    kind: "background"
  }

  type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;


  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind:"group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind : "background"
    },
  ];








  return (
    <div>
       {courseParts.map(course=>{
         switch (course.kind) {
          case 'basic' :
            return (
              <div>
                <h2>{course.name}</h2>
                <p>{course.description}</p>
                <p>Exercises: {course.exerciseCount}</p>
              </div>
            )
          case 'group':
            return (
              <div>
                <h2>{course.name}</h2>
                <p>Group Projects : {course.groupProjectCount}</p>
                <p>Exercises: {course.exerciseCount}</p>
              </div>
            )  
            case 'background':
              return (
                <div key={course.name}>
                  <h2>{course.name}</h2>
                  <p>{course.description}</p>
                  <a href={course.backgroundMaterial} target="_blank" rel="noopener noreferrer">
                    Background Material
                  </a>
                  <p>Exercises: {course.exerciseCount}</p>
                </div>
              );
            default:
              return null;
            
         }
       })}
    </div>
  )
}

export default App
