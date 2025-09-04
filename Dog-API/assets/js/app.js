let breeds = document.getElementById("breeds");
let dogImg = document.getElementById("dog-img");
let data;
let referenceImageId;
let age;
const fetchApi = async () => {
    try {
        let breed = breeds.value;     
        data.forEach((val)=>{
            if(val.name==breed){                           
                referenceImageId=val.reference_image_id;  
                age=val.life_span;                        
            }
        });       
        dogImg.src = `https://cdn2.thedogapi.com/images/${referenceImageId}.jpg`;
        document.getElementById('fetchedname').innerText = breeds.value;
        document.getElementById('fetchedage').innerText=age;
    } catch (error) {
        console.log(error);
    }
};
const breedsApi = async () => {
    try {
        let res = await fetch("https://api.thedogapi.com/v1/breeds");
        data = await res.json();      
        data.forEach((value, index) => {
            let option = document.createElement("option");
            option.value = value.name;
            option.innerText = value.name;
            breeds.append(option);
        });
        fetchApi();
    } catch (error) {
        console.log(error.message);
    }
};
const selectOption = (data) => {

};

breedsApi();