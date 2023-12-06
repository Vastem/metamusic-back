import SongDAO from '../data-access/songDAO.js'

// cargar canciones en la base de datos
export async function createSongs() {
    const songDAO = new SongDAO();
    console.log("Creando canciones...")
    try {
        songDAO.add({
            idsong: "2496106371",
            name: "MONACO",
            album: "nslvqapm",
            duration: 267,
            singers: "Bad Bunny",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/13/21/22/132122a1-2ef2-381b-94b6-7b9449dcaa4a/197190137897.jpg/1200x1200bb.jpg"
        })
        songDAO.add({
            idsong: "2487588031",
            name: "LOU LOU",
            album: "nslvqapm",
            duration: 188,
            singers: "Gabito Ballesteros",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a2/2c/da/a22cda61-6a64-9f96-6fb7-eb04c97592ad/196922668685_Cover.jpg/1200x1200bf-60.jpg"
        })
        songDAO.add({
            idsong: "2364618815",
            name: "Seven (feat. Latto) (Explicit Ver.)",
            album: "Seven (feat. Latto)",
            duration: 184,
            singers: "Jung Kook",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7d/44/e6/7d44e665-d8be-e9ce-7b90-b3e2a40f225a/196922462887_Cover.jpg/1200x1200bf-60.jpg"
        })
        songDAO.add({
            idsong: "2133509497",
            name: "Rara Vez",
            album: "Rara Vez",
            duration: 184,
            singers: "Milo J",
            image: "https://i.scdn.co/image/ab67616d0000b273d467bed4e6b2a01ea8569100"
        })
        songDAO.add({
            idsong: "2253667277",
            name: "Pacas De Billetes",
            album: "Billetes",
            duration: 188,
            singers: "Natanael Cano",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/15/a6/ac/15a6ac39-7d03-d487-a20f-97c7edaeba08/5054197720758.jpg/1200x1200bf-60.jpg"
        })
        songDAO.add({
            idsong: "2523324931",
            name: "Standing Next to You",
            album: "GOLDEN",
            duration: 206,
            singers: "Jung Kook",
            image: "https://img6.yna.co.kr/etc/inner/SP/2023/11/03/ASP20231103001000883_01_i_P4.jpg"
        })
        songDAO.add({
            idsong: "704076692",
            name: "Tu No Metes Cabra",
            album: "Tu No Metes Cabra",
            duration: 206,
            singers: "Bad Bunny",
            image: "https://i.scdn.co/image/ab67616d0000b273cbd84f7b3d3dab7743cfa88e"
        })
        songDAO.add({
            idsong: "2418116645",
            name: "ELOVRGA",
            album: "ELOVRGA",
            duration: 194,
            singers: "Alex Favela",
            image: "https://e-cdns-images.dzcdn.net/images/artist/086acc0fad7926a352a3ea8813c6041e/500x500-000000-80-0-0.jpg"
        })
        songDAO.add({
            idsong: "74651839",
            name: "Feliz Navidad 3",
            album: "Feliz Navidad 3",
            duration: 307,
            singers: "Arcangel",
            image: "https://e-cdns-images.dzcdn.net/images/artist/125d1b7bed39cac2d2e5ea633f298c1c/250x250-000000-80-0-0.jpg"
        })
        songDAO.add({
            idsong: "2503047111",
            name: "HARLEY QUINN",
            album: "Pa las Baby's Y Belikeada",
            duration: 143,
            singers: "Fuerza Regida",
            image: "https://i.scdn.co/image/ab67616d00001e022a35fb4cce8a3e9cb233e898"
        })
        songDAO.add({
            idsong: "2427437035",
            name: "Strangers",
            album: "Strangers",
            duration: 172,
            singers: "Kenya Grace",
            image: "https://upload.wikimedia.org/wikipedia/en/6/6a/Kenya_Grace_-_Strangers.png"
        })
        songDAO.add({
            idsong: "128948754",
            name: "Life is a Highway",
            album: "Life is a Highway",
            duration: 315,
            singers: "Rascal Flatts",
            image: "https://e-cdns-images.dzcdn.net/images/artist/e8af013b086e3f6b38d9065189bc52a3/500x500-000000-80-0-0.jpg"
        })
        songDAO.add({
            idsong: "2448838635",
            name: "GODS",
            album: "GODS",
            duration: 220,
            singers: "New Jeans",
            image: "https://images.genius.com/639c4cc7ed225cb558b784d5652de637.1000x1000x1.png"
        })

    } catch (error) {
        console.log(error)
    }
}
