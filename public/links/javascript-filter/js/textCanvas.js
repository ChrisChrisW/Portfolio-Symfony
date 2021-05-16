let text = document.getElementById("text");

function textCanvas(oCtx, nWidth, nHeight) {
  oCtx.font = "50px serif";
  oCtx.textAlign = "center";
  let textValue = text.value;
  oCtx.strokeText(textValue, nWidth / 2, (nHeight * 3) / 4);
}
