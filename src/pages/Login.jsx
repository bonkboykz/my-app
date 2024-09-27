import "./Login.css";

export function LoginPage() {
  return (
    <div className="card">
      <h1>Login</h1>

      <form className="auth-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>

      <a href="/auth/signup">Don&apos;t have account?</a>
    </div>
  );
}
