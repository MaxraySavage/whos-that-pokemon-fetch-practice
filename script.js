testURL = 'https://pokeapi.co/api/v2/pokemon/ditto';

const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');


// from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
function drawToCanvas() {
    // Use the intrinsic size of image in CSS pixels for the canvas element
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    
    // Will draw the image as 300x227, ignoring the custom size of 60x45
    // given in the constructor
    ctx.drawImage(this, 0, 0);
    
    //save canvas state
    canvas.save();

    // To use the custom size we'll have to specify the scale parameters
    // using the element's width and height properties - lets draw one
    // on top in the corner:
    //ctx.drawImage(this, 0, 0, this.width, this.height);
}


// from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
function canvasToSilhouette() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        //if pixel alpha is greater than 0, make the pixel black
        if(data[i+3] > 0) {
            data[i]     = 0; // red
            data[i + 1] = 0; // green
            data[i + 2] = 0; // blue
        }
    }
    ctx.putImageData(imageData, 0, 0);
    canvas.onclick = this.restore();
}


fetch(testURL).then((response) => response.json()).then((jsonData) =>{
    pokemonSprite = jsonData.sprites.front_default;
    console.log(pokemonSprite);
    const pokeImage = new Image();
    pokeImage.onload = drawToCanvas;
    pokeImage.src = pokemonSprite;
});