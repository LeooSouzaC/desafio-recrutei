"use client";

import dayjs, { Dayjs } from "dayjs";

interface DeadlineStatus {
  text: string;
  color: "green" | "orange" | "red";
}

export function getDeadlineStatus({
  dateString,
  isDelivered = false,
}: {
  dateString: Dayjs;
  isDelivered?: boolean;
}): DeadlineStatus {
  const today = dayjs().startOf("day");
  const deadline = dateString.startOf("day");

  const diff = deadline.diff(today, "day");

  if (isDelivered) {
    const isLate = today.isAfter(deadline, "day");
    return isLate
      ? { text: "Entregue fora do prazo", color: "red" }
      : { text: "Entregue no prazo", color: "green" };
  }

  if (diff > 3) {
    return { text: `Faltam ${diff} dias`, color: "green" };
  } else if (diff > 0) {
    return { text: `Faltam ${diff} dias`, color: "orange" };
  } else if (diff === 0) {
    return { text: `Entrega é hoje`, color: "orange" };
  } else {
    return { text: `Atrasado há ${Math.abs(diff)} dias`, color: "red" };
  }
}
