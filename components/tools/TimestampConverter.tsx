"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Clock, Calendar } from "lucide-react";

export function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [datetime, setDatetime] = useState("");
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTimestampChange = (value: string) => {
    setTimestamp(value);
    if (!value) {
      setDatetime("");
      return;
    }

    const num = parseInt(value);
    if (isNaN(num)) {
      setDatetime("Invalid timestamp");
      return;
    }

    try {
      // Handle both seconds and milliseconds
      const date = num > 10000000000 ? new Date(num) : new Date(num * 1000);
      setDatetime(format(date, "yyyy-MM-dd HH:mm:ss"));
    } catch {
      setDatetime("Invalid timestamp");
    }
  };

  const handleDatetimeChange = (value: string) => {
    setDatetime(value);
    if (!value) {
      setTimestamp("");
      return;
    }

    try {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        setTimestamp("Invalid date");
        return;
      }
      setTimestamp(Math.floor(date.getTime() / 1000).toString());
    } catch {
      setTimestamp("Invalid date");
    }
  };

  const setToNow = () => {
    const now = Date.now();
    setTimestamp(Math.floor(now / 1000).toString());
    setDatetime(format(now, "yyyy-MM-dd HH:mm:ss"));
  };

  const commonTimestamps = [
    { label: "Start of Unix Epoch", timestamp: 0, date: "1970-01-01 00:00:00" },
    { label: "Y2K", timestamp: 946684800, date: "2000-01-01 00:00:00" },
    { label: "Start of 2020", timestamp: 1577836800, date: "2020-01-01 00:00:00" },
    { label: "Start of 2025", timestamp: 1735689600, date: "2025-01-01 00:00:00" },
  ];

  return (
    <div className="space-y-8">
      {/* Current Time */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Current Time</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm opacity-80 mb-1">Unix Timestamp</div>
            <div className="text-3xl font-mono font-bold">
              {Math.floor(currentTime / 1000)}
            </div>
          </div>
          <div>
            <div className="text-sm opacity-80 mb-1">Human Readable</div>
            <div className="text-xl font-mono">
              {format(currentTime, "yyyy-MM-dd HH:mm:ss")}
            </div>
          </div>
        </div>
        <button
          onClick={setToNow}
          className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
        >
          Use Current Time
        </button>
      </div>

      {/* Converters */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timestamp to Date */}
        <div className="space-y-4 p-6 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold dark:text-white">Timestamp to Date</h3>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium dark:text-white">Unix Timestamp (seconds)</label>
            <input
              type="text"
              value={timestamp}
              onChange={(e) => handleTimestampChange(e.target.value)}
              placeholder="Enter Unix timestamp..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium dark:text-white">Human Readable Date</label>
            <div className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 font-mono">
              {datetime || "Enter a timestamp"}
            </div>
          </div>
        </div>

        {/* Date to Timestamp */}
        <div className="space-y-4 p-6 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-500" />
            <h3 className="text-lg font-semibold dark:text-white">Date to Timestamp</h3>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium dark:text-white">Date & Time</label>
            <input
              type="datetime-local"
              value={datetime.replace(" ", "T")}
              onChange={(e) => handleDatetimeChange(e.target.value.replace("T", " "))}
              placeholder="Select date and time..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium dark:text-white">Unix Timestamp</label>
            <div className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 font-mono">
              {timestamp || "Select a date"}
            </div>
          </div>
        </div>
      </div>

      {/* Common Timestamps */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
        <h3 className="font-semibold mb-4 dark:text-white">Common Timestamps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {commonTimestamps.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setTimestamp(item.timestamp.toString());
                setDatetime(item.date);
              }}
              className="text-left p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <div className="font-medium text-sm mb-2 dark:text-white">{item.label}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-mono space-y-1">
                <div>Timestamp: {item.timestamp}</div>
                <div>Date: {item.date}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-400">
          <strong>Note:</strong> Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
          This tool supports both seconds and milliseconds.
        </p>
      </div>
    </div>
  );
}
