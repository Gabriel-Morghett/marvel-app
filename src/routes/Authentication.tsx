import React from 'react'
import AuthenticationScreen from '../components/AuthenticationScreen'
import Container from '../components/Container'
import { CookiesProvider, useCookies } from "react-cookie";

export default function Authentication() {
    const [cookies, setCookie] = useCookies(["user"]);

    function handleKeys(keys: { publicKey: string; privateKey: string }) {
        setCookie('user', keys, { path: '/' });
    }

    return (
        <Container>
            <CookiesProvider>
                <div>
                    <AuthenticationScreen onLogin={handleKeys} />
                </div>
            </CookiesProvider>
        </Container>
    )
}
