let brightness = document.getElementById("brightness");
//let blur = document.getElementById("blur");
let contrast = document.getElementById("contrast");
let saturate = document.getElementById("saturate");

function canvasFilter(typeFilter, oCtx) {
  switch (typeFilter) {
    case "sepia":
      oCtx.filter = "sepia(1)";
      break;
    case "brightness":
      oCtx.filter = `brightness(${brightness.value})`;
      break;
    case "blur":
      oCtx.filter = "blur(1px)";
      break;
    case "contrast":
      oCtx.filter = `contrast(${contrast.value}%)`;
      break;
    case "saturate":
      oCtx.filter = `saturate(${saturate.value}%)`;
      break;
    case "hue-rotate":
      oCtx.filter = `hue-rotate(${saturate.value * 45}deg)`;
      break;
    default:
      null;
      break;
  }
}
