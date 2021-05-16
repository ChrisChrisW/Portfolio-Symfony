function Sobel(imageData) {
  const width = imageData.width;
  const height = imageData.height;

  const kernelX = [
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1],
  ];

  const kernelY = [
    [-1, -2, -1],
    [0, 0, 0],
    [1, 2, 1],
  ];

  let sobelData = [];
  let grayscaleData = [];

  function bindPixel(data) {
    return function (x, y, i) {
      i = i || 0;
      return data[(width * y + x) * 4 + i];
    };
  }

  let data = imageData.data;
  let pixel = bindPixel(data);
  let x, y; // axes

  // Set image on gray
  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      let red = pixel(x, y, 0);
      let green = pixel(x, y, 1);
      let blue = pixel(x, y, 2);

      let avg = (red + green + blue) / 3;
      grayscaleData.push(avg, avg, avg, 255);
    }
  }

  pixel = bindPixel(grayscaleData);

  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      let axeX =
        kernelX[0][0] * pixel(x - 1, y - 1) +
        kernelX[0][1] * pixel(x, y - 1) +
        kernelX[0][2] * pixel(x + 1, y - 1) +
        kernelX[1][0] * pixel(x - 1, y) +
        kernelX[1][1] * pixel(x, y) +
        kernelX[1][2] * pixel(x + 1, y) +
        kernelX[2][0] * pixel(x - 1, y + 1) +
        kernelX[2][1] * pixel(x, y + 1) +
        kernelX[2][2] * pixel(x + 1, y + 1);

      let axeY =
        kernelY[0][0] * pixel(x - 1, y - 1) +
        kernelY[0][1] * pixel(x, y - 1) +
        kernelY[0][2] * pixel(x + 1, y - 1) +
        kernelY[1][0] * pixel(x - 1, y) +
        kernelY[1][1] * pixel(x, y) +
        kernelY[1][2] * pixel(x + 1, y) +
        kernelY[2][0] * pixel(x - 1, y + 1) +
        kernelY[2][1] * pixel(x, y + 1) +
        kernelY[2][2] * pixel(x + 1, y + 1);

      let magnitude = Math.sqrt(axeX * axeX + axeY * axeY);

      sobelData.push(magnitude, magnitude, magnitude, 255);
    }
  }

  sobelData.toImageData = function () {
    console.log(sobelData);
    return Sobel.toImageData(sobelData, width, height);
  };

  return sobelData;
}

Sobel.toImageData = function toImageData(data, width, height) {
  let canvas = document.createElement("canvas");

  if (typeof canvas.getContext === "function") {
    let context = canvas.getContext("2d");
    let imageData = context.createImageData(width, height);
    imageData.data.set(data);
    return imageData;
  }
};
