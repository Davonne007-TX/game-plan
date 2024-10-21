import Button from "../../Button";

export default function Helpful() {
  return (
    <>
      <section>
        <p>Experienced with</p>

        <section className="flex flex-col md:flex-row gap-4 mt-4">
          <Button buttonText={"React.js"} className={"experience-bts"} />
          <Button
            buttonText={"Express.js/PostgreSQL"}
            className={"experience-bts"}
          />
          <Button buttonText={"UI/UX Design"} className={"experience-bts"} />
        </section>
      </section>
    </>
  );
}
