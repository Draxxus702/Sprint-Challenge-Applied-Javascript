// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerArray = ['SMARCH 28, 2019', 'Lambda Times', '98°']

const headerContainer = document.querySelector('.header-container')

function Header(item1, item2, item3) {
    const headerDiv = document.createElement('div')
    const headerSpan = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerSpan2 = document.createElement('span')


    headerSpan.textcontent = item1
    headerTitle.textContent = item2
    headerSpan2.textContent = item3

    headerDiv.classList.add('header')
    headerSpan.classList.add('date')
    headerSpan2.classList.add('temp')

    headerContainer.append(headerDiv)
    headerDiv.append(headerSpan)
    headerDiv.append(headerTitle)
    headerDiv.append(headerSpan2)


    return Header
}

Header(headerArray[0], headerArray[1], headerArray[2])