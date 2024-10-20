import Button from "../../Button";

export default function Helpful() {
  return (
    <>
      <section>
        <p>Experienced with:</p>

        <section className="flex gap-4 mt-4">
          <Button buttonText={"React.js"} className={"bg-blue-600 "} />
          <Button buttonText={"Express.js/Node"} className={"bg-blue-600"} />
          <Button buttonText={"UI/UX Design"} className={"bg-blue-600"} />
        </section>
      </section>
    </>
  );
}
