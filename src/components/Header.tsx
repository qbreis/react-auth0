import { useAuth0 } from "@auth0/auth0-react";
export default function Header() {
    // const { isAuthenticated, logout } = useAuth0();
    // const { loginWithRedirect } = useAuth0();

    const {
        /* Documentation: https://auth0.com/docs/libraries/auth0-react */
        isAuthenticated,
        logout,
        loginWithRedirect,
    } = useAuth0();

    return (
        <header>
            <h1>React Auth0</h1>
            <nav>
                {isAuthenticated ? (
                    <button
                        onClick={() => {
                            logout();
                        }}
                    >
                        Sign Out
                    </button>
                ) : (
                    /* Documentation: https://auth0.com/docs/quickstart/spa/react/01-login#add-login-to-your-application */
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                )}
            </nav>
        </header>
    );
}
