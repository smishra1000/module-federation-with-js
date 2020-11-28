import faker from 'faker';

const mount = (el) => {
  let courses = ['Javascript','Vue','React'];
  let coursesText = '';
  for(let i =0;i<courses.length;i++){
     coursesText = `<div>${courses[i]}</div>`;
  }
 

  el.innerHTML = coursesText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#course-dev');

  if (el) {
    mount(el);
  }
}

export { mount };
