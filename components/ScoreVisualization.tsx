"use client";

import { Gender } from "@/lib/questions";
import { NORMS } from "@/constants/norms";

interface ScoreVisualizationProps {
  score: number;
  gender: Gender;
}

export default function ScoreVisualization({
  score,
  gender,
}: ScoreVisualizationProps) {
  const norm = NORMS[gender];
  const maxScore = 24;
  const percent = (score / maxScore) * 100;

  return (
    <div className="w-full space-y-4">
      <div>
        <div className="flex justify-between  font-medium text-center mb-4">
          <span className="text-lg">{score}分</span>
        </div>
        <div className="h-3 bg-[#e5e5e5] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0070f3] rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-center">
        <span className="text-[#999]">平均得分</span>
        <span className="text-[#666666] font-medium">{norm.average}分</span>
      </div>
    </div>
  );
}
