import '../css/NotFoundPage.css';
import { useParams } from "react-router-dom";

const NotFoundPage = () => {

    const params = useParams();
    
    return ( 
        <div className="not-found-page">
            <h1>Page {params['*']} doesn't exist</h1>
        </div>
     );
}
 
export default NotFoundPage;