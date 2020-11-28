

const mount = (el) => {
  let students = '';
  let studentsName = ['sameer','shekhar','amit','ravi']

  for (let i = 0; i < studentsName.length; i++) {
    
    students += `<div>${studentsName[i]}</div>`;
  }

  el.innerHTML = students;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFNITELY has an element with an id of 'dev-products
// We want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#student-dev');

  // Assuming our container doesnt have an element
  // with id 'dev-products'....
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in develpment or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT try to immediately render the app
export { mount };
