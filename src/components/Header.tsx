import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
    const { isAuthenticated, logout } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    return (
        <header>
            <h1>React Auth0</h1>
            <nav>{isAuthenticated ? <>Sign Out</> : <>Sign In</>}</nav>
        </header>
    );
}
