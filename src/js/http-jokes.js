//  Joke Requests


const urlJokes = 'https://api.chucknorris.io/jokes/random';


const getJoke = async() => {

    try{

        const resp = await fetch( urlJokes );

        if( !resp.ok ) throw 'No se puede realizar peticion';

        const { icon_url, value } = await resp.json();

        return { icon_url, value };

    }catch( err ){

        throw err;
    }

}

export {
    getJoke
}