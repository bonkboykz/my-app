import { useDispatch } from "react-redux";
import { login } from "../store/actions/auth";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { API_TOKEN, BACKEND_URL, BASE_URL } from "../constants";

export function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    const formData = new FormData(e.target);

    e.preventDefault();

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await fetch(`${BACKEND_URL}/auth/local`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          identifier: username,
          password: password,
        }),
      });

      const data = await response.json();

      dispatch(login(data));

      navigate("/");
    } catch (e) {
      console.error(e);
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
