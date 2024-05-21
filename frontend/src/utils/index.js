import { surpriseMePrompts, randomNames } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}

export function getRandomName() {
  const randomIndex = Math.floor(Math.random() * randomNames.length);
  const randomName = randomNames[randomIndex];
  if (randomName === name) return getRandomName();
  return randomName;
}