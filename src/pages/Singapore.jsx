import React from "react";
import CountryTemplate from "../components/CountryTemplate";

const singapore = {
  name: "Singapore",
  flag: "sg",
  tint: "linear-gradient(135deg,#3b3b3b,#1c1c1c)",
  lede: "Top-tier global education and a launchpad into careers across Asia for ambitious students. Singapore is joining our destinations soon.",
};

export default function Singapore() {
  return <CountryTemplate country={singapore} />;
}
