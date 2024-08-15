import React from "react";
import Landing from "./components/Landing/Landing";
import Stats from "./components/Landing/Stats";

const Home = () => {
  return (
    <section className='h-full'>
      <Landing />
      <Stats />
    </section>
  );
};

export default Home;
