import { useNavigate , useParams} from "react-router-dom";
export const Profile = ()=> {
let navigate = useNavigate() ;
let {username} = useParams() ;
    return (
        <div>
            <h1>This is a profile page Page {username}</h1>
            <button onClick={()=> {
                navigate('/menu')
            }}>Go to menu page</button>
        </div>
        );

}


