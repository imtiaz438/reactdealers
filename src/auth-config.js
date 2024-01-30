import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: 'faaef52d-4738-4172-b8c2-818443fcef71',
        authority: /*'https://login.microsoftonline.com/42de95c2-b411-4b7e-9b35-72c1d4a35842'*//*'https://login.microsoftonline.com/common'*/'https://DriveChicago.b2clogin.com/DriveChicago.onmicrosoft.com/B2C_1_SIGN_UP',
        redirectUrl: '/test-login',
        postLogoutRedirectUrl: '/test-login',
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateinCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

export const loginRequest = {
    scopes: ["User.Read"],
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com",
}