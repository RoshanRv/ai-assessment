interface AssessmentType {
  _id: string;
  createdAt: string;
  topic: string;
  difficulty: string;
  staffName: string;
}

interface QuestionType {
  question: string;
  options: string[];
  answer: string;
}

interface QuestionWithAnsType {
  question: string;
  correct: string;
  answer: string;
}
