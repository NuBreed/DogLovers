// basic
const toggleBtn = document.querySelector('.toggle-bar')

const navbar = document.querySelector('.nav-links')
const featured = document.querySelector('.featured-section')

toggleBtn.addEventListener('click', function() {
    navbar.classList.toggle('show')
    toggleBtn.style.scale = '2'
})
const year = new Date().getFullYear()
const currentYear = document.querySelector('.year')
currentYear.textContent = year

// back to top
const backToTop = document.querySelector('.back-to-top-btn')
backToTop.addEventListener('click', function() {
    document.documentElement.scrollTop = 0
})

// imports

import fetchedData from './fetchedData.js'
import paginate from './paginate.js'
import displayData from './displayData.js'

const btnContainer = document.querySelector('.btn-container')

let index = 0
let pages = []
const setupUI = () => {
    displayData(pages[index])
    displayButtons(btnContainer, pages, index)
}
const displayButtons = (container, pages, activeIndex) => {
    let buttons = pages.map((_, pageIndex) => {
            return `<button class="btn page-btn ${
      activeIndex === pageIndex ? 'active-btn' : 'null'
    }" data-index="${pageIndex}">${pageIndex + 1}
    
    </button>`
        })
        // buttons.push('<button class="next-btn page-btn btn">next</button>')
        // buttons.unshift('<button class="prev-btn page-btn btn">prev</button>')
    container.innerHTML = buttons.join('')
}
const init = async() => {
    const dogs = await fetchedData()
    pages = paginate(dogs)
    setupUI()
}

btnContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-container')) return
    if (e.target.classList.contains('page-btn')) {
        index = parseInt(e.target.dataset.index)
    }

    setupUI()
})

window.addEventListener('load', init)