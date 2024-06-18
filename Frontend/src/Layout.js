
import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <ul>
          
          <li><Link to="Insert">Insert</Link></li>  
          <li><Link to="Display">Display</Link></li>  
        
          <li><Link to="Search">Search</Link></li>  
          



          

        </ul>
        <Outlet/>
        </>
    );
}
export default Layout;