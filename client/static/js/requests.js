const cardssection = document.querySelector('#cards')
const header = document.querySelector('h1')

addEventListener('load', getAll())

async function getAll(){
    try {
        const response = await fetch(`http://localhost:3000/posts`);
        const data = await response.json()
        renderAllCards(data)
    } catch (err) {
        console.log('not working')
        console.warn(err);
    }
}


function renderAllCards(data) {
    
    var divs = [];
    

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