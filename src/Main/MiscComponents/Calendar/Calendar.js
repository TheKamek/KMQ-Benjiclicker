import React, { useState } from "react";
import "./Calendar.css"; // Ensure this path is correct

const Calendar = ({ backButtonClickRoom }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [entries] = useState({
    "2024-08-14": { description: "Colin Walker Birthday", repeat: true },
    "2024-08-25": { description: "Kamek Krämer Birthday", repeat: true },
    "2024-05-31": { description: "Lino/Lewin Birthday", repeat: true },
    "2024-08-15": { description: "Sven Krämer Birthday", repeat: true },
    "2024-01-14": { description: "Xiacq YoxiQ Birthday", repeat: true },
    "2024-12-27": { description: "Clara Kruppa Birthday", repeat: true },
    "2024-08-18": { description: "Andri Bühler Birthday", repeat: true },
    "2024-10-26": { description: "King Lee Birthday", repeat: true },
    "2024-01-12": { description: "Nico Benninger Birthday", repeat: true },
  });

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handlePrevYear = () => {
    setCurrentDate(
      new Date(currentDate.setFullYear(currentDate.getFullYear() - 1))
    );
  };

  const handleNextYear = () => {
    setCurrentDate(
      new Date(currentDate.setFullYear(currentDate.getFullYear() + 1))
    );
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(
      currentDate.getMonth(),
      currentDate.getFullYear()
    );
    let firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    // Adjust for Monday as the first day of the week
    firstDayOfMonth = (firstDayOfMonth + 6) % 7;

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Ensure month is two digits
      const dayStr = day.toString().padStart(2, "0"); // Ensure day is two digits
      const entryKey = `${currentDate.getFullYear()}-${month}-${dayStr}`;
      const entry = entries[entryKey];

      // Check for repeating entries
      let repeatingEntry = null;
      if (!entry) {
        const repeatingKey = Object.keys(entries).find((key) => {
          const [, entryMonth, entryDay] = key.split("-");
          return (
            entries[key].repeat && entryMonth === month && entryDay === dayStr
          );
        });
        if (repeatingKey) {
          repeatingEntry = entries[repeatingKey];
        }
      }

      const isRepeating = entry && entry.repeat;
      days.push(
        <div key={day} className="day">
          <span className="dayNbr">{day}</span>
          {entry && (
            <div className="entry">
              {entry.description}
              {isRepeating && <span className="repeating">(Repeating)</span>}
            </div>
          )}
          {!entry && repeatingEntry && (
            <div className="entry">
              {repeatingEntry.description}
              <span className="repeating">(Repeating)</span>
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevYear}>{"<<"}</button>
        <button onClick={handlePrevMonth}>{"<"}</button>
        <span>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </span>
        <button onClick={handleNextMonth}>{">"}</button>
        <button onClick={handleNextYear}>{">>"}</button>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="days">{renderDays()}</div>
      <button
        className="backButton"
        onClick={(event) => {
          event.stopPropagation();
          backButtonClickRoom(event);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Calendar;
