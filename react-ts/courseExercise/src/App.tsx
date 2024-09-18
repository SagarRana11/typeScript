import './App.css'
const App = () => {
  interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }
  
  interface CoursePartBasic extends CoursePartBase {
    description: string;
    kind: "basic"
  }
  
  interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
  }
  
  interface CoursePartBackground extends CoursePartBase {
    description: string;
    backgroundMaterial: string;
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
      kind: "group"
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
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
  ];

  



  return (
    <div>
      {courseParts.map(course =>{
        switch (course.kind) {
          case 'basic' :
            return (
              <div>
                <h2>{course.name} {course.exerciseCount}</h2>
                <p>{course.description}</p>
              </div>
            )
          case 'group' : 
            return (
              <div>
                <h2>{course.name} {course.exerciseCount}</h2>
                <p>group project exercises : {course.groupProjectCount}</p>
              </div>
            )
          case 'background' : 
            return (
              <div>
                <h2>{course.name} {course.exerciseCount}</h2>
                <p>{course.description}</p>
                <p>submit to {course.backgroundMaterial}</p>
              </div>
          )     
        }    
      })}

      Number of exercises : {courseParts.reduce((sum , course)=> sum + course.exerciseCount, 0 )}
    </div>
  );a
};

export default App;