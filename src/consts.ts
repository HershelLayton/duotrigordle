import playable_words from "./assets/json/playable_words.json";
import drawable_words from "./assets/json/drawable_words.json";

export const NUM_BOARDS = 32;

export const NUM_GUESSES = 37;

export const START_DATE = (() => {
  // Use this method so that the start date is offset by current timezone offset
  // Old method had problems with the start date being before DST
  const utcDate = new Date("2022-03-03T00:00:00Z").getTime();
  const offset = new Date().getTimezoneOffset();
  return new Date(utcDate + offset * 60 * 1000);
})();

export const WORDS_TARGET = playable_words

export const WORDS_VALID = new Set(drawable_words);
