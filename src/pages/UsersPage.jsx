import { users } from "./users";
import { Outlet, useParams } from "react-router-dom";

export function UsersNavigation() {
  const { usersId } = useParams();

  const num = parseInt(usersId);

  const userFind = users.find((polzovatel) => polzovatel.id === num);

  return (
    <>
      <div>
        <h2>{userFind.id}</h2>
        <h2>{userFind.name}</h2>
        <h2>{userFind.email}</h2>
      </div>

      <Outlet />
    </>
  );
}
