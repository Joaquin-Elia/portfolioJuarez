'use strict'

// variables
const projectsGallery = document.querySelector('#gallery');
const lightbox = document.querySelector('.lightbox');
const bigImage = document.querySelector('.expanded-img');
const closeBtn = document.querySelector('.btn-close');

const closeBtnHandler = () => lightbox.classList.remove('isActive')

// Shuffle an array randomly
const shuffleArray = (array) => {
    array.forEach(index => {
        // Generate a random index within the valid range
        const randomIndex = Math.floor(Math.random() * (index + 1));

        // Swap the elements at the current and random indeces
        // Destructuring assignment. 
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    });
}

const projects = [
        'projectOne.png', 'projectTwo.gif', 'projectThree.gif', 'projectFour.png', 
        'projectFive.png', 'projectSix.png', 'projectSeven.gif', 'projectEight.gif',
        'projectNine.gif', 'projectTen.gif', 'projectEleven.gif', 'projectTwelve.gif',
        'projectThirteen.gif', 'projectFourteen.gif', 'projectFifteen.gif', 'projectSixteen.gif'
    ];

shuffleArray(projects);

let imageElements = projects.map(img => `<img class="projects-images" src="./assets/${img}" loading="lazy">`)

projectsGallery.innerHTML += imageElements.join('');

// selecting imgs after loading
const imgList = document.querySelectorAll('.projects-images');

const imgListHandler = index => {
    lightbox.classList.add('isActive');
    bigImage.src = imgList[index].src
}

imgList.forEach((img, i) => {
    imgList[i].addEventListener('pointerup', () => 
        imgListHandler(i));

    let rotation = Math.random() * 12 - 6;
    img.style.setProperty('--rotation', `${rotation.toFixed(2)}deg`);
    img.classList.add('rotated');
});

// close lightbox
closeBtn.addEventListener('pointerup', closeBtnHandler);

lightbox.addEventListener('pointerup', e => {
    if (e.target !== bigImage)
        return closeBtnHandler();
})
