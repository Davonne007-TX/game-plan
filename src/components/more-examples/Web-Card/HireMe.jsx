import Button from "../../Button";

export default function HireMe() {
  return (
    <>
      <section className="flex flex-col gap-8">
        <p>Lets Make Something Beautiful</p>
        <section className="flex gap-8 ">
          <Button buttonText={"Why Me"} className={"web-bts"} />
          <Button buttonText={"Hire Me"} className={"web-bts"} />
        </section>
      </section>
    </>
  );
}
