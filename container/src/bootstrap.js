import { mount as studentMount } from 'student/Student';
import { mount as courseMount } from 'course/Course';

console.log('Container!');

studentMount(document.querySelector('#my-student'));
courseMount(document.querySelector('#my-course'));
