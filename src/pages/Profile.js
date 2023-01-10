import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import  {AppContext} from '../App' ;
export const Profile = ()=> {

    const {userName} = useContext(AppContext) ;
    return (
        <div>
            <h1>This is a profile page : {userName}</h1>
            <ChangeProfile/>
            
        </div>
        );

}


