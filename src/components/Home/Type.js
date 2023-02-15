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
          "Meteor Missionare",
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
          "Alien Adventurer",
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
