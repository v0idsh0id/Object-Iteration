var v = 0;

function nameOfFunction() {
  for (k=0; k < Object.keys(nameOfObject).length; k++){
    content.innerHTML += Object.keys(nameOfObject)[k] + "<br>";
    while (v < Object.values(topics).length) {
      content.innerHTML += Object.values(nameOfObject)[k][v] + "<br>";
      v++;
      if (Object.values(nameOfObject)[k][v] == undefined){
        break;
      }
    }
    v = 0;
  }
}
