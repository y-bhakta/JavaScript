let investValue = document.getElementById("invest-value");
let investRange = document.getElementById("invest-range");
let RateValue = document.getElementById("rate-value");
let RateRange = document.getElementById("rate-range");
let TimeValue = document.getElementById("time-value");
let TimeRange = document.getElementById("time-range");
let invest_amount = document.getElementById("invest-amount");
let est_return = document.getElementById("est-return");
let total_val = document.getElementById("total-val");

investRange.value = 2500;
RateRange.value = 12;
TimeRange.value = 10;

investValue.value = investRange.value;
RateValue.value = RateRange.value;
TimeValue.value = TimeRange.value;

const Value = () =>{
  investRange.value=investValue.value;
  RateRange.value=RateValue.value;
  TimeRange.value=TimeValue.value;
  SIP();
}
const Range = () =>{
  investValue.value=investRange.value;
  RateValue.value=RateRange.value;
  TimeValue.value=TimeRange.value;
  SIP();
}

const SIP = () => {
  const amount=parseFloat(investValue.value);
  const estrtn=parseFloat(RateValue.value);
  const year=parseFloat(TimeValue.value);
  const investment=amount*12*year;
  const totalestrtn=(amount*12)*(estrtn/100);

  invest_amount.innerText="₹"+investment.toLocaleString("en-IN",{maximumFractionDigits:0});
  est_return.innerText="₹"+(totalestrtn*year).toLocaleString("en-IN",{maximumFractionDigits:0});
  total_val.innerText="₹"+(investment + (totalestrtn*year)).toLocaleString("en-IN",{maximumFractionDigits:0});

}

SIP();