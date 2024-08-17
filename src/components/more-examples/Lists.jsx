import { useNavigate } from "react-router-dom";
// import Header from "../Header";
import ReuseableButton from "../ReuseableButton";

const movies = [
  "The Wizard of Oz",
  "Harry Potter",
  "The Lord of the Rings",
  "Zeon",
  "The Borrowers",
  "A Bugs Life",
  "Life Size",
  "Crossroads",
  "The Cheetah Girls",
]; //create an object, of strings

export default function Lists() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  const listItems = movies.map((movie, index) => <li key={index}>{movie}</li>);

  return (
    <>
      {/* <Header children={"Show me a list"} /> */}
      <section className="flex flex-col justify-center items-center h-screen font-lobster text-3xl">
        <p className="text-5xl">My Favorite Movies:</p> <br />
        <ul className="text-purple-800">{listItems}</ul>
        <section className="mt-10">
          <ReuseableButton label="Go Back" onClick={goBack} className="mt-20" />
        </section>
      </section>
    </>
  );
}
