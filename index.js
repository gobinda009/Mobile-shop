
const input = document.getElementById("searchResult");
const searchBtn = document.querySelector(".search");


let inputData = 13;

async function display(){
    inputData = input.value;
    const url = 'https://openapi.programming-hero.com/api/phones?search=${inputData}';

    const response = await fetch(url);
    const data = await response.json();
    
}