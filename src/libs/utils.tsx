import {md5} from 'js-md5';

const API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts : string, privateKey : string, publicKey : string) => {
    return md5(ts + privateKey + publicKey).toString()
}

const fetchHeroes = async (value : string) => {
    
    let baseUrl = `${API_URL}/v1/public/characters`
    let ts : string = Date.now().toString()
    let privateKey : string = process.env.REACT_APP_PRIVATE_KEY ?? "";
    let publicKey : string = process.env.REACT_APP_PUBLIC_KEY ?? "";
    let hash = getHash(ts, privateKey, publicKey)

    let url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${value}`
    // "http://gateway.marvel.com/v1/public/characters?ts=1706834017341&apikey=f29634e066abe093eed8ffdd19284291&hash=a576f54fcfbbb8b11866eaae519845f8&nameStartsWith=a"

    try {
        console.log("dando fetch na API agora")
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json()
        console.log(data)
        return data
    } catch (err) {
        console.error("Erro no fetchHero", err)
        throw err
    }
}

const fetchHero = async (id : string) => {
    
    let baseUrl = `${API_URL}/v1/public/characters/${id}`
    let ts : string = Date.now().toString()
    let privateKey : string = process.env.REACT_APP_PRIVATE_KEY ?? "";
    let publicKey : string = process.env.REACT_APP_PUBLIC_KEY ?? "";
    let hash = getHash(ts, privateKey, publicKey)

    let url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    // "http://gateway.marvel.com/v1/public/characters?ts=1706838968766&apikey=f29634e066abe093eed8ffdd19284291&hash=8b45fc1a3b11cc2203759411627329d7&nameStartsWith=hulk"

    try {
        console.log("dando fetch na API agora")
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json()
        console.log(data)
        return data
    } catch (err) {
        console.error("Erro no fetchHero", err)
        throw err
    }
}


export {fetchHeroes, fetchHero}