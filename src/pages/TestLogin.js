import React from "react";
import { loginRequest } from "src/auth-config";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

const WrappedView = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    const handleRedirect = () => {
        instance
            .loginRedirect({
                ...loginRequest,
                prompt: 'create'
            })
            .catch((error) => console.log(error))
    };

    return(
        <>
            <AuthenticatedTemplate>
                {activeAccount ? <div>
                    Authenticated Successfully!
                </div> : null}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <button onClick={handleRedirect}>
                    Sign Up
                </button>
            </UnauthenticatedTemplate>
        </>
    )
}

export default function TestLogin() {
    return(
        <>
            <WrappedView />
        </>
    )
}