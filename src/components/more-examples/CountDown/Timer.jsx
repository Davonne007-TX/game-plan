import { useState } from "react";

export default function Timer() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [countDownStarted, setCountDownStarted] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(0);

  return (
    <section className="flex-time">
      <h1 className="font-bold font-lobster text-4xl">Countdown Timer</h1>
    </section>
  );
}
