import { menuListCategoryIndex } from "./components/menu.js";
import { getAllCategory } from "./module/app.js";

let nav__ul = document.querySelector(".nav__ul");

addEventListener("DOMContentLoaded", async e=>{
    let data = await getAllCategory();
    nav__ul.innerHTML = await menuListCategoryIndex(data);  
})