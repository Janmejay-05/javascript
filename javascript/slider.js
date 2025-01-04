let image1 = [
  "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
  "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
  "https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg",
];
let image2 = [
  "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
  "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
  "https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg",
];
let image3 = [
  "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
  "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
  "https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg",
];

let arr = ["thor", "ironman", "Captain America"];

let img1 = document.getElementById("image1");
let img2 = document.getElementById("image2");
let img3 = document.getElementById("image3");
let para = document.querySelectorAll("#para");
let border = document.querySelectorAll("#image_cointainer");

let count = 0;

setInterval(() => {
  img1.src = image1[count];
  img2.src = image2[count];
  img3.src = image3[count];
  para[0].innerHTML = arr[count];
  para[1].innerHTML = arr[count];
  para[2].innerHTML = arr[count];

  if (count == image1.length - 1) {
    count = 0;
  } else {
    count++;
  }
}, 1500);

// console.log((para[2].innertext = arr[2]));
