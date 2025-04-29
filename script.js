// Først laver jeg min constructor til album-objekter
function Album(artistName, albumName, trackList, productionYear) {
    this.artistName = artistName;
    this.albumName = albumName;
    this.trackList = trackList;
    this.productionYear = productionYear;
}

// Henter JSON-filen og konverterer den til objekter
fetch("albums.json")
    .then(response => response.json())
    .then(albumData => {
        const table = document.getElementById("albumTable");

        albumData.forEach(data => {
            // Opret et album-objekt vha. constructoren
            const album = new Album(data.artistName, data.albumName, data.trackList, data.productionYear);

            // Lav en liste med alle sangtitler (én per linje)
            const trackTitles = album.trackList.map(track => track.trackTitle).join("<br>");

            // Opret en tabelrække
            const albumRow = document.createElement("tr");

            // Indsæt data i rækken
            albumRow.innerHTML = `
                <td>${album.artistName}</td>
                <td>${album.albumName}</td>
                <td>${album.productionYear}</td>
                <td>${trackTitles}</td>
            `;

            // Tilføj rækken til tabellen
            table.appendChild(albumRow);
        });
    });