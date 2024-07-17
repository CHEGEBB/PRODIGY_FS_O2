const SignUp = () => {
    return ( 
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="login">Login</a></p>
        </div>
     );
}
 
export default SignUp;