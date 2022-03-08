import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";

const SignIn = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.profile.isAuth)

    return (
        <div>
            <h2>Sign in</h2>
        </div>
    )
}

export default SignIn