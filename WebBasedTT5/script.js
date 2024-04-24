const lecturers = ['Lecturer A', 'Lecturer B', 'Lecturer C', 'Lecturer D', 'Lecturer E'];
const subjects = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'];
const venues = ['Venue 1', 'Venue 2', 'Venue 3', 'Venue 4', 'Venue 5', 'Venue 6', 'Venue 7', 'Venue 8'];
const classGroups = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5', 'Group 6', 'Group 7', 'Group 8'];

function generateTimetables() {
  const timetablesDiv = document.getElementById('timetables');
  timetablesDiv.innerHTML = '';

  classGroups.forEach(group => {
    const timetable = generateTimetable(group);
    const timetableDiv = document.createElement('div');
    timetableDiv.classList.add('timetable');
    timetableDiv.innerHTML = `<h3>${group}</h3>`;
    timetableDiv.appendChild(createTimetableHTML(timetable));
    timetablesDiv.appendChild(timetableDiv);
  });
}

function generateTimetable(group) {
  const timetable = [];

  for (let day = 1; day <= 5; day++) { // 5 days in a week
    const dailySchedule = [];

    for (let period = 1; period <= 7; period++) { // 7 periods in a day
      const lecturer = getRandomElement(lecturers);
      const subject = getRandomElement(subjects);
      const venue = getRandomVenue(dailySchedule);
      
      dailySchedule.push({ period, lecturer, subject, venue });

      // For groups that can have a subject for two consecutive periods
      if (period < 7 && (period % 2 !== 0)) {
        dailySchedule.push({ period: period + 1, lecturer, subject, venue });
      }
    }

    timetable.push({ day, schedule: dailySchedule });
  }

  return timetable;
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomVenue(dailySchedule) {
  let randomVenue = getRandomElement(venues);
  
  // Ensure the venue is not already assigned to another group in the same period
  while (dailySchedule.some(entry => entry.venue === randomVenue)) {
    randomVenue = getRandomElement(venues);
  }

  return randomVenue;
}

function createTimetableHTML(timetable) {
  const table = document.createElement('table');
  const headerRow = table.insertRow();
  headerRow.classList.add('timetable-header');
  headerRow.insertCell().textContent = 'Day';

  for (let period = 1; period <= 7; period++) {
    const cell = headerRow.insertCell();
    cell.textContent = `Period ${period}`;
  }

  timetable.forEach(day => {
    const row = table.insertRow();
    row.insertCell().textContent = `Day ${day.day}`;

    day.schedule.forEach(entry => {
      const cell = row.insertCell();
      cell.classList.add('period');
      cell.textContent = `${entry.subject}\n${entry.lecturer}\n${entry.venue}`;
    });
  });

  return table;
}
