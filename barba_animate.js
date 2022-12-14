function pageTransition() {
  var tl = gsap.timeline();

  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "buttom left",
    stagger: 0.2,
  });
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1,
  });
}

function contentAnimation() {
  var timeline = gsap.timeline();
  timeline.from(".intro", {
    duration: 1.5,
    translateY: 50,
    opacity: 0,
  });
  // timeline.to('')
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1500);
        done();
      },
      async once(data) {
        contentAnimation();
      },
      async enter(data) {
        contentAnimation();
      },
    },
  ],
});
