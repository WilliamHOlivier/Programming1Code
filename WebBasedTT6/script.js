// Sample data for demonstration
const classGroups = {
  group1: ["Math", "English", "Science", "History", "Geography"],
  group2: ["Physics", "Chemistry", "Biology", "Literature", "Art"]
};

const venues = ["Room A", "Room B", "Room C", "Room D", "Room E", "Room F", "Room G", "Room H"];

document.getElementById('generateSchedule').addEventListener('click', function() {
  const selectedGroup = document.getElementById('classGroup').value;
  const subjects = classGroups[selectedGroup];
  const schedule = generateSchedule(subjects);
  displaySchedule(schedule);
});

function generateSchedule(subjects) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const periods = ["Period 1", "Period 2", "Period 3", "Period 4", "Period 5", "Period 6", "Period 7"];

  const schedule = {};
  for (const day of days) {
    schedule[day] = {};
    for (const period of periods) {
      const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
      const randomVenue = venues[Math.floor(Math.random() * venues.length)];
      schedule[day][period] = { subject: randomSubject, venue: randomVenue };
    }
  }
  return schedule;
}

function displaySchedule(schedule) {
  const scheduleDiv = document.getElementById('schedule');
  scheduleDiv.innerHTML = '';
  for (const day in schedule) {
    const dayHeading = document.createElement('h3');
    dayHeading.textContent = day;
    scheduleDiv.appendChild(dayHeading);
    const daySchedule = schedule[day];
    for (const period in daySchedule) {
      const periodInfo = daySchedule[period];
      const periodItem = document.createElement('p');
      periodItem.textContent = `${period}: ${periodInfo.subject} (${periodInfo.venue})`;
      scheduleDiv.appendChild(periodItem);
    }
  }
}
