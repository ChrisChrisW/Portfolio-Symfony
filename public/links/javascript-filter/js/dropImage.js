/*
  DROP IMAGE
*/
let img = document.getElementById("photo");
let svg = document.getElementsByClassName("svg-circleplus");

let dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragAndDrop, false);
dropbox.addEventListener("dragleave", dragAndDrop, false);
dropbox.addEventListener("drop", dropFile, false);

function dragAndDrop(e) {
  e.stopPropagation();
  e.preventDefault();

  if (e.type == "dragenter")
    img.style.background = "radial-gradient(#C0C0C0, #808080 65%)";
  else img.style.background = "#e7f0ef";
}

function dropFile(e) {
  dragAndDrop(e);

  let files = e.dataTransfer.files;
  handleFiles(files);
}

function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    const imageType = /^image\//;

    if (!imageType.test(file.type)) {
      continue;
    }

    img.style.background = "white";
    img.src = window.URL.createObjectURL(file);
    img.onload = function () {
      window.URL.revokeObjectURL(this.src);
    };

    let reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
}
