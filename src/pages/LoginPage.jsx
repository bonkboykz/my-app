import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (
      formData.get("username") === "admin" &&
      formData.get("password") === "admin"
    ) {
      navigate("/admin");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={onSubmit}>
        <input name="username" type="text" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
