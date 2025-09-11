// header start
function add() {
    document.querySelector('.home').classList.add('hide');
    document.querySelector('.add-recipe').classList.add('active');
    document.querySelector('.add-recipe').classList.remove('hide');
    document.querySelector('.search').classList.add('hide');
    document.querySelector('.view').classList.add('hide');
}
function home() {
    document.querySelector('.home').classList.remove('hide');
    document.querySelector('.home').classList.add('active');
    document.querySelector('.add-recipe').classList.add('hide');
    document.querySelector('.search').classList.add('hide');
    document.querySelector('.view').classList.add('hide');
}
function search() {
    document.querySelector('.search').classList.remove('hide');
    document.querySelector('.home').classList.add('hide');
    document.querySelector('.add-recipe').classList.add('hide');
    document.querySelector('.search').classList.add('active');
    document.querySelector('.view').classList.add('hide');
}
function view() {
    document.querySelector('.view').classList.remove('hide');
    document.querySelector('.home').classList.add('hide');
    document.querySelector('.add-recipe').classList.add('hide');
    document.querySelector('.search').classList.add('hide');
    document.querySelector('.view').classList.add('active');
}
// header End
//recipe start
let ind;
let ins;
let datar=[];
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((data) => {
        console.log(data.recipes);
        datar=data.recipes;
        addrecipe(datar);
        data.recipes.forEach((food)=>{
            food.ingredients.forEach((ing,i)=>{
                if(i==0){
                    ind=ing;
                }else{
                    ind=ind+" , "+ing;
                }
            });
            food.instructions.forEach((inss,i)=>{
                if(i==0){
                    ins=inss;
                }else{
                    ins=ins+" , "+inss;
                }
            });
            document.querySelector('.recipelist').innerHTML+=`
                <div class="col-12 col-md-6">
                        <div class="card">
                            <img src="${food.image}" class="card-img-top" alt="..." style="height: 300px;">
                            <div class="card-body">
                                <h5 class="card-title">${food.name}</h5>
                                <span>
                                    <span class="fw-bold fs-6">Ingredients:</span> ${ind}
                                </span>
                                <p class="card-text">
                                    <span class="fw-bold fs-6">Instructions:</span> ${ins}
                                </p>
                                <p class="card-text">
                                    <span class="fw-bold fs-6">Type:</span> ${food.cuisine}
                                </p>
                            </div>
                        </div>
                    </div>
            `;
            
        })
    })
    .catch((error) => {
        console.log(error);
    })
function addrecipe(foods){
    document.querySelector('.recipelist2').innerHTML='';
    foods.forEach((food)=>{
        food.ingredients.forEach((ing,i)=>{
                if(i==0){
                    ind=ing;
                }else{
                    ind=ind+" , "+ing;
                }
            });
            food.instructions.forEach((inss,i)=>{
                if(i==0){
                    ins=inss;
                }else{
                    ins=ins+" , "+inss;
                }
            });
        document.querySelector('.recipelist2').innerHTML+=`
                <div class="col-12 col-md-6">
                        <div class="card">
                            <img src="${food.image}" class="card-img-top" alt="..." style="height: 300px;">
                            <div class="card-body">
                                <h5 class="card-title">${food.name}</h5>
                                <span>
                                    <span class="fw-bold fs-6">Ingredients:</span> ${ind}
                                </span>
                                <p class="card-text">
                                    <span class="fw-bold fs-6">Instructions:</span> ${ins}
                                </p>
                                <p class="card-text">
                                    <span class="fw-bold fs-6">Type:</span> ${food.cuisine}
                                </p>
                            </div>
                        </div>
                    </div>
            `;
    });
}    
document.getElementById('searchR').addEventListener('input',(e)=>{
    let searchstr=e.target.value;
    let da=datar.filter((product)=>{
        if(product.cuisine.toLowerCase().includes(searchstr.toLowerCase())){
            return product;
        }else if(product.name.toLowerCase().includes(searchstr.toLowerCase())){
            return product;
        }
    });
    addrecipe(da);
});
// recipe End
// Add Recipe Start
let arr = JSON.parse(localStorage.getItem('List2')) || [];
let obj = {};
let editidx = null;
let eachdata = document.querySelectorAll('input');
let submit = document.getElementById('submit');
let text = document.querySelector('textarea');
let userlist = document.querySelector('.userlist');
eachdata.forEach((input) => {
    input.addEventListener('input', (e) => {
        let { name, value } = e.target;
        obj = { ...obj, [name]: value };
    });
});
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (editidx == null) {
        arr.push({ ...obj, id: Date.now() });
    } else {
        arr = arr.map((product) => {
            if (product.id == editidx) {
                return { ...product, ...obj };
            }
            return product;
        });
        editidx = null;
    }
    adding();
    localStorage.setItem('List2', JSON.stringify(arr));
    eachdata.forEach((input) => {
        input.value = '';
    });
    alert("Recipe Added Succssfully");
});
function adding() {
    userlist.innerHTML = '';
    arr.forEach((item, index) => {
        let col = document.createElement('div');
        col.classList.add("col-6");
        col.innerHTML += `
            <div class="card">
                <img src="https://cdn.dummyjson.com/recipe-images/1.webp" class="card-img-top" alt="..." style="height: 300px;">
                <div class="card-body">
                    <h4 class="card-title">BY: ${item.name}</h4>
                    <h5 class="card-title">${item.Rname}</h5>
                    <span>
                       ${item.type}
                    </span>
                    <p class="card-text">
                        ${item.incredients}
                    </p>
                    <p class="card-text">
                        ${item.instructions}
                    </p>
                    <button class="btn btn-danger" onclick="handleDelete(${index})">Delete</button>
                    <button class="btn btn-outline-success ms-2 edit-btn" data-idx="${index}" data-bs-toggle="modal" data-bs-target="#examplemodal" onclick="change(${index});">Edit</button>
                </div>
            </div>
        `
        userlist.appendChild(col);
    });
}
function change(idx) {
    document.getElementById('nname').value = arr[idx].name;
    document.getElementById('nRname').value = arr[idx].Rname;
    document.getElementById('nincredients').value = arr[idx].incredients;
    document.getElementById('ntype').value = arr[idx].type;
    document.getElementById('ninstructions').value = arr[idx].instructions;
    document.getElementById('nimg').value = arr[idx].img;
    document.querySelector('.modal-footer').innerHTML=`
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="updatebtn" onclick="upchange(${idx});">Update</button>
    `;
}
function upchange(idx){
    arr[idx].name=document.getElementById('nname').value;
    arr[idx].Rname=document.getElementById('nRname').value;
    arr[idx].incredients=document.getElementById('nincredients').value;
    arr[idx].type=document.getElementById('ntype').value;
    arr[idx].instructions=document.getElementById('ninstructions').value;
    arr[idx].img=document.getElementById('nimg').value;
    document.querySelector('.modal-footer').innerHTML='';
    adding();
}
const handleDelete = (index) => {
    arr.splice(index, 1);
    localStorage.setItem('List2', JSON.stringify(arr));
    adding();
};
adding();
// Add Recipe End