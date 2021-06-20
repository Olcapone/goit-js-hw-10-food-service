'use strict';

import './styles.css';
import template from './userList.hbs';


const products = require('./menu.json');


const mainMenue = document.querySelector(".js-menu");
mainMenue.insertAdjacentHTML('beforeend', template(products));

const buttonTheme = document.querySelector('#theme-switch-toggle');
const allPage = document.querySelector('body');



buttonTheme.addEventListener('change', switchTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}


function switchTheme(e) {   
  
     if (!e.target.checked){
        allPage.classList.add(Theme.LIGHT);
        allPage.classList.remove(Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
      else {
          
         allPage.classList.add(Theme.DARK);
         allPage.classList.remove(Theme.LIGHT);
         localStorage.setItem('Theme', Theme.DARK);
    }

};

 savedTheme();

function savedTheme() {
  const saveTheme = localStorage.getItem('Theme');
  if (saveTheme) {
    allPage.classList.add(saveTheme);
     if (saveTheme === Theme.DARK) {
      buttonTheme.checked = true;
     }
  }
}
     





