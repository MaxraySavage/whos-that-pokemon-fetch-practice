testURL = 'https://pokeapi.co/api/v2/pokemon/ditto';

fetch(testURL).then((response) => response.json()).then((jsonData) =>{
    console.log(jsonData);
});