let calculation = Math.floor(localStorage.getItem('total')/6000)

document.getElementById('progress-bar').innerText = calculation + " mins" 
document.getElementById('progress-bar').style.width = calculation + "%"

