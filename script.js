testURL = 'https://pokeapi.co/api/v2/pokemon/ditto';


// from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
function drawToCanvas() {
    // Use the intrinsic size of image in CSS pixels for the canvas element
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    
    // Will draw the image as 300x227, ignoring the custom size of 60x45
    // given in the constructor
    ctx.drawImage(this, 0, 0);
    
    // To use the custom size we'll have to specify the scale parameters
    // using the element's width and height properties - lets draw one
    // on top in the corner:
    //ctx.drawImage(this, 0, 0, this.width, this.height);
}


fetch(testURL).then((response) => response.json()).then((jsonData) =>{
    pokemonSprite = jsonData.sprites.front_default;
    console.log(pokemonSprite);
    const pokeImage = new Image();
    pokeImage.onload = drawToCanvas;
    pokeImage.src = pokemonSprite;

});