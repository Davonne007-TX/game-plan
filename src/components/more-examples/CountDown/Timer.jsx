import Header from "./Header";
import { useState, useEffect } from "react";
import Button from "../../Button";

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
    <main className="max-w-5xl bg-gradient-to-r font-serif font-thin text-md md:text-lg lg:text-xl from-pink-200 to-pink-500 p-8 rounded-xl ml-auto mr-auto">
      <Header />

      <h2 className="text-2xl mb-2 mt-4">
        {countDownStarted ? eventName : "Countdown Begins"}
      </h2>
      <form className="flex flex-col gap-4">
        <label> Event Name:</label>
        <input
          name="title"
          type="text"
          placeholder="Enter Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="p-2 rounded-xl"
        />
        <label>Event Date:</label>
        <input
          name="event-date"
          type="text"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          onClick={(e) => (e.target.type = "date")}
          className="p-2 rounded-xl"
        />

        <Button
          buttonText="Start Countdown"
          className="bg-white w-40 h-10 text-sm md:text-md lg:text-lg hover:text-pink-500"
        />
      </form>
    </main>
  );
}
