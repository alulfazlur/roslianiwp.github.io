let sheep = document.getElementById("mySheep")
let sheepStyle = sheep.style
var pos = 450
sheepStyle.left = pos + "px"
sheepStyle.position = "relative"
sheepStyle.top = "120px"

let fieldLeft = 0
let fieldRight = 950

let speed = 50

document.addEventListener('keydown', function(event){
    if (event.which === 39){
        var leftNumbers = sheepStyle.left.replace("px","");
        var left = parseInt(leftNumbers)
        // left += speed
        if (left == fieldRight) sheepStyle.left = fieldRight
        else pos += speed
    }
})

let timer = setInterval(function () {
    if (sheepStyle.left.replace("px", "") == fieldLeft) {
      clearInterval(timer);
    } else {
      pos --;
      sheepStyle.left = pos + "px";
    }
  }, 20);