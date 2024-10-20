import Button from "../../Button";

export default function Helpful() {
  return (
    <>
      <section>
        <p>Experienced with:</p>

        <section className="flex gap-4 mt-4">
          <Button
            buttonText={"React.js"}
            className={"bg-pink-300 rounded-full "}
          />
          <Button
            buttonText={"Express.js/Node"}
            className={"bg-pink-300  rounded-full"}
          />
          <Button
            buttonText={"UI/UX Design"}
            className={"bg-pink-300  rounded-full"}
          />
        </section>
      </section>
    </>
  );
}
