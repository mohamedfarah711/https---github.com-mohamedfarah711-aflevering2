
//først laver jeg mine objekter
function album(artistName, albumName, trackList, productionear) {
    this.artistname = artistName;
    this.albumname = albumName;
    this.tracklist = trackList;
    this.productionyear = productionYear;
}

//nu henter jeg json filen ind og fetcher den

fetch("albums.json")

//så konverter jeg json filen til js objekter
.then(response => response.json())
.then(albums =>{
//her laver jeg en variable til mit id
let table = document.getElementById("albumTable");
albums.forEach(album => {
        let albumDiv = document.createElement("tr")
//nu henter jeg min data ind fra filen albums.json
    albumDiv.innerHTML = `
    <td>${album.artistName}</td>
    <td>${album.albumName}</td>
    <td>${album.productionYear}</td>
    <td>${album.trackList.length}</td>
    `;
//derefter tilføjer jeg nye værdier til min tabel
table.appendChild(albumDiv)

});
})   
    