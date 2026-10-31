import { useEffect, useState } from 'react';
import { SITE_CONTENT } from '../data/content';

export interface OpenStatus {
  /** Índice (em visit.hours) da linha de hoje */
  todayIndex: number;
  isOpen: boolean;
  label: string;
}

const WEEKDAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function compute(now = new Date()): OpenStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Bahia',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '0';
  const day = WEEKDAYS[get('weekday')] ?? 0;
  const hour = (Number(get('hour')) % 24) + Number(get('minute')) / 60;

  const rows = SITE_CONTENT.visit.hours;
  const todayIndex = rows.findIndex((r) => r.days.includes(day));
  const today = rows[todayIndex];

  if (today?.open && hour >= today.open[0] && hour < today.open[1]) {
    return { todayIndex, isOpen: true, label: `Aberto · fecha às ${today.open[1]}h` };
  }
  if (today?.open && hour < today.open[0]) {
    return { todayIndex, isOpen: false, label: `Fechado · abre às ${today.open[0]}h` };
  }
  return { todayIndex, isOpen: false, label: 'Fechado agora' };
}

export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(() => compute());
  useEffect(() => {
    const id = window.setInterval(() => setStatus(compute()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return status;
}
