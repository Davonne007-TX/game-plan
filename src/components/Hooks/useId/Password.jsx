import ChoosePassword from "./ChoosePassword";
import ReuseableButton from "../../ReuseableButton";

export default function Password({ backToHooks }) {
  return (
    <section className="flex-time">
      <h1 className="font-capri text-purple-300 mt-4 text-4xl">
        useId() hook{" "}
      </h1>

      <ChoosePassword />
      <ChoosePassword />

      <section className=" mt-20 flex gap-8 justify-center items-center">
        <ReuseableButton label="Back To Hooks" onClick={backToHooks} />
      </section>
    </section>
  );
}
