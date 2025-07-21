let age = document.getElementById("age");
let name = document.getElementById("name");
let city = document.getElementById("city");

let table=document.getElementById("tbody");

let btn=document.getElementById("add");
btn.addEventListener("click", function() {
    table.innerHTML+=`
        <tr>
            <td style="padding: 2px 4px;">${name.value}</td>
            <td style="padding: 2px 4px;">${age.value}</td>
            <td style="padding: 2px 4px;">${city.value}</td>
        </tr>    
    `
});