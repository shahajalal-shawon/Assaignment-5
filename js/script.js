const allBtn = document.getElementsByClassName('all-btn');
let seatCount = 0;
let totalSeat = 40;
let pricePerSeat = 0;
const price = 550;
 
for( const btn of allBtn){
    btn.addEventListener("click", function(e) {
        seatCount = seatCount + 1;
        totalSeat = totalSeat - 1;
        pricePerSeat = pricePerSeat + 550;
        setInnerText("seat_added", seatCount);
        setInnerText("seat_left", totalSeat);
        const currentSeat = btn.innerText;
        console.log(currentSeat, pricePerSeat);

        const selectedSeat = document.getElementById("Selected-seat");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = currentSeat;
        const p2 = document.createElement("p");
        p2.innerText = price;
        li.appendChild(p)
        li.appendChild(p2)
        selectedSeat.appendChild(li);
        
    })
}


// utillity function
function setInnerText (elementId, value) {
    document.getElementById(elementId).innerText = value;
}

function setBackgroundColor (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-600')
}