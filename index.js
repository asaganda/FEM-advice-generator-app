let adviceBtn = document.querySelector("button");
adviceBtn.addEventListener("click", adviceGenerator);

const url = 'https://api.adviceslip.com/advice';


function adviceGenerator() {
    fetch(url)
    .then(response => response.json())
    .then(data => displayAdvice(data))
    .catch(error => console.log(error))
}

function displayAdvice(data){
    let adviceData = data.slip;
    
    document.querySelector(".advice_number").textContent = "Advice #" + adviceData.id;
    document.querySelector(".advice_content").textContent = "\"" + adviceData.advice + "\"";
}

window.addEventListener("load", adviceGenerator);