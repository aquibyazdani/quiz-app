import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/Error/Error";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {
    if (!name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(name);
      history.push("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <div className="settings__select">
          {error && <ErrorMessage>Please Enter Your Name !</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
