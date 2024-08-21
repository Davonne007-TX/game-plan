import { Link } from "react-router-dom";

export default function MoreExamples() {
  return (
    <>
      <hr />
      <section className="flex flex-col font-lobster ml-20 mt-10">
        <h2 className="text-3xl text-center mb-10">Other examples</h2>
        <ol className="list-disc text-2xl mb-10">
          <li className="hover:text-underline">
            <Link to="/lists" className="hover:underline">
              Lists
            </Link>
          </li>
          <li>
            <Link to="/toggle">Toggle Icon</Link>
          </li>
          <li>
            <Link to="/pizzaHut">Pizza Hut</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
          <li>
            <Link to="/weDidIt">We Did It</Link>
          </li>
          <li>
            <Link to="/productSearch">React Docs Product Search</Link>
          </li>
        </ol>
      </section>
    </>
  );
}