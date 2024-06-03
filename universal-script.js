//This is the page for all the JS script for the Westec website!


//side nav overlay functions
function openSideNav(){
    document.getElementById("sideNavOpen").style.display = "none";
    
    document.getElementById("sideNavClose").style.display = "block";
    
    document.getElementById("mySideNav").style.width = "390px";
}

function closeSideNav(){
    document.getElementById("sideNavOpen").style.display = "block";
    
    document.getElementById("sideNavClose").style.display = "none";
    
    document.getElementById("mySideNav").style.width = "0";
}

//A key value pair array used to hold all the items of the site
const products = [

    {
        qtyId: 1,
        shortName: "Sansai Speaker",
        longName: "SANSAI 20W TWS BLUETOOTH SPEAKER WITH LED LIGHTS",
        price: 84.70,
        category: "Speakers",
        brand: "Sansai"
    },
    {
        qtyId: 2,
        shortName: "Denon Speaker",
        longName: "DENON HOME 150 WIRELESS HEOS BLUETOOTH SPEAKER",
        price: 280.00,
        category: "Speakers",
        brand: "Denon"
    },
    {
        qtyId: 3,
        shortName: "Mcdodo Cable",
        longName: "MCDODO 100W 5A USB-C TO USB-C HIGH SPEED LEAD - 1.2M",
        price: 24.00,
        category: "Cables",
        brand: "Mcdodo"
    },
    {
        qtyId: 4,
        shortName: "Mcdodo Charger",
        longName: "MCDODO 3A RIGHT ANGLE USB TO RIGHT ANGLE LIGHTNING LEAD - 3M",
        price: 24.00,
        category: "Chargers",
        brand: "Mcdodo"
    },
    {
        qtyId: 5,
        shortName: "Tp-Link Port",
        longName: "TP-LINK 5 PORT NETWORK SWITCH HUB",
        price: 22.00,
        category: "Ports",
        brand: "Tp-Link"
    },
    {
        qtyId: 6,
        shortName: "Sansai Remote",
        longName: "SANSAI 8 IN 1 UNIVERSAL REMOTE CONTROL WITH LEARNING FUNCTION",
        price: 26.95,
        category: "Remotes",
        brand: "Sansai"
    },
    {
        qtyId: 7,
        shortName: "Sonken Microphone",
        longName: "SONKEN 2CH WIRELESS MICROPHONE RECEIVER WITH 2 MICS INCLUDED",
        price: 400.00,
        category: "Microphones",
        brand: "Sonken"
    },
    {
        qtyId: 8,
        shortName: "Koss Headset",
        longName: "KOSS BUDGET ON EAR STEREO HEADPHONES - BLACK",
        price: 70.00,
        category: "Headsets",
        brand: "Koss"
    },
    {
        qtyId: 9,
        shortName: "Westec Headset",
        longName: "WESTEC KIDS 85DB RECHARGEABLE BLUETOOTH HEADPHONES - PURPLE",
        price: 59.00,
        category: "Headsets",
        brand: "Westec"
    },
    {
        qtyId: 10,
        shortName: "Mcdodo Power Bank",
        longName: "MCDODO 10,000MAH POWER BANK - 2x QC3.0 USB + 1x PD TYPE-C OUTPUTS",
        price: 39.00,
        category: "Chargers",
        brand: "Mcdodo"
    }
];

let priceMinVal = 0;
let priceMaxVal = 500;
let itemsDisplayed = [];
let searchBar;

document.addEventListener("DOMContentLoaded", function() {

    itemsDisplayed = document.querySelectorAll(".item.cluster");
    searchBar = document.querySelector(".search-bar");

    
    searchBar.addEventListener("input", function(event){
        const userInput = event.target.value.trim().toLowerCase();
        itemsDisplayed.forEach(function(itemDisplayed){
            let itemTitle = itemDisplayed.querySelector('.item-title').innerHTML;
            if (itemTitle.trim().toLowerCase().includes(userInput)) {
                itemDisplayed.style.display = 'flex';
            }else{
                itemDisplayed.style.display = 'none';
            }
        });
    })

});


//PRODUCTS LIST page script

//Button for the products list page to show all the filters
function showFilters(){
    
    document.querySelector(".no-results-container").style.display = "none";
    
    items = document.querySelector('.items-container');
    search = document.querySelector('.filter-bar-search');
    sort = document.querySelector('.filter-bar-sort');
    filterButton = document.querySelector('.filter-bar-filter');
    backButton = document.querySelector('.back-button-container');
    filters = document.querySelector('.filters-container');

    items.style.display = 'none';
    search.style.display = 'none';
    sort.style.display = 'none';
    filterButton.style.display = 'none';
    backButton.style.display = 'flex';
    filters.style.display = 'flex';

    const rangeInput = document.querySelectorAll('.slider-range-input input');
    let priceMinText = document.getElementById('price-min');
    let priceMaxText = document.getElementById('price-max');
    progress = document.querySelector(".slider-body .slider-range");

    let priceGap = 20;

    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value);
            let maxVal = parseInt(rangeInput[1].value);
            priceMinVal = minVal;
            priceMaxVal = maxVal;

            if(maxVal - minVal < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal-priceGap;
                }else{
                    rangeInput[1].value = minVal+priceGap;
                }
            }else{
                priceMinText.innerHTML = minVal.toString();
                priceMaxText.innerHTML = maxVal.toString();
                progress.style.left = (minVal/rangeInput[0].max) * 100 + "%";
                progress.style.right = 100 - (maxVal/rangeInput[1].max) * 100 + "%";
            }
        });
    });
};


//Back button to close out of the filters and reshow the items
function showItems(){

    let categoryCheckboxes = document.getElementsByName("category");
    let brandCheckboxes = document.getElementsByName("brand");

    let checkedCategories = [], checkedBrands = [], itemsToDisplay = [];

    for(let i = 0; i<categoryCheckboxes.length; i++){
        if(categoryCheckboxes[i].checked){
            checkedCategories.push(categoryCheckboxes[i].value);
        }
    }

    for(let i = 0; i<brandCheckboxes.length; i++){
        if(brandCheckboxes[i].checked){
            checkedBrands.push(brandCheckboxes[i].value);
        }
    }

    for(let i = 0; i<checkedBrands.length; i++){
        for(let a = 0; a<products.length; a++){
            if(products[a].brand == checkedBrands[i]){
                itemsToDisplay.push(products[a].shortName);
            }
        }
    }

    for(let i = 0; i<checkedCategories.length; i++){
        loop1:
        for(let a = 0; a<products.length; a++){
            if(products[a].category == checkedCategories[i]){
                for(let u = 0; u<checkedBrands.length; u++){
                    if(products[a].brand !== checkedBrands[u]){
                        continue loop1;
                    }
                }
                for(let x = 0; x<itemsToDisplay.length; x++){
                    if(products[a].shortName == itemsToDisplay[x]){
                        continue loop1;
                    }else if(x == itemsToDisplay.length - 1 && products[a] !== itemsToDisplay[x]){
                        itemsToDisplay.push(products[a].shortName);
                    }
                }
            }
        }
    }

    loop2:
    for(let i = 0; i<itemsToDisplay.length; i++){
        for(let a = 0; a<products.length; a++){
            if(itemsToDisplay[i] == products[a].shortName){
                for(let x = 0; x<checkedCategories.length; x++){
                    if(products[a].category == checkedCategories[x]){
                        continue loop2; 
                    }
                    if(x == checkedCategories.length - 1){
                        itemsToDisplay.splice(i, 1);
                    }
                }
            }
        }
    }


    loop3:
    for(let i = 0; i<itemsToDisplay.length; i++){
        loop4:
        for(let a = 0; a<products.length; a++){
            if(itemsToDisplay[i] == products[a].shortName){
                if(products[a].price >= priceMinVal && products[a].price <= priceMaxVal){
                    continue loop3;
                }else{
                    itemsToDisplay.splice(i, 1);
                    i--;
                    break loop4;
                }
            }
        }
    }

    if(itemsToDisplay.length == 0){
        itemsDisplayed.forEach(function(itemDisplayed){
            itemDisplayed.style.display = 'none';
        })
        document.querySelector(".no-results-container").style.display = "flex";
    }else{
        document.querySelector(".no-results-container").style.display = "none";
        itemsDisplayed.forEach(function(itemDisplayed){
            let itemTitle = itemDisplayed.querySelector('.item-title').innerHTML;
            for(let i = 0; i<itemsToDisplay.length; i++){
                if (!itemsToDisplay.includes(itemTitle)) {
                    itemDisplayed.style.display = 'none';
                }else{
                    itemDisplayed.style.display = 'flex';
                }
            }
        });
    }



    items = document.querySelector('.items-container');
    search = document.querySelector('.filter-bar-search');
    sort = document.querySelector('.filter-bar-sort');
    filterButton = document.querySelector('.filter-bar-filter');
    backButton = document.querySelector('.back-button-container');
    filters = document.querySelector('.filters-container');

    items.style.display = 'grid';
    search.style.display = 'flex';
    sort.style.display = 'flex';
    filterButton.style.display = 'flex';
    backButton.style.display = 'none';
    filters.style.display = 'none';


};


//PRODUCT PAGE script

//image carousel
//code adapted from: https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
showSlides(slideIndex);

//next/previous image controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("item-container__img");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    for (i = 0; i < dots.length; i++){
        slides[i].style.display = "none";
    }
    
    for (i = 0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace(" active-img", "")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-img";
}


//description accordion --- idk what's wrong with this rn, will fix soon
//code adapted from: https://www.w3schools.com/howto/howto_js_accordion.asp
function openAccordion(){
    let accordion = document.getElementsByClassName("accordion");

    for (i = 0; i <accordion.length; i++){
        accordion[i].addEventListener("click", function(){
            this.classList.toggle("active-accordion");

            //toggles between showing and hiding the active panel
            let panel = this.nextElementSibling;

            if (panel.style.display === "block"){
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}


//Quantity button controls - this is used in product details pages and in the cart!
//code adapted from: https://codepen.io/ChynoDeluxe/pen/poyNEay
function addOne(id){

    let textID = "product-qty-" + id + "-value";
    let productQuantity = document.getElementById(textID);
    let qtyMin = parseInt(productQuantity.getAttribute("min"));
    let qtyMax = parseInt(productQuantity.getAttribute("max"));
    let qtyValue = parseInt(productQuantity.getAttribute("value"));

    if (qtyValue >= qtyMin && qtyValue <= qtyMax && (qtyValue + 1 >= qtyMin && qtyValue + 1 <= qtyMax)){
        qtyValue = qtyValue + 1;
        productQuantity.setAttribute("value", qtyValue.toString());
    }
}

function minusOne(id){
    let textID = "product-qty-" + id + "-value";
    let productQuantity = document.getElementById(textID);

    let qtyMin = parseInt(productQuantity.getAttribute("min"));
    let qtyMax = parseInt(productQuantity.getAttribute("max"));
    let qtyValue = parseInt(productQuantity.getAttribute("value"));

    if ((qtyValue >= qtyMin && qtyValue <= qtyMax) && (qtyValue - 1 >= qtyMin && qtyValue - 1 <= qtyMax)){
        qtyValue = qtyValue - 1;
        productQuantity.setAttribute("value", qtyValue.toString());
    }
}


//add to cart button
function addCart(){
    let addButton = document.getElementById("addBtn");

    if (addButton.innerHTML === "<a>Add to Cart</a>"){
        addButton.innerHTML = "<a>Added</a>";
        addButton.classList.replace("btn--primary", "btn--accent-3");
    } else {
        addButton.innerHTML = "<a>Add to Cart</a>";
        addButton.classList.replace("btn--accent-3", "btn--primary");
    }
}


//SHOPPING CART script

//delete cart item
function deleteItem(id){
    let cartID = "cartItem" + id;
    document.getElementById(cartID).remove();
}



//CHECKOUT PAGE script
//apply discount button
function applyDiscount(){
    let applyButton = document.getElementById("applyBtn");

    if (applyButton.innerHTML === "<a>Apply</a>"){
        applyButton.innerHTML = "<a>Applied</a>";
        applyButton.classList.replace("btn--primary", "btn--accent-3");
    } else {
        applyButton.innerHTML = "<a>Apply</a>";
        applyButton.classList.replace("btn--accent-3", "btn--primary");
    }
}

function swapCard(){
    let deliveryOption = document.getElementById("shippingOpt");

    if (deliveryOption.style.display === "none"){
        deliveryOption.style.display = "flex";
    } else {
        deliveryOption.style.display = "none";
    }
}