// src/data/testData.ts

import { hollandQuestions, calculateHollandResult } from "./hollandTest";

// Интерфейс для структуры ответов пользователя
export interface StoredAnswers {
  [testId: string]: Record<number, string>;
}

// Тип для структуры вопроса
export interface Question {
  question: string;
  options: string[];
}

// Тип для теста
export interface Test {
  id: string;
  title: string;
  questions: Question[];
}

// Данные для всех тестов
export const testData: Test[] = [
  {
    id: "holland",
    title: "Тест Холланда (RIASEC)",
    questions: hollandQuestions,
  },
  {
    id: "example",
    title: "Примерный тест",
    questions: [
      { question: "Вы любите программировать?", options: ["Да", "Нет"] },
      { question: "Вам нравится работать в команде?", options: ["Да", "Нет"] },
    ],
  },
];

export { calculateHollandResult };
