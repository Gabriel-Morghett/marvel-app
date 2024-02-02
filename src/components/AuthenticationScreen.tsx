import React, { useRef } from 'react'

// interface SearchBarProps {
//     setter: any;
//   }

export default function AuthenticationScreen({setter} : any) {
    let input = useRef<HTMLInputElement>(null);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        let value = input.current?.value
        if (value === "") return


        try {

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form>
            <input type="text" placeholder="Insert your public key" ref={input} />
            <input type="text" placeholder="Insert your private key" ref={input} />
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}




