'use strict';

import './styles.css';
import template from './userList.hbs';


const products = require('./menu.json');


const mainMenue = document.querySelector(".js-menu");
mainMenue.insertAdjacentHTML('beforeend', template(products));

const buttonTheme = document.querySelector('input');
const allPage = document.querySelector('body');



buttonTheme.addEventListener('focus', switchTheme);


function switchTheme(e) {

     allPage.classList.toggle('dark-theme');

 }




