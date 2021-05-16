// DIFFERENT FILTER
function filter(typeFilter, nPixel, nPixLen, aPix, Image) {
  for (nPixel = 0; nPixel < nPixLen; nPixel += 4) {
    switch (typeFilter) {
      case "blackAndWhite":
        // Pur Black and White
        let count = aPix[nPixel] + aPix[nPixel + 1] + aPix[nPixel + 2];
        let colour = 0;
        if (count > 383) colour = 255;

        aPix[nPixel] = colour;
        aPix[nPixel + 1] = colour;
        aPix[nPixel + 2] = colour;
        aPix[nPixel + 3] = 255;
        break;
      case "grayscale":
        aPix[nPixel + 2] = aPix[nPixel + 1] = aPix[nPixel] =
          (aPix[nPixel] + aPix[nPixel + 1] + aPix[nPixel + 2]) / 3;
        break;
      /*case "sepia":
                let arg = 0.393 * aPix[nPixel] + 0.769 * aPix[nPixel + 1] + 0.189 * aPix[nPixel + 2];
                aPix[nPixel] = aPix[nPixel] + arg;
                aPix[nPixel + 1] = aPix[nPixel + 1] + arg;
                aPix[nPixel + 2] = aPix[nPixel + 2] + arg;
                aPix[nPixel + 3] = 255;
                break;*/
      case "invertColor":
        aPix[nPixel] = aPix[nPixel] ^ 255;
        aPix[nPixel + 1] = aPix[nPixel + 1] ^ 255;
        aPix[nPixel + 2] = aPix[nPixel + 2] ^ 255;
        break;
      default:
        null;
        break;
    }
  }
}
