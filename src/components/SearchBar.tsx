import React, { useRef } from 'react'
import { fetchCreators, fetchHeroes } from '../libs/utils';
import { useCookies } from 'react-cookie';

interface SearchBarProps {
    setter: (heroes: any) => void;
    fetchFunction: (value: string, publicKey: string, privateKey: string) => void;
  }

export default function SearchBar({setter, fetchFunction} : SearchBarProps) {
    const input = useRef<HTMLInputElement>(null);
    const [cookies] = useCookies(['user']);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const value = input.current?.value ? input.current?.value : "";

        const { user } = cookies;

        if (user) {
            const { publicKey, privateKey } = user;
      
            try {
                const heroes = await fetchFunction(value, publicKey, privateKey);
                setter(heroes);
            } catch (err) {
                console.error('Erro ao buscar informações:', err);
            }
        } else {
            console.error('Usuário não autenticado.');
        }
    }

    return (
        <form>
            <input type="text" placeholder="Search..." ref={input} />
            <button onClick={handleClick}>Search</button>
        </form>
    )
}