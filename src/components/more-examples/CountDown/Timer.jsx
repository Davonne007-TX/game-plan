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
        const eventTime = new Date(eventDate).getTime();
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

  //
  useEffect(() => {
    if (countDownStarted) {
      document.title = eventName;
    }
  }, [countDownStarted, eventName]);

  return (
    <main className="max-w-7xl bg-gradient-to-r from-pink-400 to-white p-8 rounded-xl ml-auto mr-auto">
      <Header />

      <h2>{countDownStarted ? eventName : "Countdown Timer"}</h2>
      <form>
        <label> Event Name:</label>
        <input
          name="title"
          type="text"
          placeholder="Enter Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <label>Event Date:</label>
        <input
          name="event-date"
          type="text"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          onClick={(e) => (e.target.type = "date")}
        />

        <button>Start Countdown</button>
      </form>
    </main>
  );
}
