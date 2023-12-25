let thalaPlayed = false;
let hitmanPlayed = false;
let kohliPlayed = false;

function checker() {
  let word = document.getElementById("word").value;
  let video1 = document.getElementById("thala");
  let video2 = document.getElementById("hitman");
  let video3 = document.getElementById("king");
  let topic1 = document.getElementById("dhoni");
  let topic2 = document.getElementById("rohit");
  let topic3 = document.getElementById("kohli");

  if (word.length === 0) {
    alert(`ENTER YOUR WORD AGAIN`);
  } else if (word.length === 7 && !thalaPlayed) {
    if (video1) {
      thalaPlayed = true;
      topic1.style.display = "block";
      video1.style.display = "block";
      video1.play();
      video1.addEventListener("ended", function () {
        console.log("Video ended");
        location.reload(); 
      });
    }
  } else if (word.length === 9 && !hitmanPlayed) {
    if (video2) {
      hitmanPlayed = true;
      topic2.style.display = "block";
      video2.style.display = "block";
      video2.play();
      video2.addEventListener("ended", function () {
        console.log("Video ended");
        location.reload();
      });
    }
  } else if (word.length === 6 && !kohliPlayed) {
    if (video3) {
      kohliPlayed = true;
      topic3.style.display = "block";
      video3.style.display = "block";
      video3.play();
      video3.addEventListener("ended", function () {
        console.log("Video ended");
        location.reload(); 
      });
    }
  } else {
    alert(`ENTER YOUR WORD AGAIN`);
  }
}
