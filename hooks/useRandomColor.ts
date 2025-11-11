// utils/getRandomColor.ts
export function getRandomColor() {
  const colors = ["#f43f5e", "#22d3ee", "#84cc16", "#facc15", "#a855f7"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
