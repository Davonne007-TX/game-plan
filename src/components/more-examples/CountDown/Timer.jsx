import Header from "./Header";
import { useState, useEffect } from "react";

export default function Timer() {
  const [eventName, setEventName] = useState(""); //stores the name of the event
  const [eventDate, setEventDate] = useState(""); //stores the date of the event for the countdown timer
  const [countDownStarted, setCountDownStarted] = useState(""); //tracks whether the countdown timer has started
  const [timeRemaining, setTimeRemaining] = useState(0); //shows the time remaining in milliseconds

  useEffect(() => {
    if (countDownStarted && eventDate) {
      const countDownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventTime).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countDownInterval);
          alert("Countdown Complete");
        }
        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countDownInterval);
    }
  }, [countDownStarted, eventDate, timeRemaining]);

  return (
    <section>
      <Header />
    </section>
  );
}
