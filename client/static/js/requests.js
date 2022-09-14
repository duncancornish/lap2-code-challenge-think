const cardssection = document.querySelector('#cards')
const header = document.querySelector('h1')

addEventListener('load', getAll())

async function getAll(){
    try {
        await fetch(`http://localhost:3000/posts`)
        .then(res => res.json())
        .then(renderAllCards)
    } catch (err) {
        console.warn(err);
    }
}



function renderAllCards(data) {
    console.log(data[1])
    let divs = [];
    

    data.forEach(element => {
        const title = document.createElement('h2')
        title.textContent = element.title
        title.setAttribute('class', 'title-card')
        const div = document.createElement('div')
        div.setAttribute('class', 'card-div')
        div.setAttribute('id', element.id)
        const pseudonym = document.createElement('p')
        pseudonym.setAttribute('class', 'pseudonym-card')
        pseudonym.textContent = element.pseudonym
        const content = document.createElement('p')
        content.setAttribute('class', 'content-card')
        content.textContent = element.content

        div.append(title)
        div.append(pseudonym)
        div.append(content)
        divs.push(div)
    });

    divs.forEach(div => {
        cardssection.append(div)
    })
    

    let cardHolders = document.getElementsByClassName("card-div")
    console.log(cardHolders.length)

    
    
}

