import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/AppHeader/AppHeader";
import Home from "./sub-component/Home/Home";
import Quiz from "./sub-component/Quiz/Quiz";
import Score from "./sub-component/Score/Score";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10`);

    setQuestions(data.results);
    console.log(data.results[0].question);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          {name === "" ? (
            "enter name to start"
          ) : (
            <Route path="/quiz">
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            </Route>
          )}
          <Route path="/score">
            <Score name={name} score={score} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
