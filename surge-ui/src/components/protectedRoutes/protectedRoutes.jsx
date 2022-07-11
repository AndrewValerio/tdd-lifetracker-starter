import { useAuthContext } from "../Contexts/auth"
import Login from "components/Login/Login";
export default function ProtectedRoute({ element })
{
    const { appState, initialized } = useAuthContext()
    if (!initialized)
    {
        return null
    }
    if (initialized && !appState.email)
    {
            return <Login message= "You must be Logged In"/>
    }
    return <>{element}</>
}