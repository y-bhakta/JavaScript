fetch('https://api.rootnet.in/covid19-in/stats/latest')
    .then(res => { return res.json() })
    .then((data) => {
        let statsdata = data.data.regional;
        console.log(data);
        states(statsdata);
        let sum = data.data.summary;
        document.querySelector('#totalcases').innerText = sum.total.toLocaleString();
        document.querySelector('#discharge').innerText = sum.discharged.toLocaleString();
        document.querySelector('#death').innerText = sum.deaths.toLocaleString();
        document.querySelector('#statelist').addEventListener('change', (e) => {
            let location = document.getElementById('location');
            let total = document.getElementById('total');
            let totaldeath = document.getElementById('totaldeath');
            let totaldischarge = document.getElementById('totaldischarge');
            let value = e.target.value;            
            data.data.regional.forEach((el) => {
                if (el.loc == value) {
                    location.innerText = el.loc;
                    total.innerText = el.totalConfirmed.toLocaleString();
                    totaldeath.innerText = el.deaths.toLocaleString();
                    totaldischarge.innerText = el.discharged.toLocaleString();
                }
            });
        });
    })
    .catch((error) => {
        console.log(error);
    })
let select;
function states(statsdata) {
    statsdata.forEach((el) => {
        let option = document.createElement('option');
        option.value = el.loc;
        option.innerText = el.loc;
        select = document.getElementById('statelist');
        select.append(option);
    });
}
