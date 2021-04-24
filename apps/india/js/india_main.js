import { cities } from "./data/cities.js";

console.log(cities);

const createDataTable = () => {
  let str = `<table><caption>India Cities</caption>`;
  str += `<tr>
  <th>Name</th>
  <th>Population</th>
 
  
  </tr>`;
  for (let count = 0; count < cities.length; count++) {
    str += `<tr>
        <td>${cities[count].city}</td>
        <td>${cities[count].population}</td>
       
        
        </tr>`;
  }
  str += `</table>`;
  document.getElementById("divtable").innerHTML = str;
};
createDataTable();
