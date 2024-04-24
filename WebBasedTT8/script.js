document.getElementById('generateBtn').addEventListener('click', generateTimetables);

function generateTimetables() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periods = 7;

  const timetablesContainer = document.getElementById('timetables');
  timetablesContainer.innerHTML = '';

  for (let group = 1; group <= 8; group++) {
    const timetable = generateTimetable(days, periods);
    const timetableHtml = `
      <h3>Class Group ${group} Timetable</h3>
      <table>
        <tr>
          <th>Day</th>
          ${Array.from({ length: periods }, (_, i) => `<th>Period** ${i + 1}</th>`).join('')}
        </tr>
        ${days.map(day => `
          <tr>
            <td>${day}</td>
            ${timetable[day].map(subject => `<td>${subject}</td>`).join('')}
          </tr>
        `).join('')}
      </table>
    `;
    timetablesContainer.innerHTML += timetableHtml;
  }
}

function generateTimetable(days, periods) {
  const subjects = ['Maths', 'Physics', 'Chemistry', 'Biology', 'History'];
  const lecturers = ['Lecturer A', 'Lecturer B', 'Lecturer C', 'Lecturer D', 'Lecturer E'];
  const venues = ['Venue A', 'Venue B', 'Venue C', 'Venue D', 'Venue E', 'Venue F', 'Venue G', 'Venue H'];

  const timetable = {};
  days.forEach(day => {
    timetable[day] = Array.from({ length: periods }, () => '');
  });

  const assignedVenues = new Set();
  const assignedLecturers = new Set();

  for (let period = 0; period < periods; period++) {
    for (let day of days) {
      const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
      const randomLecturer = getRandomElementExcluding(lecturers, assignedLecturers);
      const randomVenue = getRandomElementExcluding(venues, assignedVenues);

      timetable[day][period] = `${randomSubject} <br> (${randomLecturer}) <br> ${randomVenue}`;

      assignedVenues.add(randomVenue);
      assignedLecturers.add(randomLecturer);
    }
  }

  return timetable;
}

function getRandomElementExcluding(array, exclusionSet) {
  const availableOptions = array.filter(item => !exclusionSet.has(item));
  return availableOptions[Math.floor(Math.random() * availableOptions.length)];
}
