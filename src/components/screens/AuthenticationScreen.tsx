import React, { FormEvent, useState } from 'react'

type Props = {
    onLogin: (keys: { publicKey: string; privateKey: string }) => void;
};

function AuthenticationScreen({ onLogin } : Props) {
    const [publicKey, setPublicKey] = useState("");
    const [privateKey, setPrivateKey] = useState("");


    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onLogin({ publicKey, privateKey });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Insert your public key" 
                onChange={(e) => setPublicKey(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Insert your private key" 
                onChange={(e) => setPrivateKey(e.target.value)} 
            />
            <button type="submit">Submit</button>
        </form>
    )
}



export default AuthenticationScreen;

