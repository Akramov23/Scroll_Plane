// PARALLAX IMAGE ==========================================================================
const parallaxTimeline = new TimelineMax();

parallaxTimeline
  .to("#img1", 6, { y: -600 })
  .to("#img2", 6, { y: -500 }, '-=6')
  .to("#img3", 6, { y: -400 }, '-=6')
  .to("#img4", 6, { y: -300 }, '-=6')
  .to("#img5", 6, { y: -200 }, '-=6')
  .to("#img6", 6, { y: -100 }, '-=6')
  .to("#shadow", 6, { top: 0 }, '-=6');

const controllerParallax = new ScrollMagic.Controller();

const parallaxScene = new ScrollMagic.Scene({
  triggerElement: "#parallaxScene",
  triggerHook: 0,
  duration: "200%",
})
  .addIndicators()
  .setTween(parallaxTimeline)
  .setPin("#parallaxScene")
  .addTo(controllerParallax);

// AIRPLANE ==========================================================================
const planeTween = new TimelineLite();

planeTween.add(
  TweenLite.to("#airplane", 1, {
    ease: Power1.easeInOut,
    bezier: {
      curviness: 1.5,
      autoRotate: true,
      values: [
        { x: 150, y: -5 },
        { x: 300, y: 10 },
        { x: 700, y: 100 },
        { x: 1050, y: -100 },
        { x: 1000, y: -550 },
        { x: 400, y: -600 },
        { x: 300, y: -100 },
        { x: 700, y: 100 },
        { x: window.innerWidth, y: -550 },
      ],
    },
    width: "25rem",
  })
);

const controllerPlane = new ScrollMagic.Controller();

const planeScene = new ScrollMagic.Scene({
  triggerElement: "#planeScene",
  triggerHook: 0,
  duration: 2000,
})
  .setTween(planeTween)
  // .addIndicators()
  .setPin("#planeScene")
  .addTo(controllerPlane);

// ANIMATED SVG ==========================================================================
const svgElement = document.querySelector("svg");
const svgPath = svgElement.children[0];
const paths = [
  "M2,2 Q5,2 5,5 T8,8",
  "M3,2 Q6,2 3,5 T4,8",
  "M2,2 Q12,2 5,5 T2,8",
  "M4,2 Q8,2 5,4 T6,8",
  "M6,2 Q1.5,4 7,3 T5,6",
];
let counter = 0;

const randomColor = () => {
  let result = "#";

  for (let i = 0; i < 3; i++) {
    result += parseInt(Math.random() * 256)
      .toString(16)
      .padStart(2, 0);
  }
  return result;
};

const changeSVG = () => {
  if (svgPath.getAttribute("d") == paths[4]) {
    svgPath.setAttribute("d", paths[0]);
    counter = 0;
  } else {
    svgPath.setAttribute("d", paths[++counter]);
  }
  svgPath.setAttribute("stroke", randomColor());
};

svgElement.addEventListener("click", changeSVG);
