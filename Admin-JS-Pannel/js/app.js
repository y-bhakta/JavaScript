// Mode Start
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
const checkbox2 = document.getElementById("checkbox2")
checkbox2.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
// Mode End
// counter Start
let count = document.querySelectorAll(".count")
let arr = Array.from(count)
arr.map(function (item) {
  let startnumber = 0

  function counterup() {
    startnumber++
    item.innerHTML = startnumber

    if (startnumber == item.dataset.number) {
      clearInterval(stop)
    }
  }
  let stop = setInterval(function () {
    counterup()
  }, 5)
})
// counter End
let mytable=document.querySelector('.Table table tbody');
async function empdata() {
  try {
    let res = await fetch('https://dummyjson.com/users')
    let data = await res.json()
    console.log(data.users);
    data.users.forEach((user)=>{
      let udepartment;
      user.company.department.length>10?udepartment=user.company.department.slice(0,10)+'...':udepartment=user.company.department;
      mytable.innerHTML+='';
      let tr=document.createElement('tr');
      tr.innerHTML=`
      <td>${user.id}</td>
      <td><img src="${user.image}" width="50px" hieght="50px" alt=""></td>
      <td>${user.firstName} ${user.lastName}</td>
      <td>.${user.username}</td>
      <td>${udepartment}</td>
      <td>${user.gender}</td>
      <td>${user.bloodGroup}</td>
      `;
      mytable.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}
empdata();