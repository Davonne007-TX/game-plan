import { Link } from "react-router-dom";

export default function MoreExamples() {
  const mySideProjects = [
    { id: 1, text: "Lists", link: "/lists" },
    { id: 2, text: "Toggle Icon", link: "/toggle" },
    { id: 3, text: "Pizza Hut", link: "/pizzaHut" },
    { id: 4, text: "Nike Landing Page", link: "/random" },
    { id: 5, text: "We Did It", link: "/weDidIt" },
    { id: 6, text: "React Docs Product Search", link: "/productSearch" },
    { id: 7, text: "To Do List: This Dot Media", link: "/toDo" },
    { id: 8, text: "Count Down Time: Free Code Camp", link: "/countDown" },
    { id: 9, text: "UI Horizontal Web Card", link: "/webCard" },
    { id: 10, text: "My Doggies Carousel", link: "/myCarousel" },
    {
      id: 11,
      text: "Tutorial, React Best Practices",
      link: "/reactBestPractices",
    },
  ];

  return (
    <>
      <hr />
      <section className="flex flex-col font-lobster ml-20 mt-10 text-white">
        <h2 className="text-4xl text-center mb-10 text-pink-600">
          Projects - Lets Learn
        </h2>
        {mySideProjects.map((project) => (
          <li key={project.id} className="text-2xl mb-4 hover:text-pink-600">
            <Link to={project.link}>{project.text}</Link>
          </li>
        ))}
      </section>
    </>
  );
}
