testURL = 'https://pokeapi.co/api/v2/pokemon/ditto';

fetch(testURL).then((response) => response.json()).then((jsonData) =>{
    pokemonSprite = jsonData.sprites.front_default;
    console.log(pokemonSprite);
});