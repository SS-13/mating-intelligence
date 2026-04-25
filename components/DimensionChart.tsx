'use client';

import { DimensionScore, isLowScore } from '@/lib/scoring';
import { DIMENSIONS } from '@/lib/questions';

interface DimensionChartProps {
  scores: DimensionScore[];
}

export default function DimensionChart({ scores }: DimensionChartProps) {
  return (
    <div className="w-full space-y-4">
      {scores.map((item) => {
        const dimInfo = DIMENSIONS.find((d) => d.key === item.dimension);
        const isLow = isLowScore(item);

        return (
          <div key={item.dimension} className="flex items-center justify-between py-2 border-b border-[#f0f0f0] last:border-0 mb-4">
            <span className={`text-base ${isLow ? 'font-bold text-[#111111]' : 'text-[#333333]'}`}>
              {dimInfo?.label || item.dimension}
            </span>
            <span className={`text-base font-semibold ${isLow ? 'text-[#0070f3]' : 'text-[#666666]'}`}>
              ：{item.score}
            </span>
          </div>
        );
      })}
    </div>
  );
}
