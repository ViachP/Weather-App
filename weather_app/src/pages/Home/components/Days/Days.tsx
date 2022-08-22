import React from "react";
import { Card } from "./Card";
import { Tabs } from "./Tabs";
import s from "./Days.module.scss";

interface Props {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: "Today",
      day_info: "22 Aug",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "cloudy",
    },
    {
      day: "Tomorrow",
      day_info: "23 Aug",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "light rain and sunshine",
    },
    {
      day: "Wed",
      day_info: "24 Aug",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "small rain",
    },
    {
      day: "Thu",
      day_info: "25 Aug",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "cloudy",
    },
    {
      day: "Fr",
      day_info: "26 Aug",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "sunny",
    },
    {
      day: "Sat",
      day_info: "27 Aug",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "cloudy",
    },
    {
      day: "Sun",
      day_info: "28 Aug",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "cloudy",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => (
          <Card day={day} key={day.day} />
        ))}
      </div>
    </>
  );
};
