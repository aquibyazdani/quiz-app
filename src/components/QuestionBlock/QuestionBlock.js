import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import "./QuestionBlock.css";
import ErrorMessage from "../Error/Error";
import { Row, Col } from "reactstrap";

const QuestionBlock = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues === questions.length - 1) {
      history.push("/score");
    } else if (selected) {
      setCurrQues(currQues + 1);

      setSelected();
    } else setError("Please select an option first");
  };

  return (
    <div className="question">
      <div className="singleQuestion">
        <h2 className="question-line">
          <span>
            <b>Question {currQues + 1} : </b>
          </span>
          {questions[currQues].question}
        </h2>
        <Row className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <Col sm="12" md="4" className="veiw">
                <input
                  type="radio"
                  value={i}
                  key={i}
                  onClick={() => handleCheck(i)}
                  disabled={selected}
                />
                <label for={i} className="label-radio">
                  {i}
                </label>
              </Col>
            ))}
        </Row>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues === questions.length - 1 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBlock;
