const LoginPage = () => {
    return ( 
        <div className="login-container">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/">Sign up</a></p>
        </div>
     );
}
 
export default LoginPage;