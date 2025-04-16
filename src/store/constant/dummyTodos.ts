import {
  randUuid,
  randPhrase,
  randParagraph,
  randPastDate,
  randBoolean,
  randFullName,
  randEmail,
} from "@ngneat/falso";
import { TODO, TodoStatus, Priority } from "../useTodo";

// Custom implementation for randArrayElement
const randArrayElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Custom implementation for randSubset
const randSubset = <T>(array: T[], size: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
};

// Custom implementation for generating a future date from a specific date
const generateFutureDate = (from: Date): Date => {
  const futureTimestamp =
    from.getTime() + Math.random() * (365 * 24 * 60 * 60 * 1000); // Up to 1 year in the future
  return new Date(futureTimestamp);
};

const TAGS = [
  "work",
  "urgent",
  "home",
  "personal",
  "bugfix",
  "frontend",
  "backend",
];

export const generateDummyTodos = (count = 20): TODO[] => {
  return Array.from({ length: count }).map((): TODO => {
    const createdAt = randPastDate().toISOString();
    const isCompleted = randBoolean();
    const compleatedAt = isCompleted
      ? generateFutureDate(new Date(createdAt)).toISOString() // Use custom future date generator
      : null;
    const deletedAt = randBoolean()
      ? generateFutureDate(new Date(createdAt)).toISOString() // Use custom future date generator
      : null;

    return {
      id: randUuid(),
      title: randPhrase(),
      description: randParagraph(),
      tags: randSubset(TAGS, Math.floor(Math.random() * 3) + 1),
      status: randArrayElement(Object.values(TodoStatus)),
      priority: randArrayElement(Object.values(Priority)),
      createdAt,
      compleatedAt,
      deletedAt,
      subtasks: [],
      assignee: randBoolean()
        ? {
            id: randUuid(),
            name: randFullName(),
            email: randEmail(),
          }
        : undefined,
      isArchived: randBoolean(),
    };
  });
};
