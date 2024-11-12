"use client";

import {
  parseDate,
  formatDate,
  formatDateTime,
  formatDiff,
  addDaysToDate,
  daysBetween,
} from "@/lib/date-time";
import { useState } from "react";

export default function DateComponent() {
  const [inputDate, setInputDate] = useState<string>("2024-11-12");
  const [daysToAdd, setDaysToAdd] = useState<number>(5);

  const parsedDate = parseDate(inputDate) || new Date();
  const formattedDate = formatDate(parsedDate);
  const formattedDateTime = formatDateTime(parsedDate);
  const formattedDiff = formatDiff(parsedDate);
  const newDate = formatDate(
    addDaysToDate(parsedDate, daysToAdd) || new Date()
  );
  const differenceInDays = daysBetween(parsedDate, new Date());

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 ">Date Utility Examples</h2>

      <div className="mb-4">
        <label className="block font-medium mb-2">
          Input Date (ISO format):
        </label>
        <input
          type="text"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          className="w-full p-2 text-black border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">Days to Add:</label>
        <input
          type="number"
          value={daysToAdd}
          onChange={(e) => setDaysToAdd(Number(e.target.value))}
          className="w-full text-black p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <p className="">
          <span className="font-semibold">Formatted Date:</span> {formattedDate}
        </p>
        <p className="">
          <span className="font-semibold">Formatted Date & Time:</span>{" "}
          {formattedDateTime}
        </p>
        <p className="">
          <span className="font-semibold">Time Ago:</span> {formattedDiff}
        </p>
        <p className="">
          <span className="font-semibold">Date after {daysToAdd} days:</span>{" "}
          {newDate}
        </p>
        <p className="">
          <span className="font-semibold">
            Days between input date and today:
          </span>{" "}
          {differenceInDays} days
        </p>
      </div>
    </div>
  );
}
