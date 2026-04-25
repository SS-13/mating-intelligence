export type Gender = 'male' | 'female';

export type DimensionType =
  | 'accurate_mind_reading'
  | 'adaptive_self_deception'
  | 'adaptive_mate_deception'
  | 'effective_mating_performance'
  | 'adaptive_bias'
  | 'self_reported_success';

export interface Question {
  id: number;
  text: string;
  reverseScoring: boolean;
  dimension: DimensionType;
}

export interface Answers {
  [questionId: number]: boolean;
}

export interface DimensionConfig {
  key: DimensionType;
  label: string;
  description: string;
}

export const DIMENSIONS: DimensionConfig[] = [
  {
    key: 'accurate_mind_reading',
    label: '准确的异性读心术',
    description: '指你解读异性求偶相关想法的能力。',
  },
  {
    key: 'adaptive_self_deception',
    label: '适应性自我欺骗',
    description: '指在对自我的认识中夸大自己作为配偶的价值的倾向。',
  },
  {
    key: 'adaptive_mate_deception',
    label: '适应性配偶欺骗',
    description: '指你在多大程度上能以适应性的方式欺骗配偶。',
  },
  {
    key: 'effective_mating_performance',
    label: '有效的求偶行为表现',
    description: '指你所具备的与创造性智力有关的能力，这些能力对潜在配偶具有吸引力。',
  },
  {
    key: 'adaptive_bias',
    label: '适应性偏差',
    description: '对于男性，指的是对女性的过度性化；对于女性，指的是对承诺的怀疑态度。',
  },
  {
    key: 'self_reported_success',
    label: '自我报告的求偶成功率',
    description: '指的是根据求偶智力假设所产生的结果——你在求偶竞赛中的成功率有多高？',
  },
];

export const MALE_QUESTIONS: Question[] = [
  { id: 1, text: '我觉得大多数女人都喜欢把我当朋友。', reverseScoring: true, dimension: 'adaptive_bias' },
  { id: 2, text: '我和许多漂亮女人上过床。', reverseScoring: false, dimension: 'self_reported_success' },
  { id: 3, text: '我很擅长判断一个女人是否喜欢我。', reverseScoring: false, dimension: 'accurate_mind_reading' },
  { id: 4, text: '我绝对不是最擅长照顾孩子的人。', reverseScoring: true, dimension: 'adaptive_self_deception' },
  { id: 5, text: '我善于对于我调情的女人给出恰当的回应。', reverseScoring: false, dimension: 'adaptive_mate_deception' },
  { id: 6, text: '与我认识的其他同龄人相比，我没有那么多异性伴侣。', reverseScoring: true, dimension: 'self_reported_success' },
  { id: 7, text: '我很难向别人表达复杂的想法。', reverseScoring: true, dimension: 'effective_mating_performance' },
  { id: 8, text: '我善于捕捉女性发出的好感信号。', reverseScoring: false, dimension: 'accurate_mind_reading' },
  { id: 9, text: '在我的社交圈中，我的地位绝对处于金字塔尖。', reverseScoring: false, dimension: 'adaptive_self_deception' },
  { id: 10, text: '我怀疑自己能否赚大钱。', reverseScoring: true, dimension: 'adaptive_self_deception' },
  { id: 11, text: '只要我想，就可以让女人相信我真的是来自某个鲜为人知的欧洲国家的王子。', reverseScoring: false, dimension: 'adaptive_mate_deception' },
  { id: 12, text: '老实说，我根本不懂女人！', reverseScoring: true, dimension: 'accurate_mind_reading' },
  { id: 13, text: '女人会经常和我调情。', reverseScoring: false, dimension: 'adaptive_bias' },
  { id: 14, text: '如果一个女人看起来对我不敢兴趣，我会认为她根本不知道自己错过了什么！', reverseScoring: false, dimension: 'adaptive_self_deception' },
  { id: 15, text: '女人肯定觉得我很很有魅力。', reverseScoring: false, dimension: 'adaptive_bias' },
  { id: 16, text: '我和许多聪明的女人约会过。', reverseScoring: false, dimension: 'self_reported_success' },
  { id: 17, text: '人们说我很有幽默感。', reverseScoring: false, dimension: 'effective_mating_performance' },
  { id: 18, text: '当我对女人撒谎时，总是会被抓个正着！', reverseScoring: true, dimension: 'adaptive_mate_deception' },
  { id: 19, text: '我通常会误会别人对我有意思。', reverseScoring: true, dimension: 'accurate_mind_reading' },
  { id: 20, text: '我很难让女人看到我的优点。', reverseScoring: true, dimension: 'adaptive_mate_deception' },
  { id: 21, text: '在聚会上，我经常会讲一些吸引女人注意的故事。', reverseScoring: false, dimension: 'effective_mating_performance' },
  { id: 22, text: '我在艺术方面没有什么天赋。', reverseScoring: true, dimension: 'effective_mating_performance' },
  { id: 23, text: '我可以吸引女人，但她们很少对我产生性趣。', reverseScoring: true, dimension: 'self_reported_success' },
  { id: 24, text: '当一个女人对我微笑时，我认为她只是在表示友好。', reverseScoring: true, dimension: 'adaptive_bias' },
];

export const FEMALE_QUESTIONS: Question[] = [
  { id: 1, text: '我能分辨出一个男人对我的感情是否真心实意。', reverseScoring: false, dimension: 'accurate_mind_reading' },
  { id: 2, text: '我怀疑自己没法脚踩两条船。', reverseScoring: true, dimension: 'adaptive_mate_deception' },
  { id: 3, text: '我看起来比大多数同龄女性都年轻。', reverseScoring: false, dimension: 'adaptive_self_deception' },
  { id: 4, text: '当一个男人看起来对我不敢兴趣时，我就会很介意，认为这是自己的问题。', reverseScoring: true, dimension: 'adaptive_self_deception' },
  { id: 5, text: '长得帅的男人似乎从来不会喜欢我。', reverseScoring: true, dimension: 'self_reported_success' },
  { id: 6, text: '我很时尚，穿的衣服让我看起来很性感。', reverseScoring: false, dimension: 'adaptive_mate_deception' },
  { id: 7, text: '我吸引了许多富有的成功人士。', reverseScoring: false, dimension: 'self_reported_success' },
  { id: 8, text: '老实说，我觉得我根本不了解男人！', reverseScoring: true, dimension: 'accurate_mind_reading' },
  { id: 9, text: '男人看到我是什么样的就是什么样，我没有任何伪装。', reverseScoring: true, dimension: 'adaptive_mate_deception' },
  { id: 10, text: '如果我想让我现在的伴侣吃醋，我可以很容易地吸引其他男人的注意。', reverseScoring: false, dimension: 'adaptive_mate_deception' },
  { id: 11, text: '男人对我的想法不感兴趣。', reverseScoring: true, dimension: 'effective_mating_performance' },
  { id: 12, text: '我肯定比大多数人更有创造力。', reverseScoring: false, dimension: 'effective_mating_performance' },
  { id: 13, text: '我完全判断不出男人是否喜欢我。', reverseScoring: true, dimension: 'accurate_mind_reading' },
  { id: 14, text: '我经常被男人的笑话逗乐。', reverseScoring: false, dimension: 'effective_mating_performance' },
  { id: 15, text: '如果一个男人不想和我约会，我会认为他根本不知道自己错过了什么！', reverseScoring: false, dimension: 'adaptive_self_deception' },
  { id: 16, text: '我不太懂艺术。', reverseScoring: true, dimension: 'effective_mating_performance' },
  { id: 17, text: '我现在的男朋友会在物质方面给我花很多钱（比如买珠宝）。', reverseScoring: false, dimension: 'self_reported_success' },
  { id: 18, text: '我常常能够准确地判断男人对我的意图。', reverseScoring: false, dimension: 'accurate_mind_reading' },
  { id: 19, text: '与我认识的其他女性相比，我的身材实在不怎么样。', reverseScoring: true, dimension: 'adaptive_self_deception' },
  { id: 20, text: '聪明的男人似乎从来都不想和我约会。', reverseScoring: true, dimension: 'self_reported_success' },
  { id: 21, text: '我相信大多数男人对长期关系的兴趣实际上比他们所认为的要大得多。', reverseScoring: true, dimension: 'adaptive_bias' },
  { id: 22, text: '大多数对我的好的男人只是想上我的床。', reverseScoring: false, dimension: 'adaptive_bias' },
  { id: 23, text: '说到底，我认为大多数男人都想结婚生子。', reverseScoring: true, dimension: 'adaptive_bias' },
  { id: 24, text: '如果我和一个男人过快发生性关系，我知道他会离开我。', reverseScoring: false, dimension: 'adaptive_bias' },
];

export function getQuestions(gender: Gender): Question[] {
  return gender === 'male' ? MALE_QUESTIONS : FEMALE_QUESTIONS;
}

export function getDimensionQuestionIds(gender: Gender): Record<DimensionType, number[]> {
  const questions = getQuestions(gender);
  const result: Record<DimensionType, number[]> = {
    accurate_mind_reading: [],
    adaptive_self_deception: [],
    adaptive_mate_deception: [],
    effective_mating_performance: [],
    adaptive_bias: [],
    self_reported_success: [],
  };
  questions.forEach((q) => {
    result[q.dimension].push(q.id);
  });
  return result;
}
