// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
    ];


let mainEl = document.querySelector('main')
console.log(mainEl)

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = '<h1>DOM Manipulation</h1>'

mainEl.classList.add('flex-ctr')

let topMenuEl = document.getElementById('top-menu')

console.log(topMenuEl)

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around')

// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

menuLinks.forEach((link) => {
    console.log(link)


let newLink = document.createElement('a')

newLink.setAttribute('href' , link.href);

newLink.textContent = link.text;

console.log(newLink)

topMenuEl.appendChild(newLink)

})
