import React from "react";
import CountryTemplate from "../components/CountryTemplate";

const thailand = {
  name: "Thailand",
  flag: "th",
  tint: "linear-gradient(135deg,#1f3a5f,#142840)",
  lede: "International programmes in Bangkok and beyond — close to home, with a familiar culture. We're opening up Thailand for our students soon.",
};

export default function Thailand() {
  return <CountryTemplate country={thailand} />;
}
