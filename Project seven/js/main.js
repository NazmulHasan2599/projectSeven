// Navbar show

const navToggle = document.querySelector('.nav__toggle');
const navBar = document.querySelector('.navbar');

navToggle.addEventListener('click', ()=>{
    navBar.classList.toggle('show');
})

// Active Class


const resumeHeading = document.querySelector('.resume__heading');
const resumeCards = document.querySelectorAll('.resume__card');

resumeHeading.addEventListener('click', (e) => {
    e.preventDefault();
    let clickedItemId = e.target.dataset.id;

    if (clickedItemId) {
        // Ensure there's an element with the 'active' class before removing it
        const activeElement = resumeHeading.querySelector('.active');
        if (activeElement) {
            activeElement.classList.remove('active');
        }
        e.target.classList.add('active');
    }

    // Remove 'active' class from all resume cards
    resumeCards.forEach((card) => {
        card.classList.remove('active');
    });

    // Add 'active' class to the corresponding card if it exists
    const correspondingCard = document.getElementById(clickedItemId);
    if (correspondingCard) {
        correspondingCard.classList.add('active');
    }
});


// Project section active class

const projectFilter = document.querySelector('.portfolio__filter__nav')
const galaryItem = document.querySelectorAll('.portfolio__item')

projectFilter.addEventListener('click', (e)=>{
    e.preventDefault()

    const filterValue = e.target.getAttribute('data-id')
    const activeFilter = projectFilter.querySelector('.active')

    if(activeFilter){
        activeFilter.classList.remove('active')
    }
    e.target.classList.add('active')

    galaryItem.forEach((item) =>{
        if(item.classList.contains(filterValue) || filterValue === 'all'){
            item.classList.remove('hide')
            item.classList.add('show')
        }else{
            item.classList.remove('show')
            item.classList.add('hide')
        }

    })
})

