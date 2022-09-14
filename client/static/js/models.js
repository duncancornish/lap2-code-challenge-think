const cardssection = document.querySelector('#cards')
const header = documnet.querySelector('h1')

function renderAllCards(data) {
    const divs = [];

    data.array.forEach(element => {
        const title = document.createElement('h2')
        title.textContent = element.title
        const div = document.createElement('div')
        div.setAttribute('id', element.id)
        const pseudonym = document.createElement('p')
        pseudonym.textContent = element.pseudonym
        const content = document.createElement('p')
        content.textContent = element.content

        div.append(title)
        div.append(pseudonym)
        div.append(content)
        divs.push(div)
    });

    header.append(divs)

    
    
}