import { useDispatch } from "react-redux";
import { login } from "../store/actions/auth";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    const formData = new FormData(e.target);

    e.preventDefault();

    const username = formData.get("username");
    const password = formData.get("password");

    console.log(username, password);

    if (username === "admin" && password === "admin") {
      dispatch(login({ username }));

      navigate("/");
    }
  };

  return (
    <div className="card">
      <h1>Login</h1>

      <form className="auth-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />

        <button type="submit">Login</button>
      </form>

      <a href="/auth/signup">Don&apos;t have account?</a>
    </div>
  );
}
