import {useAppSelector} from "../../../bll/store";
import {Navigate} from "react-router-dom";

const ProfilePage = ( )=>{

    const isSingIn = useAppSelector<boolean>(state => state.singIn.isSingIn)

    if(!isSingIn){
        return <Navigate to='/signin'/>
    }
    return(
        <div>
            <h2>Profile</h2>
        </div>
    )
}

export default ProfilePage