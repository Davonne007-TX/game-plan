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
    setEventName("");
    setEventDate("");
  };

  //
  const handleResetCountDown = () => {
    setCountDownStarted(false);
    setEventDate("");
    setEventName("");
    setTimeRemaining(0);
    localStorage.removeItem("Event Date:");
    localStorage.removeItem("Event Name:");
  };

  //
  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    const localDate = new Date(year, month - 1, day);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return localDate.toLocaleDateString("en-US", options);
  };

  //
  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <section className="flex flex-col md:flex-row justify-center items-center text-lg md:text-2xl lg:text-3xl font-bold font-alton gap-8 md:gap-20 mt-10">
        <div>
          {days.toString().padStart(2, "0")} <br />
          <span>Days</span>
        </div>

        <div>
          {hours.toString().padStart(2, "0")}
          <br />
          <span>Hours</span>
        </div>
        <div>
          {minutes.toString().padStart(2, "0")}
          <br />
          <span>Minutes</span>
        </div>
        <div>
          {seconds.toString().padStart(2, "0")}
          <br />
          <span>Seconds</span>
        </div>
      </section>
    );
  };

  return (
    <main className="max-w-sm md:max-w-2xl lg:max-w-3xl bg-gradient-to-r font-serif font-thin text-md md:text-lg lg:text-xl from-pink-200 to-pink-500 p-8 rounded-xl ml-auto mr-auto">
      <Header />

      <h2 className="text-2xl mb-2 mt-8">
        {countDownStarted ? eventName : "Its Almost Time For..."}
      </h2>
      <p className="mt-4"> {countDownStarted && formatDate(eventDate)}</p>

      {!countDownStarted ? (
        <form className="flex flex-col gap-2 ">
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
            type="date"
            placeholder="Enter Event Date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="p-2 rounded-xl"
          />
          <Button
            buttonText="Start Countdown"
            className="bg-white w-60 h-10 mt-2 text-sm md:text-md lg:text-lg hover:text-pink-500"
            onClick={handleSetCountDown}
          />
        </form>
      ) : (
        <>
          {formatTime(timeRemaining)}
          <section className="flex justify-center items-center mt-10 gap-10">
            <Button
              buttonText="Stop"
              onClick={handleStopCountDown}
              className="countdown-bts "
            />
            <Button
              buttonText="Reset"
              onClick={handleResetCountDown}
              className="countdown-bts "
            />
          </section>
        </>
      )}
    </main>
  );
}
