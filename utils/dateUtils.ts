// Convert ISO string to readable time remaining
export function getTimeRemaining(dueDate: string): {
  days: number;
  hours: number;
  minutes: number;
  isOverdue: boolean;
} {
  const now = new Date();
  const due = new Date(dueDate);
  const diffMs = due.getTime() - now.getTime();

  const isOverdue = diffMs < 0;
  const absDiffMs = Math.abs(diffMs);

  return {
    days: Math.floor(absDiffMs / (1000 * 60 * 60 * 24)),
    hours: Math.floor((absDiffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((absDiffMs % (1000 * 60 * 60)) / (1000 * 60)),
    isOverdue,
  };
}

// Generate UI-friendly label
export function getDueDateLabel(dueDate?: string): string {
  if (!dueDate) return "No deadline";

  const { days, hours, minutes, isOverdue } = getTimeRemaining(dueDate);

  if (isOverdue) {
    return `Overdue by ${days}d ${hours}h ${minutes}m`;
  } else {
    return `Due in ${days}d ${hours}h ${minutes}m`;
  }
}
