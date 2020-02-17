//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import Button from "./Components/Button";
import BottomRow from "./Components/BottomRow";

import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [quarter, setQuarter] = useState(1);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const homeTouchdown = event => {
    if (Math.ceil(Math.random() * 10) <= 5) {
      setHomeScore(homeScore + 7);
    } else {
      setHomeScore(homeScore + 6);
    }
  };

  const awayTouchdown = event => {
    if (Math.ceil(Math.random() * 10) <= 5) {
      setAwayScore(awayScore + 7);
    } else {
      setAwayScore(awayScore + 6);
    }
  };

  const changeQuarter = () => {
    if(quarter === 4) {
      if(homeScore === awayScore) {
        alert(`It's a Tie!, Lets play again!`)
        setQuarter(1)
      } else {
        alert(homeScore > awayScore ? 'Lions Win! Lets play again!' : 'Tigers Win! Lets play again!')
        setQuarter(1)
      }
    } else {
      setQuarter(quarter + 1)
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">01:26</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        {/* <button>Random Quarter</button> */}
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <Button cn="homeButtons__touchdown" type={homeTouchdown}>
            Home Touchdown
          </Button>
          <Button cn="homeButtons__fieldGoal" type={() => setHomeScore(homeScore + 3)}>
            Home Field Goal
          </Button>
        </div>
        <Button cn="quarter_button" type={changeQuarter}>Quarter</Button>
        <div className="awayButtons">
          <Button cn="awayButtons__touchdown" type={awayTouchdown}>
            Away Touchdown
          </Button>
          <Button cn="awayButtons__fieldGoal" type={() => setAwayScore(awayScore + 3)}>
            Away Field Goal
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
