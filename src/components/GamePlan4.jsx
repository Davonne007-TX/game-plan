import ReuseableButton from "./ReuseableButton";

export default function GamePlan4() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-green-200 text-3xl font-gloria">Game Plan #4</h1>

      <div className="flex gap-20">
        <ReuseableButton label="Back" />
        <ReuseableButton label="Next Plan" />
      </div>
    </div>
  );
}
