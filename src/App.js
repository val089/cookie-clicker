import React, { useEffect } from "react";
import { connect } from "react-redux";
import { levelInc, clickInc, reset, addToAwards } from "./redux/redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Shop from "./pages/Shop";
import data from "./data/data";

const App = (props) => {
  const {
    level,
    clickedValue,
    clickInc,
    levelInc,
    reset,
    awards,
    addToAwards
  } = props;

  useEffect(() => {
    if (clickedValue === 10 * Math.pow(2, level - 1)) {
      levelInc();
    }
  }, [clickedValue, level, levelInc]);

  const startClick = () => {
    clickInc();
    if (clickedValue === 0) {
      addItem("For The Good Start!");
    }
    if (clickedValue === 19) {
      addItem("20 clicks!");
    }
    if (clickedValue === 99) {
      addItem("100 clicks!");
    }
  };

  function addItem(name) {
    const item = data.find((item) => item.name === name);
    addToAwards(item);
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              level={level}
              clickedValue={clickedValue}
              clickInc={startClick}
              reset={reset}
              awards={awards}
            />
          </Route>
          <Route path="/achievements">
            <Achievements awards={awards} />
          </Route>
          <Route path="/shop">
            <Shop title="Available Soon" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapDispatchToProps = {
  levelInc,
  clickInc,
  reset,
  addToAwards
};

const mapStateToProps = (state) => {
  return {
    clickedValue: state.counter.clicked,
    level: state.counter.level,
    awards: state.counter.awards
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
