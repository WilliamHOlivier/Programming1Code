const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const periods = 7;

function generateTimetable() {
  const timetableDiv = document.getElementById('timetable');
  timetableDiv.innerHTML = '';

  for (let group = 1; group <= 8; group++) {
    const timetable = document.createElement('div');
    timetable.classList.add('timetable');
    timetable.innerHTML = `<h3>Class Group ${group} Timetable</h3>`;

    for (let day of days) {
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');
      dayDiv.innerHTML = `<h4>${day}</h4>`;
      
      for (let period = 1; period <= periods; period++) {
        const periodDiv = document.createElement('div');
        periodDiv.classList.add('period');
        
        // Dummy content for demonstration
        periodDiv.innerHTML = `Period ${period}`;
        
        dayDiv.appendChild(periodDiv);
      }
      timetable.appendChild(dayDiv);
    }
    timetableDiv.appendChild(timetable);
  }
}
