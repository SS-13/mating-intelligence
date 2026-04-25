'use client';

import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/hooks/useQuizStore';
import { calculateTotalScore, calculateDimensionScores } from '@/lib/scoring';
import { getQuestions } from '@/lib/questions';
import ScoreVisualization from '@/components/ScoreVisualization';
import DimensionChart from '@/components/DimensionChart';

export default function ResultsPage() {
  const router = useRouter();
  const gender = useQuizStore((state) => state.gender);
  const answers = useQuizStore((state) => state.answers);
  const reset = useQuizStore((state) => state.reset);

  if (!gender) {
    router.push('/');
    return null;
  }

  const questions = getQuestions(gender);
  const totalScore = calculateTotalScore(answers, questions);
  const dimensionScores = calculateDimensionScores(answers, gender);

  const handleRetry = () => {
    reset();
    router.push('/');
  };

  return (
    <main className="page-container">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="title">测评完成！</h1>
        <p className="subtitle">您的求偶智力分析</p>

        <div className="card mb-6">
          <h2 className="text-lg font-medium text-center mb-4">总体得分</h2>
          <ScoreVisualization score={totalScore} gender={gender} />
        </div>

        <div className="card mb-6">
          <h2 className="text-lg font-medium mb-4">维度分析</h2>
          <DimensionChart scores={dimensionScores} />
        </div>

        <div className="flex gap-4">
          <button
            className="btn btn-secondary flex-1"
            onClick={handleRetry}
          >
            重新测评
          </button>
          <button
            className="btn btn-primary flex-1"
            onClick={() => router.push('/interpretation')}
          >
            查看解读
          </button>
        </div>
      </div>
    </main>
  );
}
