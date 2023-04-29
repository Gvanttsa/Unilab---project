// burger bar 
let navigation = document.getElementById('navbarlinks');
let toggleButton = document.getElementById('toggleButton');
let firstLine = document.getElementById('burger1');
let secondLine = document.getElementById('burger2');
let thirdLine = document.getElementById('burger3');

toggleButton.addEventListener('click', function() {
    navigation.classList.toggle('avtivenav');
    firstLine.classList.toggle('activeLine1');
    secondLine.classList.toggle('activeLine2');
    thirdLine.classList.toggle('activeLine3');
});


//slider
// function getImages() {
//     let requist = new XMLHttpRequest();
//     requist.addEventListener('load', render);

//     requist.open('GET', 'https://jsonplaceholder.typicode.com/photos');
//     requist.send();
// }


// function render() {
//     let response = this.responseText;
//     let responseData = JSON.parse(response);

//     responseData.forEach(element => {
//         createPOst(element);
//     });

//     console.log(responseData);
// }
// getImages();

// function createPOst(item) {
//     let imgTag = document.createElement('img');
//     imgTag.src = item.url;
//     imgTag.classList.add('img-s')
//     document.getElementById('api-user').appendChild(imgTag);
// }



