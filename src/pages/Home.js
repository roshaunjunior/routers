import { useQuery } from "@tanstack/react-query" ;
import Axios  from "axios";
export const Home = ()=> {
    const { data,isLoading,isError,refetch } = useQuery(["cat"],() => { return Axios.get('https://catfact.ninja/fact').then((res)=>res.data);
    })
    if(isError) return <h1>Not found</h1>
    if(isLoading) return <h1>Loading...</h1>
    return <div>
        <h1>This is a Home Page</h1>
           <p1> {data?.fact}</p1>
           <button onClick={refetch}>update data</button>
    </div>
}

