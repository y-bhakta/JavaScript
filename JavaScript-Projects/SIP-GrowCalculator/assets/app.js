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
  const P = parseFloat(investValue.value) || 0;
  const r = (parseFloat(RateValue.value) || 0) / 100 / 12;
  const n = (parseFloat(TimeValue.value) || 0) * 12;
  let totalInvest = P * n;
  let maturity = 0;
  if (r > 0 && n > 0) {
    maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  }
  let estReturn = maturity - totalInvest;
  invest_amount.innerText =
    "₹" +
    (totalInvest
      ? totalInvest.toLocaleString("en-IN", { maximumFractionDigits: 0 })
      : 0);
  est_return.innerText =
    "₹" +
    (estReturn > 0
      ? estReturn.toLocaleString("en-IN", { maximumFractionDigits: 0 })
      : 0);
  total_val.innerText =
    "₹" +
    (maturity > 0
      ? maturity.toLocaleString("en-IN", { maximumFractionDigits: 0 })
      : 0);
}

SIP();