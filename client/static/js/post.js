const newPost = document.querySelector('#form-create')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#pseudonym')
const thoughtsInput = document.querySelector('#entry')

newPost.addEventListener('submit',makeAPost )
async function makeAPost(e){
    e.preventDefault();
    try {
        const entryData = {
            title: e.target.title.value,
            pseudonym: e.target.pseudonym.value,
            content: e.target.entry.value
        }
        const options = {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(entryData)
        }
        await fetch(`http://localhost:3000/posts`, options)
        .then(res => res.json())
        .then(submitPost)
    } catch (err) {
        console.warn(err);
    }

}

function submitPost(){
    console.log('post submitted')
    titleInput.value = '';
    authorInput.value = '';
    thoughtsInput.value = '';

}
