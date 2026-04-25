"use client";

import { useRouter } from "next/navigation";
import { useQuizStore } from "@/hooks/useQuizStore";
import {
  calculateTotalScore,
  calculateDimensionScores,
  isLowScore,
} from "@/lib/scoring";
import { getQuestions, DIMENSIONS } from "@/lib/questions";
import { NORMS } from "@/constants/norms";

export default function InterpretationPage() {
  const router = useRouter();
  const gender = useQuizStore((state) => state.gender);
  const answers = useQuizStore((state) => state.answers);
  const reset = useQuizStore((state) => state.reset);

  if (!gender) {
    router.push("/");
    return null;
  }

  const questions = getQuestions(gender);
  const totalScore = calculateTotalScore(answers, questions);
  const dimensionScores = calculateDimensionScores(answers, gender);
  const norm = NORMS[gender];

  const handleRetry = () => {
    reset();
    router.push("/");
  };

  const getLevel = (score: number, maxScore: number): string => {
    const ratio = score / maxScore;
    if (ratio >= 0.75) return "较强";
    if (ratio >= 0.5) return "中等";
    return "偏弱";
  };

  const getQuestionScore = (questionId: number): boolean | undefined => {
    return answers[questionId];
  };

  return (
    <main className="page-container">
      <div className="flex-1 flex flex-col">
        <h1 className="title">结果解读</h1>

        <div className="card mb-4">
          <div className="text-center ">
            <p className="text-sm text-[#87867f] mb-2">您的总得分</p>
            <p className="text-lg font-bold text-[#111111]">
              {totalScore}
              <span className="text-lg text-[#87867f]">
                /{questions.length}
              </span>
            </p>
            <p className="text-sm text-[#5e5d59] mt-2">
              {gender === "male" ? "男性" : "女性"}平均得分：{norm.average}
            </p>
          </div>
        </div>

        <div className="card mb-6">
          <h2 className="text-lg font-medium mb-4">各维度分析</h2>
          <div className="space-y-6">
            {dimensionScores.map((ds) => {
              const dimInfo = DIMENSIONS.find((d) => d.key === ds.dimension);
              const low = isLowScore(ds);
              const dimQuestions = questions.filter(
                (q) => q.dimension === ds.dimension,
              );

              return (
                <div
                  key={ds.dimension}
                  className="pb-4 border-b border-[#f0f0f0] last:border-0 mb-4"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span
                      className={`mh-1 text-base ${low ? "font-bold text-dim-label" : "font-medium text-dim-label"}`}
                    >
                      {dimInfo?.label || ds.dimension}
                    </span>
                    <span
                      className={`text-sm ${low ? "text-score-get font-medium" : "text-[#87867f]"}`}
                    >
                      {getLevel(ds.score, ds.maxScore)}
                    </span>
                    <span className="text-sm font-medium mb-3">
                      <span
                        className={
                          ds.score >= ds.maxScore / 2
                            ? "text-score-get"
                            : "text-score-lose"
                        }
                      >
                        {ds.score}
                      </span>
                      <span className="text-[#999]">/{ds.maxScore}</span>
                    </span>
                  </div>
                  <p className="text-sm text-dim-desc mb-2 leading-relaxed">
                    {dimInfo?.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    {dimQuestions.map((q) => {
                      const answered = getQuestionScore(q.id);
                      const isCorrect = q.reverseScoring
                        ? answered === false
                        : answered === true;

                      const bgClass =
                        answered === undefined
                          ? "bg-unanswered"
                          : isCorrect
                            ? "bg-score-get"
                            : "bg-score-lose";

                      const resultText =
                        answered === undefined
                          ? "【未答】"
                          : isCorrect
                            ? "【得1分】"
                            : "【不得分】";

                      return (
                        <div
                          key={q.id}
                          className={`pv-2 mb-1 rounded-lg ${bgClass}`}
                        >
                          <p className="text-[#333333] leading-relaxed text-xs p-2">
                            {/* <span
                              className={`font-medium ${isCorrect ? "text-score-get" : "text-score-lose"}`}
                            >
                              {resultText}
                            </span> */}
                            <span
                              className={`ml-1 ${q.reverseScoring ? "text-[#ff9944]" : "text-[#0070f3]"}`}
                            >
                              {q.reverseScoring ? "【反】" : "【正】"}
                            </span>
                            {q.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="btn btn-secondary w-full" onClick={handleRetry}>
          重新测评
        </button>
      </div>
    </main>
  );
}
