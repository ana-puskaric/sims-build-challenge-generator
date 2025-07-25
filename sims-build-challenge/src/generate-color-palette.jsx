const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
    for (var i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
}

export const generateColorPalette = (setPalette) => {
    var colorPalette = [];
    for (var i = 0; i < 5; i++) {
        var color = getRandomColor();
        while(colorPalette.includes(color)){
          color = getRandomColor();
        }
        colorPalette[i] = color;
    }
    setPalette(colorPalette);
}