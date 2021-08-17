testURL = 'https://pokeapi.co/api/v2/pokemon/ditto';

const canvasHandler = {
    canvas: document.getElementById('main-canvas'),
    ctx: this.canvas.getContext("2d"),
    drawImage: function(imageElement) {
        this.ctx.drawImage(imageElement, 10, 10);
    },
};


fetch(testURL).then((response) => response.json()).then((jsonData) =>{
    pokemonSprite = jsonData.sprites.front_default;
    console.log(pokemonSprite);
    const pokeImage = new Image();
    pokeImage.src = pokemonSprite;
    canvasHandler.drawImage(pokeImage);
});