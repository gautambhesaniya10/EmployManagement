import React from 'react'
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
    let navigate = useNavigate();

    const loginHandler = (route) => {
        if (route === "login") {
            // window.open(
            //     `http://localhost:3000/login`,
            //     "_blank",
            //     "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=600,height=650"
            //   );
            navigate("/login")
        }
    }
    const signUpHandler = (route) => {
        if (route === "signup") {
            navigate("/signup")
        }
    }
    return (
        <>
            <div style={{margin: "25%"}}>
                <button onClick={() => loginHandler("login")}>Login</button>
                <br />
                <br />
                <button onClick={() => signUpHandler("signup")}>Sign up</button>
            </div>
        </>
    )
}

export default HomePage