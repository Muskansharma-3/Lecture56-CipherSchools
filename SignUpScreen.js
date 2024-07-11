import { useState } from "react";
import { loginUser, signUpUser } from "../utils/AuthUtil";
import { Link, useNavigate } from "react-router-dom";

const SignUpScreen = () => {

    const [userData, setUserData] = ({
        firstName: "", lastName: "", email: "", password: "", type: "STUDENT"
    })
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);
        if (validateData()) {
            const user = await signUpUser(userData);
            navigate("/");
        }
    }

    const validateData = () => {
        return (userData.firstName?.length && userData.lastName?.length && userData.email?.length && userData.password?.length);
    }

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    return (
        <section className="app-section">
            <h1>SignUp</h1>
            <span>Already have an account? Login <Link to={"/login"}>here</Link> </span>
            <form className="ui form" onSubmit={handleLoginSubmit}>
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="First Name" required={true} onChange={handleInputChange} value={userData.firstName} />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Last Name" required={true} onChange={handleInputChange} value={userData.lastName} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} required={true} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleInputChange} required={true} minLength={8} />
                </div>
                <div class="ui segment">
                    <div class="field">
                        <div class="ui toggle checkbox" onClick={() => {
                            setUserData({ ...userData, type: userData.type === "LIBRARIAN" ? "STUDENT" : "LIBRARIAN" })

                        }}>
                            <input type="checkbox" name="gift" tabIndex="0" class="hidden" checked={userData.type === "LIBRARIAN"} />
                            <label>Are you a Librarian?</label>
                        </div>
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default SignUpScreen;