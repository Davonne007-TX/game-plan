import Header from "./Header";
import { useState, useEffect } from "react";
import Button from "../../Button";

export default function Timer() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [countDownStarted, setCountDownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

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

  //
  const handleSetCountDown = (e) => {
    e.preventDefault();
    setCountDownStarted(true);
    localStorage.setItem("Event Date:", eventDate);
    localStorage.setItem("Event Name:", eventName);
  };

  //
  const handleStopCountDown = () => {
    setCountDownStarted(false);
    setTimeRemaining(0);
    localStorage.clear();
  };

  return (
    <main className="max-w-sm md:max-w-3xl lg:max-w-4xl bg-gradient-to-r font-serif font-thin text-md md:text-lg lg:text-xl from-pink-200 to-pink-500 p-8 rounded-xl ml-auto mr-auto">
      <Header />

      <h2 className="text-2xl mb-2 mt-4">
        {countDownStarted ? eventName : "Countdown Begins"}
      </h2>
      <form className="flex flex-col gap-2">
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
          placeholder="Enter Event Date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          onClick={(e) => (e.target.type = "date")}
          className="p-2 rounded-xl"
        />

        <section className="flex justify-center items-center gap-40 mt-10">
          <Button
            buttonText="Start Countdown"
            className="bg-white w-60 h-10 mt-2 text-sm md:text-md lg:text-lg hover:text-pink-500"
            onClick={handleSetCountDown}
          />
          <Button
            buttonText="Reset"
            className="bg-white w-60 h-10 mt-2 text-sm md:text-md lg:text-lg hover:text-pink-500"
            onClick={handleStopCountDown}
          />
        </section>
      </form>
    </main>
  );
}
