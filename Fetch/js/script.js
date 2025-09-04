let url = 'https://dog.ceo/api/breeds/image/random';
let dogimg = document.getElementById('dog-img');
let loader = document.querySelector('.loader');
let loaderspan = document.querySelector('.loader span');
loader.style.display = 'none';
const FetchDogApi = () => {
    loader.style.display = 'block';
    dogimg.style.display = 'none';
    loaderspan.innerText = '';
    setTimeout(() => {
        fetch(url)
            .then((res) => {
                return res.json(0);
            })
            .then((data) => {
                console.log(data);
                loader.style.display = 'none';
                dogimg.style.display = 'block';
                dogimg.src = data.message;
            })
            .catch((error) => {
                console.error(error.message);
            })
    }, 2000);
    const dot = setInterval(() => {
        loaderspan.innerText += '.';
    }, 500);
    setTimeout(() => {
        clearInterval(dot);
    }, 2000)
}