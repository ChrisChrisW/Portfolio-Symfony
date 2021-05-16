/*
  FILTERS
*/
function CustomFilter(typeFilter) {
  let Images = document.getElementsByClassName("photo"),
    nImgsLen = Images.length,
    oCanvas = document.createElement("canvas"),
    oCtx = oCanvas.getContext("2d");

  for (
    let nWidth, nHeight, oImgData, nPixel, aPix, nPixLen, nImgId = 0;
    nImgId < nImgsLen;
    nImgId++
  ) {
    oColorImg = Images[nImgId];
    nWidth = oColorImg.offsetWidth;
    nHeight = oColorImg.offsetHeight;
    oCanvas.width = nWidth;
    oCanvas.height = nHeight;

    canvasFilter(typeFilter, oCtx);

    canvasDrawerFilter(typeFilter, oCtx, oColorImg, nWidth, nHeight);

    if (typeFilter == "text") textCanvas(oCtx, nWidth, nHeight);

    oImgData = oCtx.getImageData(0, 0, nWidth, nHeight);
    aPix = oImgData.data;
    nPixLen = aPix.length;

    if (typeFilter == "sobel") oImgData = Sobel(oImgData).toImageData(); // méthode sobel

    filter(typeFilter, nPixel, nPixLen, aPix, oImgData);

    oCtx.putImageData(oImgData, 0, 0);

    let img = document.getElementById("photo");
    img.src = oCanvas.toDataURL();

    oCtx.clearRect(0, 0, nWidth, nHeight);

    let exportImage = document.getElementById("expoter");
    exportImage.href = img.src;
    exportImage.download = "filter_photo";
    exportImage.children[0].classList.add("active");
  }
}
