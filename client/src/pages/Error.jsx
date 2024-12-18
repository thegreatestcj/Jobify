import { Link, useRouteError } from "react-router-dom";
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="Not Found" className="error-img"/>
                    <h3>Oops! Page Not Found.</h3>
                    <p>We can't seem to find the page you requested for.</p>
                    <Link to='/'>Back to home</Link>
                </div>
            </Wrapper>
        );
    } 
    return (
        <Wrapper>
            <div>
                <h3>Oops! Something went wrong.</h3>
                <Link to='/'>Back to home</Link>
            </div>
        </Wrapper>
    );
}

export default Error;