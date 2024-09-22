// Menu data structure

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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

let subMenuEl = document.getElementById('sub-menu')

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.classList.add('flex-around')

let topMenuLinks = document.getElementsByName('menuLinks')

topMenuEl.addEventListener("click" , function (){
    preventDefault()
} )

