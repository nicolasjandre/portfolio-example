const projectWrapper = document.querySelector('.projects-wrapper')
const arrowPrev = document.querySelector('.arrow.prev')
const arrowNext = document.querySelector('.arrow.next')
const projectBounding = projectWrapper.getBoundingClientRect()
const imageAndLink = projectWrapper.querySelectorAll('img, a')
const widthToScroll = projectWrapper.children[0].offsetWidth
let clicked = false
let initPosition = 0
let currentScroll = 0

arrowPrev.onclick = function() {
    projectWrapper.scrollLeft -= widthToScroll
}

arrowNext.onclick = function() {
    projectWrapper.scrollLeft += widthToScroll
}

imageAndLink.forEach(item=> {
    item.setAttribute('draggable', false)
})

projectWrapper.onmousedown = function (e) {
    projectWrapper.classList.add('grab')
    initPosition = e.clientX - projectBounding.left
    currentScroll = projectWrapper.scrollLeft
    clicked = true
}

projectWrapper.onmousemove = function (e) {
    if (clicked) {
        const xPosition = e.clientX - projectBounding.left
        projectWrapper.scrollLeft = currentScroll + -(xPosition - initPosition)
    }
}

function mouseUpAndLeave() {
    projectWrapper.classList.remove('grab')
    clicked = false
}

projectWrapper.onmouseup = mouseUpAndLeave
projectWrapper.onmouseleave = mouseUpAndLeave

// BTN MOBILE

const btnMobile = document.getElementById('btnMobile')
const nav = document.querySelector('nav')

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu() {
    nav.classList.toggle('active')
}