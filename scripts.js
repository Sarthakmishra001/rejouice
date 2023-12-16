
function cursorEffect() {

  var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
  });
});
page1Content.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 1,
    obesity: 1,
  });
});
page1Content.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 0,
    obesity: 0,
  });
});

}
cursorEffect()

// function page2Animation () {
//   gsap.from ("#main h1", {
//     y: 120,
//     stagger: 0.2,
//     duration: 2,
//     scrollTrigger: {
//       trigger: "#page2",
//       scroller: "#main",
//       start: "top 47%",
//       end: "top 46%",
//       scrub: 2
//     }
//   })
// }
// page2Animation()




// function cursorEffect2() {
  
//   var page5 = document.querySelector("#page5");
// var cursor2 = document.querySelector("#cursor2");

// page5.addEventListener("mousemove", function (det) {
//   gsap.to("#cursor2" , {
//     x: det.x,
//     y: det.y,
//   });
// });

// page5.addEventListener("mouseenter", function () {
//   gsap.to("#cursor2" , {
//     scale: 1,
//     obesity: 1,
//   });
// });

// page5.addEventListener("mouseleave", function () {
//   gsap.to("#cursor2", {
//     scale: 0,
//     obesity: 0,
//   });
// });

// }
// cursorEffect2()

