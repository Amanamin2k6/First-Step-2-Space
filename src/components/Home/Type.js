import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Space Explorer",
          "Astronaut",
          "Space Pilot",
          "Space Pioneer",
          "Cosmic Cruiser",
          "Galaxy Explorer",
          "Star Jumper",
          "Meteor Mission",
          "Nebula Navigator",
          "Celestial Voyager",
          "Cosmic Conqueror",
          "Interstellar Voyager",
          "Moon Mapper",
          "Solar System Slinger",
          "Mars Marauder",
          "Astro Adventurer",
          "Planetary Prober",
          "Black Hole Blazer",
          "Meteor Magi",
          "Alien Adventure",
          "Supernova Sojourner"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
