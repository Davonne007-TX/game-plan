import ChoosePassword from "./ChoosePassword";

export default function Password() {
  return (
    <section className="flex-time">
      <h1 className="font-capri text-purple-300 mt-4 text-4xl">
        useId() hook{" "}
      </h1>

      <ChoosePassword />
      <ChoosePassword />
    </section>
  );
}
