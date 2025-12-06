/* Add this JS at end of body or in a script file.
   It animates counters on page load from 0 to the data-target value.
*/
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.counter');

  // duration in ms for the count animation
  const duration = 1400; // change if you want faster/slower

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
    // animate using requestAnimationFrame for smoothness
    let start = null;
    const initial = 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      // easeOutQuad easing
      const t = Math.min(progress / duration, 1);
      const ease = 1 - (1 - t) * (1 - t); // easeOutQuad
      const current = Math.floor(initial + (target - initial) * ease);
      counter.textContent = current.toLocaleString(); // adds comma separators

      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        counter.textContent = target.toLocaleString(); // ensure exact final number
      }
    }

    window.requestAnimationFrame(step);
  });
});
