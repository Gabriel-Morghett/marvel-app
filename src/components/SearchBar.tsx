import React, { useRef } from 'react'
import { fetchHero, fetchHeroes } from '../libs/utils';

// interface SearchBarProps {
//     setter: any;
//   }

export default function SearchBar({setter} : any) {
    let input = useRef<HTMLInputElement>(null);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        let value = input.current?.value
        if (value === "") return


        try {
            let heroes = await fetchHeroes(value ?? "");
            setter(heroes);
        } catch (err) {
            console.error("Erro ao buscar heróis:", err);
        }
    }

    return (
        <form>
            <input type="text" placeholder="Search Hero..." ref={input} />
            <button onClick={handleClick}>Search</button>
        </form>
    )
}






// import React, { useRef, FormEvent, ReactElement } from "react";
// import Button from "./Button";
// import charactersResponseFormat from "../interfaces/characterInt";


// interface SearchBarProps {
//     data: charactersResponseFormat;
//     handleClick: (e: FormEvent, searchTerm: string) => Promise<void>;
//     setHeroes: (heroes: any[]) => void; // Substitua 'any[]' pelo tipo apropriado
//     setError: (error: any) => void; // Substitua 'any' pelo tipo apropriado
// }

// export default function SearchBar({
//     handleClick,
//     setHeroes,
//     setError
// }:  SearchBarProps): ReactElement {
//     const input = useRef<HTMLInputElement>(null);

//     return (
//         <form>
//             <input type="text" placeholder="Search hero..." ref={input} />
//             <Button
//                 text={"Search"}
//                 handleClick={(e) => {
//                 if (input.current) {
//                     handleClick(e, input.current.value)
//                     .then((data) => setHeroes(data.data.results))
//                     .catch((err) => setError(err));
//                 }
//                 }}
//             />
//         </form>
//     );
// }