const endDate = new Date(" 18 jan, 2025 16:00:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
  const now = new Date().getTime();

  const distanceCovered = now - startDate; /* which distance are completed */
  const distancePending = endDate - now; /* remaning destiance */
  const days = Math.floor(
    distancePending / (24 * 60 * 60 * 1000)
  ); 
  /* for days */
  const hours = Math.floor(
    (distancePending % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000) // for hours
  );
  const min = Math.floor((distancePending % (60 * 60 * 1000)) / (60 * 1000)); // for minutes
  const secs = Math.floor((distancePending % (60 * 1000)) / 1000); // for seconds

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = secs;

  // For progress bar
  const totaldistance = endDate - startDate;
  const Percentagedistance = (distanceCovered / distancePending) * 100;
  document.getElementById("progress-bar").style.width =
    Percentagedistance + "%";
  // if value in negative
  if (distancePending < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("progress-bar").style.width = "100%";
  }
}, 1000);
