console.log('hello world')

const message = document.querySelector('#message')

const addMovie = (evt) => {
    evt.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click',crossOffMovie) 
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click',deleteMovie);
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie);
    inputField.value = "";
    
}    
document.querySelector('form').addEventListener('submit', addMovie);


const deleteMovie = (evt) => {
    evt.target.parentNode.remove()
    message.textContent = 'movie deleted'
}

const crossOffMovie = (evt) => {
    evt.target.classList.toggle('checked')
    if(evt.target.classList.contains('checked') === true) {
    message.textContent = 'movie watched'
    } else {
        message.textContent = 'movie added back'
    }
}




