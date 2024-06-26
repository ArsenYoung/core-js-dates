/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date       *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#date_object *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl       *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * By the passed date returns the number of seconds elapsed since 00:00 01.01.1970.
 *
 * @param {string} date - date and time.
 * @return {number} milliseconds in timestamp.
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 0
 * '04 Dec 1995 00:12:00 UTC' => 818035920000
 */
function dateToTimestamp(date) {
  return new Date(date).getTime();
}

/**
 * Returns the time in hh:mm:ss format from the received date.
 *
 * @param {Date} date - date.
 * @return {string} time in hh:mm:ss format.
 *
 * @example:
 * Date(2023, 5, 1, 8, 20, 55) => '08:20:55'
 * Date(2015, 10, 20, 23, 15, 1) => '23:15:01'
 */
function getTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = `0${date.getHours()}`;
  }
  if (minutes < 10) {
    minutes = `0${date.getMinutes()}`;
  }
  if (seconds < 10) {
    seconds = `0${date.getSeconds()}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}

/**
 * Returns the name of the day of the week for a given date string.
 *
 * @param {string} date - date and time.
 * @return {string} the name of the day of the week
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 'Thursday'
 * '03 Dec 1995 00:12:00 UTC' => 'Sunday'
 * '2024-01-30T00:00:00.000Z' => 'Tuesday'
 */
function getDayName(date) {
  const dateObj = new Date(date);
  let day;
  if (date.includes('UTC')) {
    day = dateObj.getUTCDay();
  } else {
    day = dateObj.getDay();
  }
  let result = '';
  switch (day) {
    case 0: {
      result = 'Sunday';
      break;
    }
    case 1: {
      result = 'Monday';
      break;
    }
    case 2: {
      result = 'Tuesday';
      break;
    }
    case 3: {
      result = 'Wednesday';
      break;
    }
    case 4: {
      result = 'Thursday';
      break;
    }
    case 5: {
      result = 'Friday';
      break;
    }
    case 6: {
      result = 'Saturday';
      break;
    }
    default: {
      break;
    }
  }
  return result;
}

/**
 * Returns the date of the next Friday from a given date.
 *
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
 * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
 * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
 */
function getNextFriday(date) {
  const currentDate = date;
  const currentDay = date.getDay();
  const fridayNumber = 5;
  const daysInWeek = 7;
  if (currentDay < fridayNumber) {
    return new Date(
      currentDate.setDate(currentDate.getDate() + (fridayNumber - currentDay))
    );
  }
  return new Date(
    currentDate.setDate(
      currentDate.getDate() + daysInWeek - (currentDay - fridayNumber)
    )
  );
}

/**
 * Returns the number of days in a specified month and year.
 *
 * @param {number} month - The month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The year as a four-digit number.
 * @return {number}
 *
 * @example:
 * 1, 2024 => 31
 * 2, 2024 => 29
 */

function isMyLeapYear(year) {
  if (year % 4 === 0 && year !== 100) {
    if (year % 400 !== 0) {
      return true;
    }
  }
  if (year % 400 === 0) {
    return true;
  }

  return false;
}

function getCountDaysInMonth(month, year) {
  let result;
  switch (month) {
    case 1: {
      result = 31;
      break;
    }
    case 2: {
      if (isMyLeapYear(year)) {
        result = 29;
        break;
      }
      result = 28;
      break;
    }
    case 3: {
      result = 31;
      break;
    }
    case 4: {
      result = 30;
      break;
    }
    case 5: {
      result = 31;
      break;
    }
    case 6: {
      result = 30;
      break;
    }
    case 7: {
      result = 31;
      break;
    }
    case 8: {
      result = 31;
      break;
    }
    case 9: {
      result = 30;
      break;
    }
    case 10: {
      result = 31;
      break;
    }
    case 11: {
      result = 30;
      break;
    }
    case 12: {
      result = 31;
      break;
    }
    default: {
      break;
    }
  }
  return result;
}

/**
 * Returns the total number of days between two dates, including both the start and end dates.
 *
 * @param {string} dateStart - The start date of the period in ISO 8601 format.
 * @param {string} dateEnd - The end date of the period in ISO 8601 format.
 * @return {number} - The total count of days in the period.
 *
 * @example:
 * '2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z'  => 2
 * '2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z'  => 12
 */
function getCountDaysOnPeriod(dateStart, dateEnd) {
  const dateObjStart = new Date(dateStart);
  const dateObjEnd = new Date(dateEnd);
  const delta = dateObjEnd.getTime() - dateObjStart.getTime();
  const days = Math.floor(delta / (24 * 3600 * 1000)) + 1;
  return days;
}

/**
 * Returns true if a given date is within a specified range, including both the start and end dates.
 *
 * @typedef {{
 * start: string, // The start date in ISO 8601 format (e.g., 'YYYY-MM-DD').
 * end: string    // The end date in ISO 8601 format.
 * }} DatePeriod
 *
 * @param {string} date - The date to check, in ISO 8601 format.
 * @param {DatePeriod} period - The period to check against.
 * @return {boolean} - True if the date is within the range, false otherwise.
 *
 * @example:
 * '2024-02-01', { start: '2024-02-02', end: '2024-03-02' } => false
 * '2024-02-02', { start: '2024-02-02', end: '2024-03-02' } => true
 * '2024-02-10', { start: '2024-02-02', end: '2024-03-02' } => true
 */
function isDateInPeriod(date, period) {
  const dateObj = new Date(date);
  const dateStartPeriod = new Date(period.start);
  const dateEndPeriod = new Date(period.end);

  if (
    dateObj.getTime() >= dateStartPeriod.getTime() &&
    dateObj.getTime() < dateEndPeriod.getTime()
  ) {
    return true;
  }
  return false;
}

/**
 * Returns the date formatted in 'M/D/YYYY, hh:mm:ss a'.
 *
 * @param {string} date - The date to be formatted, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:mm:ss.sssZ').
 * @return {string} - The date formatted in 'Month/Day/Year, Hour:Minute:Second AM/PM'.
 *
 * @example:
 * '2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
 * '1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
 * '2010-12-15T22:59:00.000Z' => '12/15/2010, 10:59:00 PM'
 */
function getTimePostfix(dateObj) {
  const hours = dateObj.getUTCHours();
  if (hours >= 12) {
    return 'PM';
  }
  return 'AM';
}

function formatDate(date) {
  const dateObj = new Date(date);
  const timePostfix = getTimePostfix(dateObj);
  let dateMins = dateObj.getUTCMinutes();
  let dateSecs = dateObj.getUTCSeconds();
  let dateHours = dateObj.getUTCHours();
  if (dateHours > 12) {
    dateHours %= 12;
  }
  if (dateMins < 10) {
    dateMins = `0${dateMins}`;
  }
  if (dateSecs < 10) {
    dateSecs = `0${dateSecs}`;
  }
  const resDate = `${dateObj.getMonth() + 1}/${dateObj.getUTCDate()}/${dateObj.getFullYear()}`;
  const resTime = `${dateHours}:${dateMins}:${dateSecs} ${timePostfix}`;
  return `${resDate}, ${resTime}`;
}

/**
 * Returns the total number of weekend days (Saturdays and Sundays) in a specified month and year.
 *
 * @param {number} month - The source month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The source year as a four-digit number.
 * @return {number} - The total count of weekend days in the month.
 *
 * @example:
 * 5, 2022 => 9
 * 12, 2023 => 10
 * 1, 2024 => 8
 */
function getCountWeekendsInMonth(month, year) {
  const date = new Date(year, month - 1);
  let daysInMonth = getCountDaysInMonth(month, year);
  let currentDay = date.getDay();
  const countWeekendDays = 2;
  const countWorkingDays = 5;
  const saturday = 6;
  const sunday = 0;
  let totalCountWeekendDays = 0;
  while (daysInMonth > 0) {
    if (currentDay === sunday) {
      totalCountWeekendDays += countWeekendDays - 1;
      daysInMonth -= countWorkingDays + 1;
      currentDay = saturday;
    } else if (currentDay === saturday) {
      if (daysInMonth === 1) {
        totalCountWeekendDays += countWeekendDays - 1;
      } else {
        totalCountWeekendDays += countWeekendDays;
      }
      daysInMonth -= countWeekendDays + countWorkingDays;
    } else {
      daysInMonth -= saturday - currentDay;
      currentDay = saturday;
    }
  }
  return totalCountWeekendDays;
}

/**
 * Returns the week number of the year for a given date.
 * The first week is the one that falls on January 1.
 * The first day of the week is Monday.
 *
 * @param {Date} date - The date for which to find the week number.
 * @return {number} - The week number of the year.
 *
 * @example:
 * Date(2024, 0, 3) => 1
 * Date(2024, 0, 31) => 5
 * Date(2024, 1, 23) => 8
 */
function getWeekNumberByDate(date) {
  const year = date.getFullYear();
  let startDay = new Date(year, 0).getDay();
  if (startDay === 0) {
    startDay = 7;
  }
  let countDays = date.getDate() + startDay - 1;
  for (let i = 0; i < date.getMonth(); i += 1) {
    countDays += getCountDaysInMonth(i + 1, year);
  }
  return Math.ceil(countDays / 7);
}

/**
 * Returns the date of the next Friday the 13th from a given date.
 * Friday the 13th is considered an unlucky day in some cultures.
 *
 * @param {Date} date - The starting date to search from.
 * @return {Date} - The date of the next Friday the 13th.
 *
 * @example:
 * Date(2024, 0, 13) => Date(2024, 8, 13)
 * Date(2023, 1, 1) => Date(2023, 9, 13)
 */
function getNextFridayThe13th(date) {
  const currentDate = date;
  const startDay = currentDate.getDay();
  if (startDay !== 5) {
    currentDate.setDate(currentDate.getDate() + 5 - startDay);
  }
  while (currentDate.getDate() !== 13) {
    currentDate.setDate(currentDate.getDate() + 7);
  }
  return currentDate;
}

/**
 * Returns the quarter of the year for a given date.
 *
 * @param {Date} date - The date for which to find the quarter.
 * @return {number} - The quarter of the year (1-4).
 *
 * @example:
 * Date(2024, 1, 13) => 1
 * Date(2024, 5, 1) => 2
 * Date(2024, 10, 10) => 4
 */
function getQuarter(date) {
  const month = date.getUTCMonth();
  let quarter;
  if (month >= 0 && month < 3) {
    quarter = 1;
  } else if (month >= 3 && month < 6) {
    quarter = 2;
  } else if (month >= 6 && month < 9) {
    quarter = 3;
  } else {
    quarter = 4;
  }
  return quarter;
}

/**
 * Generates an employee's work schedule within a specified date range, based on a pattern of working and off days.
 * The start and end dates of the period are inclusive.
 *
 * @typedef {{
 * start: string, // The start date in 'DD-MM-YYYY' format.
 * end: string    // The end date in 'DD-MM-YYYY' format.
 * }} DatePeriod
 *
 * @param {DatePeriod} period - The start and end dates of the period.
 * @param {number} countWorkDays - The number of consecutive working days.
 * @param {number} countOffDays - The number of consecutive days off.
 * @return {Array<string>} - An array of dates in 'DD-MM-YYYY' format representing the work schedule.
 *
 * @example:
 * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
 * { start: '01-01-2024', end: '10-01-2024' }, 1, 1 => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
 */

function formatDateString(str) {
  const arr = str.split('-');
  return `${arr[1]}-${arr[0]}-${arr[2]}`;
}

function getStringWorkDate(date) {
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  const year = date.getFullYear().toString();

  if (day.length === 1) day = 0 + day;
  if (month.length === 1) month = 0 + month;
  return `${day}-${month}-${year}`;
}

function getWorkSchedule(period, countWorkDays, countOffDays) {
  const startDate = new Date(formatDateString(period.start));
  const endDate = new Date(formatDateString(period.end));
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const schedule = [];
  let totalCountOfDays =
    (endDate.getTime() - startDate.getTime()) / millisecondsPerDay + 1;
  let isFirstWorkDay = true;

  if (totalCountOfDays <= 0 || countWorkDays < 0) {
    return schedule;
  }

  while (totalCountOfDays > 0) {
    let i = 0;
    while (i < countWorkDays) {
      if (isFirstWorkDay) {
        isFirstWorkDay = false;
        schedule.push(period.start);
      } else {
        startDate.setDate(startDate.getDate() + 1);
        const workDayToSchedule = getStringWorkDate(startDate);
        schedule.push(workDayToSchedule);
      }
      i += 1;
      totalCountOfDays -= 1;
      if (totalCountOfDays === 0) break;
    }
    startDate.setDate(startDate.getDate() + countOffDays);
    totalCountOfDays -= countOffDays;
  }
  return schedule;
}

/**
 * Determines whether the year in the provided date is a leap year.
 * A leap year is a year divisible by 4, but not by 100, unless it is also divisible by 400.
 *
 * @param {Date} date - The date from which the year will be checked.
 * @return {boolean} - True if the year is a leap year, false otherwise.
 *
 * @example:
 * Date(2024, 2, 1) => true
 * Date(2022, 2, 1) => false
 * Date(2020, 2, 1) => true
 */
function isLeapYear(date) {
  const year = date.getFullYear();
  if (year % 4 === 0 && year !== 100) {
    if (year % 400 !== 0) {
      return true;
    }
  }
  if (year % 400 === 0) {
    return true;
  }

  return false;
}

module.exports = {
  dateToTimestamp,
  getTime,
  getDayName,
  getNextFriday,
  getCountDaysInMonth,
  getCountDaysOnPeriod,
  isDateInPeriod,
  formatDate,
  getCountWeekendsInMonth,
  getWeekNumberByDate,
  getNextFridayThe13th,
  getQuarter,
  getWorkSchedule,
  isLeapYear,
};
