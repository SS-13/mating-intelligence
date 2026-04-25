'use client';

import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/hooks/useQuizStore';
import { getQuestions } from '@/lib/questions';

export default function QuestionsPage() {
  const router = useRouter();
  const gender = useQuizStore((state) => state.gender);
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const answers = useQuizStore((state) => state.answers);
  const setAnswer = useQuizStore((state) => state.setAnswer);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const prevQuestion = useQuizStore((state) => state.prevQuestion);

  if (!gender) {
    router.push('/');
    return null;
  }

  const questions = getQuestions(gender);
  const question = questions[currentQuestion];
  const currentAnswer = answers[question.id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  const handleSubmit = () => {
    const unanswered = questions.findIndex((q) => answers[q.id] === undefined);
    if (unanswered !== -1) {
      const store = useQuizStore.getState();
      store.setAnswer(questions[unanswered].id, false);
      return;
    }
    router.push('/results');
  };

  return (
    <main className="page-container">
      <div className="mb-4">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-sm text-[#666666] text-right">
          {currentQuestion + 1}/{questions.length}
        </p>
      </div>

      <div className="card">
        <div className="text-center mb-4">
          <span className="text-sm text-[#666666]">
            第 {currentQuestion + 1} / {questions.length} 题
          </span>
        </div>

        <div className="question-text">
          <p className="text-base leading-relaxed text-align-left text-align-justify">
            {question.text}
          </p>
        </div>

        <div className="answer-buttons">
          <button
            className={`btn-option ${currentAnswer === true ? 'selected' : ''}`}
            onClick={() => {
              setAnswer(question.id, true);
              if (!isLastQuestion) {
                setTimeout(() => nextQuestion(), 200);
              }
            }}
          >
            <div className="font-medium">是</div>
            <div className="text-xs text-[#666666]">Yes</div>
          </button>

          <button
            className={`btn-option ${currentAnswer === false ? 'selected' : ''}`}
            onClick={() => {
              setAnswer(question.id, false);
              if (!isLastQuestion) {
                setTimeout(() => nextQuestion(), 200);
              }
            }}
          >
            <div className="font-medium">否</div>
            <div className="text-xs text-[#666666]">No</div>
          </button>
        </div>
      </div>

      <div className="flex gap-3 mt-4 ">
        <button
          className="btn btn-secondary flex-1"
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          style={{ opacity: currentQuestion === 0 ? 0.5 : 1 }}
        >
          ← 上一题
        </button>

        <button
          className="btn btn-primary flex-1"
          onClick={handleSubmit}
          disabled={!allAnswered}
          style={{ opacity: !allAnswered ? 0.5 : 1 }}
        >
          查看结果
        </button>
      </div>
    </main>
  );
}
