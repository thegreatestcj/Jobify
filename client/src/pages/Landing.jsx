import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from '../components';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>job <span>tracking</span> app</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae rerum iusto! Asperiores reiciendis ipsa earum est in voluptatibus perspiciatis illo autem numquam quod? Doloremque dolor laborum corporis alias esse.</p>
                    <Link to="/register" className='btn register-link'>Register</Link>
                    <Link to='/login' className='btn login-link'>Login / Demo User</Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img"/>
            </div>
        </Wrapper>
    );
}

export default Landing;