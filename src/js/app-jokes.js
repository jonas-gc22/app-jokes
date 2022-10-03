// App JOkes 
import { getJoke } from './http-jokes'

const body = document.body;

let btnOtro, olList;


const createJokes = () => {

    const html = `

        <h1 class="mt-5 text-center">Joke Time</h1>
        <br>

        <button class="btn btn-primary">Another Joke</button>
        <br>

        <ol class="mt-2 list-group"></ol>  

        <footer class="mt-10 text-center">
            All rights reserved &COPY;Jonás García
        </footer>

    `

    const divJokes = document.createElement('divJokes');
    divJokes.innerHTML = html;

    body.append( divJokes );

} 

// Event Genral 

const event = () => {

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {

        btnOtro.disabled = true;

        drawJoke( await getJoke() );

        btnOtro.disabled = false;

    });

}

const drawJoke = ( joke ) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b> ${ joke.value } </b>`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
}



export const init = () => {

    createJokes(),
    event()
}