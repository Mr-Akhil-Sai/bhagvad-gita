let childrenbg1 = document.querySelector(".childrenbg1");
let childrenbg2 = document.querySelector(".childrenbg2");
let childrenImg = document.querySelector(".childrenImage");

function rotateBg() {
  childrenbg1.animate(
    [
      {
        transform: "rotate(30deg)",
      },
      {
        transform: "rotate(60deg)",
      },
    ],
    {
      duration: 200
    }
  );
  childrenbg2.animate(
    [
      {
        transform: "rotate(60deg)",
      },
      {
        transform: "rotate(30deg)",
      },
    ],
    {
      duration: 200
    }
  );
}

