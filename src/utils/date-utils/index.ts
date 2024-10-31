// Returns the current day of the week in Portuguese
export function getCurrentDayOfWeek(): string {
  const daysOfWeek = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  const today = new Date();
  return daysOfWeek[today.getDay()];
}

// Returns the current date in the format "31 Oct, 2024"
export function getCurrentDate(): string {
  const today = new Date();
  const day = today.getDate();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return `${day} ${month}, ${year}`;
}

// Returns the current time in the format "18h30"
export function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return `${hours}h${minutes}`;
}