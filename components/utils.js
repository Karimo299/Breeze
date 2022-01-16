export function getStringDay(date) {
  const months = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return months[date.getDay()];
}

export function getStringMonth(date) {
  const months = [
    "Janauary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[date.getMonth()];
}

export function captilize(str) {
  let output = "";
  const strArr = str.split(" ");
  for (const i in strArr) {
    output += `${strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)} `;
  }
  return output;
}
