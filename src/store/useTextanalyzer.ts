import { create } from "zustand";
import {
  randUuid,
  randPhrase,
  randParagraph,
  randPastDate,
  randBoolean,
  randFullName,
  randEmail,
} from "@ngneat/falso";

// Define types for our analysis
type CharacterCount = Record<string, number>;
// type CharacterCountArray = Array<{ [key: string]: number }>;
type CharacterCountArray = { key: string; count: number }[];

// The function can work with either output format
function analyzeArray(data: string[]): CharacterCount;
function analyzeArray(data: string[], asArray?: true): CharacterCountArray;
function analyzeArray(
  data: string[],
  asArray?: boolean,
): CharacterCount | CharacterCountArray {
  const result: CharacterCount = {};

  for (const char of data) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  // if (asArray) {
  //   return Object.entries(result).map(([key, value]) => ({ [key]: value }));
  // }

  if (asArray) {
    return Object.entries(result).map(([key, value]) => ({
      key: key === " " ? "' '" : key,
      count: value,
    }));
  }

  return result;
}

export type useTextanalyzer_Type = {
  text: string;
  analyzedData: CharacterCountArray;
  setAnalyzeData: () => void;
  setText: (data: string) => void;
  clearText: () => void;
};

const useTextanalyzer = create<useTextanalyzer_Type>((set) => ({
  text: randPhrase(),
  setText: (data) => set((state) => ({ ...state, text: data })),
  clearText: () => set((state) => ({ ...state, text: "" })),
  analyzedData: [],
  setAnalyzeData: () =>
    set((state) => ({
      ...state,
      analyzedData: analyzeArray(state.text.split(""), true),
    })),
}));

export default useTextanalyzer;
