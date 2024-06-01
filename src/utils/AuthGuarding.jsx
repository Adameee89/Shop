import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

function AuthGarding({ children }) {
    const {isSignedIn, user, isLoaded} = useUser();

    return user ? children : <Navigate to="/" />
}

export default AuthGarding