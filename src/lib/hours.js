// "Open now" logic in Bogotá time, independent of the visitor's time zone.
const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

export function bogotaNow(date = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', { timeZone: 'America/Bogota', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
  return { day, minutes: Number(parts.hour) * 60 + Number(parts.minute) };
}

export function isOpen(hours, date) {
  if (!hours) return null;
  const { day, minutes } = bogotaNow(date);
  return hours.some((r) => r.days.includes(day) && minutes >= toMinutes(r.open) && minutes < toMinutes(r.close));
}
