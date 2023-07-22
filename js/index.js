'use strict'

// variables
const projectsGallery = document.querySelector('#gallery');
const lightbox = document.querySelector('.lightbox');
const bigImage = document.querySelector('.expanded-img');
const closeBtn = document.querySelector('.btn-close');
const email = document.querySelector('#email');
const error = document.querySelector('#form-error');


const closeBtnHandler = () => lightbox.classList.remove('isActive')

// Shuffle an array randomly
const shuffleArray = (array) => {
    array.forEach((element, index) => {
        // Generate a random index within the valid range
        const randomIndex = Math.floor(Math.random() * (index + 1));

        // Swap the elements at the current and random indeces
        // Destructuring assignment. 
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    });
}

const projects = [
        'project1.gif', 'project2.gif', 'project3.gif', 'project4.gif', 
        'project5.gif', 'project6.gif', 'project7.gif', 'project8.gif',
        'project9.gif', 'project10.gif', 'project11.gif', 'project12.gif',
        'project13.webp', 'project14.webp', 'project15.webp', 'project16.webp'
    ];

shuffleArray(projects);

let imageElements = projects.map((img, i) => `<img class="projects-images" src="./assets/${img}" loading="lazy" alt="Proyecto diseño ${i + 1}">`)

projectsGallery.innerHTML += imageElements.join('');

// selecting imgs after loading
const imgList = document.querySelectorAll('.projects-images');

const imgListHandler = index => {
    lightbox.classList.add('isActive');
    bigImage.src = imgList[index].src
    bigImage.alt = imgList[index].alt
}

imgList.forEach((img, i) => {
    imgList[i].addEventListener('click', () => 
        imgListHandler(i));

    let rotation = Math.random() * 12 - 6;
    img.style.setProperty('--rotation', `${rotation.toFixed(2)}deg`);
    img.classList.add('rotated');
});

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName == 'IMG') {
      e.preventDefault();
    }
});

// close lightbox
closeBtn.addEventListener('click', closeBtnHandler);

lightbox.addEventListener('click', e => {
    if (e.target !== bigImage)
        return closeBtnHandler();
})


document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if(!regexEmail.test(email.value)) {
        error.innerHTML += 'El email no es válido'
    }
    else {
        form.submit()
    }
});