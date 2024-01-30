import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "src/routes";
import PageLayout from "src/components/PageLayout";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "src/index.js";

export default function App() {

    const router = createBrowserRouter([
        {
            element: <PageLayout />,
            children: paths
        }
    ])

    return(
    <MsalProvider instance={msalInstance}>
        <RouterProvider router={router} />
    </MsalProvider>
    )
}