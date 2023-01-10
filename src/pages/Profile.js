import ChangeProfile from "../components/ChangeProfile";

export const Profile = (props)=> {

    return (
        <div>
            <h1>This is a profile page : {props.username}</h1>
            <ChangeProfile user = {props.setusername}/>
            
        </div>
        );

}


