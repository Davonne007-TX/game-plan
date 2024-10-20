import Button from "../../Button";

export default function HireMe() {
  return (
    <>
      <section className="flex flex-col gap-8">
        <p>Lets Make Something Beautiful</p>
        <section className="flex gap-8 ">
          <Button
            buttonText={"Why Me"}
            className={"bg-pink-300 w-60 rounded"}
          />
          <Button
            buttonText={"Hire Me"}
            className={"bg-pink-300 w-60 rounded"}
          />
        </section>
      </section>
    </>
  );
}
