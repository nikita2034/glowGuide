import React, { useState } from "react";
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion";
import styles from "./CosmeticQuizPage.module.scss";
import { questions } from "../../data/questions";
function CosmeticQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const allQuestionsAnswered = selectedAnswers.every(
    (answer) => answer !== null
  );

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Онлайн-подбор средств для лица</div>
      <div className={styles.desc}>
        Пройдите короткий тест и получите список наиболее подходящих для вас
        косметических продуктов
      </div>
      <QuizQuestion
        questionText={questions[currentQuestion].questionText}
        options={questions[currentQuestion].options}
        id={questions[currentQuestion].id}
        numberQuestions={questions.length}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        selectedAnswers={selectedAnswers[currentQuestion]}
        onAnswerSelect={handleAnswerSelect}
        allQuestionsAnswered={allQuestionsAnswered}
      />
    </div>
  );
}
export default CosmeticQuizPage;
