export function IndexPage() {
  const isUserLoggedIn = true;

  if (!isUserLoggedIn) {
    window.location.href = "/auth/login";
  } else {
    window.location.href = "/dashboard/home";
  }

  return <></>;
}
