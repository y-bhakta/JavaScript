let items=document.querySelectorAll('.slide-item');
let currentindex=0;
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let boxs=document.querySelectorAll('.box');
function removeactive(){
    items.forEach(item => item.classList.remove('active'));
    boxs.forEach(item => item.classList.remove('active2'));
}
const prevslide=()=>{
    currentindex=(currentindex - 1 + items.length) % items.length;
    removeactive();
    items[currentindex].classList.add('active');
    boxs[currentindex].classList.add('active2');
};
const nextslide=()=>{
    currentindex=(currentindex + 1) % items.length;
    removeactive();
    items[currentindex].classList.add('active');
    boxs[currentindex].classList.add('active2');
};
setInterval(nextslide,2000); 
// ----- Slider 2 Start -----
const slides2=document.querySelectorAll('.slide2');
var counter1=0;
let slide12=document.getElementById('slide12');
let width21=slide12.offsetWidth;
let prevbtn1=document.getElementById('prevbtn1');
let nextbtn2=document.getElementById('nextbtn2');
slides2.forEach((slide,index)=>{
    slide.style.left=`${index*width21}px`;
});
const slideimg1=()=>{
    slides2.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter1*width21}px)`;
    });
}
const gonext1=()=>{
    counter1++;
    if(counter1>=slides2.length){
        counter1=0;
    }
    slideimg1();
}
const goprev1=()=>{
    counter1--;
    if(counter1<0){
        counter1=slides2.length-1;
    }
    slideimg1();
}
// ----- Slider 2 End -----