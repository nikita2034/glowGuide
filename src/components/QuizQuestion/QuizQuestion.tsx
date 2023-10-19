import React from "react";
import styles from "./QuizQuestion.module.scss";
import { useNavigate } from "react-router-dom";

interface QuestionProps {
  id: number;
  questionText: string;
  options: string[];
  numberQuestions: number;
  handleNext: () => void;
  handlePrevious: () => void;
  selectedAnswers: string | null;
  onAnswerSelect: (answer: string) => void;
  allQuestionsAnswered: boolean;
}

function QuizQuestion({
  id,
  questionText,
  options,
  numberQuestions,
  handleNext,
  handlePrevious,
  selectedAnswers,
  onAnswerSelect,
  allQuestionsAnswered,
}: QuestionProps) {
  const navigate = useNavigate();
  let titleButton;
  const questionNumbers = Array.from(
    { length: numberQuestions },
    (_, index) => index + 1
  );

  if (id === numberQuestions) {
    titleButton = "Показать результаты ";
  } else {
    titleButton = "Дальше";
  }

  let answerOption = options.map((option) => (
    <li
      key={option}
      className={styles.answer}
      onClick={() => onAnswerSelect(option)}
    >
      <div
        className={`${styles.li_circle} ${
          selectedAnswers === option ? styles.selected : ""
        }`}
      ></div>
      <div className={styles.answer_text}>{option}</div>
    </li>
  ));

  function onShowResults(allQuestionsAnswered: boolean) {
    if (allQuestionsAnswered) {
      navigate("/recommendations");
    } else {
      alert("Ответьте на все вопросы!");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.block_circles}>
        {questionNumbers.map((number) => (
          <div
            key={number}
            className={`${styles.circle} ${number === id ? styles.active : ""}`}
          ></div>
        ))}
      </div>
      <div className={styles.question_number}>
        Вопрос {id} из {numberQuestions}
      </div>
      <div className={styles.title_question}>{questionText}</div>
      <ul className={styles.block_responce}>{answerOption}</ul>
      <div className={styles.button_block}>
        {id === 1 ? null : (
          <button className={styles.back} onClick={handlePrevious}>
            Назад
          </button>
        )}
        {id === numberQuestions ? (
          <button
            className={styles.forward}
            onClick={() => onShowResults(allQuestionsAnswered)}
          >
            {titleButton}
          </button>
        ) : (
          <button className={styles.forward} onClick={handleNext}>
            {titleButton}
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizQuestion;
