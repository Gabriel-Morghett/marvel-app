import AuthenticationScreen from '../components/screens/AuthenticationScreen'
import Container from '../components/Container'
import { CookiesProvider, useCookies } from "react-cookie";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToastMessage = () => {
    toast.success("Keys saved!", {
        position: "bottom-center",
    });
};

export default function Authentication() {
    const [cookies, setCookie] = useCookies(["user"]);

    function handleKeys(keys: { publicKey: string; privateKey: string }) {
        setCookie('user', keys, { path: '/' });
        showToastMessage();
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
