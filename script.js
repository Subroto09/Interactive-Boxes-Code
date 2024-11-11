// script.js
function updatePrice(unitCount) {
    let price;
    switch (unitCount) {
        case 1:
            price = "$10.00 USD";
            break;
        case 2:
            price = "$18.00 USD";
            break;
        case 3:
            price = "$24.00 USD";
            break;
    }
    document.getElementById("total").innerText = price;
}

function toggleOptions(unit) {
    const options1 = document.getElementById("options1");
    const options2 = document.getElementById("options2");
    const options3 = document.getElementById("options3");

    // Reset both options sections first
    options1.classList.remove("expanded");
    options2.classList.remove("expanded");
    options3.classList.remove("expanded");

    // Expand only the selected unit's options
    if (unit === 1) 
    {
        options1.classList.add("expanded");
    }
    else if (unit === 2) 
    {
        options2.classList.add("expanded");
    } 
    else if (unit === 3) 
    {
        options3.classList.add("expanded");
    }
}
