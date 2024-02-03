import {md5} from 'js-md5';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts : string, privateKey : string, publicKey : string) => {
    return md5(ts + privateKey + publicKey).toString()
}

const fetchHeroes = async (value: string, publicKey: string, privateKey: string) => {
    
    let baseUrl = `${API_URL}/v1/public/characters`
    let ts : string = Date.now().toString()
    let hash = getHash(ts, privateKey, publicKey)

    let url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${value}`
  
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if(data.data.count === 0) {
            toast.info("There were no results for your search", {
                position: "bottom-center",
            });
        } else {
            toast.success("Search was successfull", {
                position: "bottom-center",
            });
        }
        
        return data.data.results;
    } catch (err) {
        toast.error("Failed search! Change your keys and try again", {
            position: "bottom-center",
        });
        console.error("Erro no fetchHero", err)
        throw err
    }
}

const fetchHero = async (id: string, publicKey: string, privateKey: string) => {
    
    let baseUrl = `${API_URL}/v1/public/characters/${id}`
    let ts : string = Date.now().toString()
    let hash = getHash(ts, privateKey, publicKey)

    let url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    
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