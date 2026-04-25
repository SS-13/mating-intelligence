import { Question, Answers, DimensionType } from './questions';
import { getQuestions } from './questions';
import type { Gender } from './questions';

export function calculateScore(question: Question, userAnswer: boolean): number {
  if (question.reverseScoring) {
    return userAnswer === false ? 1 : 0;
  }
  return userAnswer === true ? 1 : 0;
}

export function calculateTotalScore(answers: Answers, questions: Question[]): number {
  return questions.reduce((total, q) => {
    const userAnswer = answers[q.id];
    if (userAnswer === undefined) return total;
    return total + calculateScore(q, userAnswer);
  }, 0);
}

export interface DimensionScore {
  dimension: DimensionType;
  score: number;
  maxScore: number;
  questionIds: number[];
}

export function calculateDimensionScores(
  answers: Answers,
  gender: Gender
): DimensionScore[] {
  const questions = getQuestions(gender);
  const dimensionMap: Record<DimensionType, number[]> = {
    accurate_mind_reading: [],
    adaptive_self_deception: [],
    adaptive_mate_deception: [],
    effective_mating_performance: [],
    adaptive_bias: [],
    self_reported_success: [],
  };

  questions.forEach((q) => {
    dimensionMap[q.dimension].push(q.id);
  });

  const results: DimensionScore[] = [];
  for (const [dimension, questionIds] of Object.entries(dimensionMap)) {
    const dimensionQuestions = questions.filter((q) => questionIds.includes(q.id));
    const score = calculateTotalScore(answers, dimensionQuestions);
    results.push({
      dimension: dimension as DimensionType,
      score,
      maxScore: 4,
      questionIds,
    });
  }

  return results;
}

export function isLowScore(dimensionScore: DimensionScore): boolean {
  return dimensionScore.score <= 2;
}
