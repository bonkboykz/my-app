import "./SignUp.css";

export function SignUpPage() {
  return (
    <div className="card">
      <h1>Sign Up</h1>

      <form className="auth-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="email" placeholder="Email" />

        <button type="submit">Sign Up</button>
      </form>

      <a href="/auth/login">Already have an account?</a>
    </div>
  );
}
