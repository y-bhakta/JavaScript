let name = document.getElementById("name");
let department = document.getElementById("department");
let salary = document.getElementById("salary");
let id = document.getElementById("id");
let submit = document.getElementById("addemp");
let empdata = document.getElementById("empdata");
let alertt = document.getElementById("alert");
let editIndex = null;
let arr = [];
let hide = document.getElementById("hide");
function renderTable() {
    empdata.innerHTML = "";
    arr.forEach((item, idx) => {
        empdata.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.department}</td>
                <td>${item.salary}</td>
                <td>
                    <div class="">
                        <button class="btn btn-outline-success ms-2 edit-btn" data-idx="${idx}" data-bs-toggle="modal" data-bs-target="#examplemodal">Edit</button>
                        <button class="btn btn-outline-danger delete-btn" data-idx="${idx}">Delete</button>
                    </div>
                </td>
            </tr>
        `;
    });
    document.querySelectorAll(".edit-btn").forEach((btn) => {
        btn.onclick = function () {
            let idx = this.getAttribute("data-idx");
            newname.value = arr[idx].name;
            newdepartment.value = arr[idx].department;
            newid.value = arr[idx].id;
            newsalary.value = arr[idx].salary;
            editIndex = idx;
        };
    });
    document.getElementById("updatebtn").onclick = function () {
        arr[editIndex].name = newname.value;
        arr[editIndex].id = newid.value;
        arr[editIndex].department = newdepartment.value;
        arr[editIndex].salary = newsalary.value;
        renderTable();
    }
    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.onclick = function () {
            let idx = this.getAttribute("data-idx");
            arr.splice(idx, 1);
            renderTable();
            if (editIndex == idx) {
                name.value = "";
                department.value = "";
                id.value = "";
                salary.value = "";
                submit.textContent = "Submit";
                editIndex = null;
            }
        };
    });
}
submit.onclick = function () {
    if (editIndex === null) {
        if (name.value === "" || department.value === "" || id.value === "" || salary.value === "") {
            hide.classList.remove("hide");
            alertt.innerText = "Please fill in all details!!.";
        } else {
            arr.push({
                name: name.value,
                department: department.value,
                id: id.value,
                salary: salary.value
            });
            alertt.innerText = "";
            alert("Employee added successfully!");
        }
    } else {
        arr[editIndex].name = name.value;
        arr[editIndex].department = department.value;
        arr[editIndex].id = id.value;
        arr[editIndex].salary = salary.value;
        editIndex = null;
        submit.textContent = "Submit";
    }
    name.value = "";
    department.value = "";
    id.value = "";
    salary.value = "";
    renderTable();
};
renderTable();
let tablesec = document.getElementById("tablesec");
let searchsec = document.getElementById("searchsec");
let empsec = document.getElementById("empsec");
let navadd = document.getElementById("navadd");
let navview = document.getElementById("navview");
let navsearch = document.getElementById("navsearch");
const view = () => {
    tablesec.classList.remove("hide");
    navview.classList.add("active");
    navadd.classList.remove("active");
    navsearch.classList.remove("active");
    searchsec.classList.add("hide");
    empsec.classList.add("hide");
}
const adddata = () => {
    tablesec.classList.add("hide");
    searchsec.classList.add("hide");
    empsec.classList.remove("hide");
    navview.classList.remove("active");
    navadd.classList.add("active");
    navsearch.classList.remove("active");
}
const search = () => {
    tablesec.classList.add("hide");
    searchsec.classList.remove("hide");
    empsec.classList.add("hide");
    navview.classList.remove("active");
    navadd.classList.remove("active");
    navsearch.classList.add("active");
}
let newname = document.getElementById("newname");
let newdepartment = document.getElementById("newdepartment");
let newid = document.getElementById("newid");
let newsalary = document.getElementById("newsalary");
let searchdata = document.getElementById("searchdata");
let showname = document.getElementById("showname");
let showid = document.getElementById("showid");
let showsalary = document.getElementById("showsalary");
let showdep = document.getElementById("showdep");
let nodata = document.getElementById("nodata");
const searchfun = () => {
    arr.forEach((val,idx) => {
        if (searchdata.value === arr[idx].name) {
            showname.innerText = arr[idx].name;
            showdep.innerText = arr[idx].department;
            showid.innerText = arr[idx].id;
            showsalary.innerText = arr[idx].salary+" rs";
        } else {
            nodata.innerText = "No Data Found!!";
        }
    });
};