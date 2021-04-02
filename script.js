//default is discord
let serviceepoch = 1420070400000
document.getElementById("discord").classList.add("selected");
function changeservice(servicename){
  console.log("changing to "+servicename)
  switch (servicename){
      case 'discord':
        serviceepoch = 1420070400000;
        document.getElementById("discord").classList.add("selected");
        document.getElementById("twitter").classList.remove("selected");
        document.getElementById("hiven").classList.remove("selected");

        break;
      case 'hiven':
        serviceepoch = 1562544000000;
        document.getElementById("hiven").classList.add("selected");
        document.getElementById("twitter").classList.remove("selected");
        document.getElementById("discord").classList.remove("selected");
        break;
      case 'twitter':
        serviceepoch = 1288834974657;
        document.getElementById("twitter").classList.add("selected");
        document.getElementById("discord").classList.remove("selected");
        document.getElementById("hiven").classList.remove("selected");
        break;
  }
var event = new Event('input');
inputOne.dispatchEvent(event);
  inputTwo.dispatchEvent(event);

    console.log(serviceepoch)
}

// form bottom border color
let inputOne = document.querySelectorAll("form input")[0];
let inputTwo = document.querySelectorAll("form input")[1];

inputOne.addEventListener("focus", function(e) {
  document
    .querySelectorAll(".ripple-line")[0]
    .classList.add("ripple-line-active");
});

inputTwo.addEventListener("focus", function(e) {
  document
    .querySelectorAll(".ripple-line")[1]
    .classList.add("ripple-line-active");
});

inputOne.addEventListener("blur", function(e) {
  document
    .querySelectorAll(".ripple-line")[0]
    .classList.remove("ripple-line-active");
});

inputTwo.addEventListener("blur", function(e) {
  document
    .querySelectorAll(".ripple-line")[1]
    .classList.remove("ripple-line-active");
});

// result box

function isNumeric(value) {
  return /^\d+$/.test(value);
}

inputOne.addEventListener("input", function(e) {
  let value = inputOne.value;
  if (value == "") {
    document.querySelectorAll(".result")[0].style.display = "none";
    document.querySelectorAll(".trophy")[0].style.display = "none";
  } else {
    if (isNumeric(value)) {
      document.querySelectorAll(".result")[0].style.display = "flex";
      if (value.length == 18) {
        document.querySelectorAll(
          ".result"
        )[0].childNodes[3].innerHTML = makePretty(getDate(inputOne.value));
        document.querySelectorAll(
          ".result"
        )[0].childNodes[7].innerHTML = makePrettyUTC(getDate(inputOne.value));
        document.querySelectorAll(
          ".result"
        )[0].childNodes[11].innerHTML = getUnixTimestamp(
          getDate(inputOne.value)
        );
        if (getDate(inputOne.value) < getDate(inputTwo.value)) {
          let diffdate = formatDiff(
            getDiff(getDate(inputOne.value), getDate(inputTwo.value))
          );
          document.querySelectorAll(".trophy")[0].style.display =
            "inline-block";
          document.querySelectorAll(".trophy small")[0].textContent = diffdate;
          document.querySelectorAll(".trophy")[1].style.display = "none";
        } else if (getDate(inputOne.value) > getDate(inputTwo.value)) {
          let diffdate = formatDiff(
            getDiff(getDate(inputOne.value), getDate(inputTwo.value))
          );
          document.querySelectorAll(".trophy")[1].style.display =
            "inline-block";
          document.querySelectorAll(".trophy small")[1].textContent = diffdate;
          document.querySelectorAll(".trophy")[1].style.display = "none";
        } else {
          console.log("clearing dates 1");
          document.querySelectorAll(".trophy")[1].style.display = "none";
          document.querySelectorAll(".trophy")[0].style.display = "none";
        }
        inputTwo.focus();
      }
    } else {
      document.querySelectorAll(".result")[0].style.display = "none";
    }
  }
});

inputTwo.addEventListener("input", function(e) {
  let value = inputTwo.value;
  if (value == "") {
    document.querySelectorAll(".result")[1].style.display = "none";
    document.querySelectorAll(".trophy")[1].style.display = "none";
  } else {
    if (isNumeric(value)) {
      if (value.length == 18) {
        console.log("test");

        document.querySelectorAll(".result")[1].style.display = "flex";
        //fill in data
        inputTwo.blur();
        document.querySelectorAll(
          ".result"
        )[1].childNodes[3].innerHTML = makePretty(getDate(inputTwo.value));
        document.querySelectorAll(
          ".result"
        )[1].childNodes[7].innerHTML = makePrettyUTC(getDate(inputTwo.value));
        document.querySelectorAll(
          ".result"
        )[1].childNodes[11].innerHTML = getUnixTimestamp(
          getDate(inputTwo.value)
        );
        //display trophy
        if (getDate(inputOne.value) < getDate(inputTwo.value)) {
          let diffdate = formatDiff(
            getDiff(getDate(inputOne.value), getDate(inputTwo.value))
          );
          document.querySelectorAll(".trophy")[0].style.display =
            "inline-block";
          document.querySelectorAll(".trophy small")[0].textContent = diffdate;
          document.querySelectorAll(".trophy")[1].style.display = "none";
        } else if (getDate(inputOne.value) > getDate(inputTwo.value)) {
          console.log();
          let diffdate = formatDiff(
            getDiff(getDate(inputOne.value), getDate(inputTwo.value))
          );
          document.querySelectorAll(".trophy")[1].style.display =
            "inline-block";
          document.querySelectorAll(".trophy small")[1].textContent = diffdate;
          document.querySelectorAll(".trophy")[0].style.display = "none";
        } else {
          console.log("clearing dates 2");
          document.querySelectorAll(".trophy")[1].style.display = "none";
          document.querySelectorAll(".trophy")[0].style.display = "none";
        }
      }
    } else {
      document.querySelectorAll(".result")[1].style.display = "none";
    }
  }
});
function getDate(id) {
  const idint = BigInt.asUintN(64, id);
  const binarydate = Number(idint >> 22n);
  return new Date(binarydate + serviceepoch);
}
function makePretty(date) {
  return (
    `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ` +
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",

      hour12: true
    })
  );
}
function makePrettyUTC(date) {
  return (
    `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ` +
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",

      hour12: true,
      timeZone: "UTC"
    })
  );
}
function getUnixTimestamp(date) {
  return date.getTime() / 1000;
}
function getDiff(date1, date2) {
  return Math.abs(date1 - date2);
}

function formatDiff(ms) {
  let seconds = ms / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;
  const msexcess = Math.floor(ms % 1000);

  const humanized = `${Math.floor(days)}d ${Math.floor(
    hours % 24
  )}h ${Math.floor(minutes % 60)}m ${Math.floor(seconds % 60)}s ${msexcess}ms`;

  return humanized;
}
