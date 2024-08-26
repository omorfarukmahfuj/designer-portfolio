var timeline = gsap.timeline();

timeline.from("nav h3", {
  y: -30,
  opacity: 0,
  delay: 0.4,
  duration: 1,
  stagger: 0.1
})

timeline.from("main h1", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4
})

timeline.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.7,
  stagger: 0.5
})

timeline.from("footer p", {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.1
})

const bgAudio = document.getElementById("bgAudio");
const toggleAudioBtn = document.getElementById("toggleAudio");

toggleAudioBtn.addEventListener("click", function () {
  if (bgAudio.paused) {
    bgAudio.play();
    toggleAudioBtn.classList.remove("fa-circle-play");
    toggleAudioBtn.classList.add("fa-circle-pause");
  } else {
    bgAudio.pause();
    toggleAudioBtn.classList.remove("fa-circle-pause");
    toggleAudioBtn.classList.add("fa-circle-play");
  }
});
