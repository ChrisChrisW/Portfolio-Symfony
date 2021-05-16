// Slide 4
function copyToClipboard_phone() {
  var range = document.createRange();
  range.selectNode(document.getElementById("copier_phone"));
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();// to deselect
  alert("Numéro de téléphone copié ^-^");
}
function copyToClipboard_email() {
  var range = document.createRange();
  range.selectNode(document.getElementById("copier_email"));
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();// to deselect
  alert("Email copié ^-^");
}

