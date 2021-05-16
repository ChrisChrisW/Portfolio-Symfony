// FILTRES DE RECADRAGE ET ROTATION
function canvasDrawerFilter(typeFilter, oCtx, oColorImg, nWidth, nHeight) {
  switch ((typeFilter, oCtx, oColorImg, nWidth, nHeight)) {
    case "recadrerPlusWidth":
      oCtx.drawImage(oColorImg, 0, 0, nWidth + 20, nHeight);
      break;
    case "recadrerMoinsWidth":
      oCtx.drawImage(oColorImg, 0, 0, nWidth - 20, nHeight);
      break;
    case "recadrerPlusHeight":
      oCtx.drawImage(oColorImg, 0, 0, nWidth, nHeight + 20);
      break;
    case "recadrerMoinsHeight":
      oCtx.drawImage(oColorImg, 0, 0, nWidth, nHeight - 20);
      break;
    case "rotationHorizontale":
      oCtx.translate(nWidth, 0);
      oCtx.scale(-1, 1);
      oCtx.drawImage(oColorImg, 0, 0, nWidth, nHeight);
      break;
    case "rotationVerticale":
      oCtx.translate(nWidth / 2, nHeight / 2);
      oCtx.rotate(Math.PI);
      oCtx.translate(-(nWidth / 2), -(nHeight / 2));
      oCtx.drawImage(oColorImg, 0, 0, nWidth, nHeight);
      break;
    default:
      oCtx.drawImage(oColorImg, 0, 0, nWidth, nHeight);
      break;
  }
}
