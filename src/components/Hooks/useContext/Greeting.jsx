import { useContext } from "react";
import { CurrentUserContext } from "./SecondExample";

export default function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You are logged in as {currentUser.name}</p>;
}
