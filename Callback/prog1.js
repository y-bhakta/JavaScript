setTimeout(()=>{
    console.log("Hello 1");  
    setTimeout(()=>{
        console.log("Hello 2");
        setTimeout(()=>{
            console.log("Hello 3");
        },1000);
    },1000);
},1000);