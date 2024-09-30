import { useSelector } from "react-redux";

export function IndexPage() {
  const auth = useSelector((state) => state.auth);

  if (!auth.isLoggedIn) {
    window.location.href = "/auth/login";
  } else {
    window.location.href = "/dashboard/home";
  }

  return <></>;
}
