'use client';

import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/hooks/useQuizStore';
import type { Gender } from '@/lib/questions';

export default function HomePage() {
  const router = useRouter();
  const setGender = useQuizStore((state) => state.setGender);
  const reset = useQuizStore((state) => state.reset);

  const handleSelect = (gender: Gender) => {
    reset();
    setGender(gender);
    router.push('/questions');
  };

  return (
    <main className="page-container">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="title">求偶智力量表</h1>
        <p className="subtitle">评估您的求偶认知能力</p>

        <div className="card mb-6">
          <div className="grid-2 gap-3">
            <button
              className="btn-option"
              onClick={() => handleSelect('male')}
            >
              <div className="text-2xl mb-1">♂</div>
              <div className="font-medium">男性</div>
            </button>

            <button
              className="btn-option"
              onClick={() => handleSelect('female')}
            >
              <div className="text-2xl mb-1">♀</div>
              <div className="font-medium">女性</div>
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-[#666666]">
          24道题 · 约5分钟
        </p>
      </div>
    </main>
  );
}
