import { loginUser, logoutUser, signUpUser } from "../apis/user-api";

const getUserToken = () => {
    return localStorage.getItem("token");
}

const getLocalStorageUser = ()=>{
    return JSON.parse(localStorage.getItem("user"));
}

const setUser = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
}

const loginUserFunction = async ({ email, password }) => {
    const data = await loginUser({ email, password });
    setUser(data);
    return data.user;
}

const signupUserFunction = async (userData) => {
    const data = await signUpUser(userData);
    setUser(data);
    return data.user;
}

const logoutUserFunction = async()=>{
    const response=await logoutUser();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

export { getUserToken, loginUserFunction as loginUser, signupUserFunction as signUpUser, getLocalStorageUser, loginUserFunction as logoutUser };