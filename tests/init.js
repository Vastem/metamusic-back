import { connect } from '../config/db.js'
import { createAdmin } from "./addAdmin.js"
import { createSongs } from "./addSongs.js"
import AdminDAO from '../data-access/adminDAO.js'
import PlaylistDAO from '../data-access/playlistDAO.js'
import SubscriptionDAO from '../data-access/subscriptionDAO.js'

await connect()

await createSongs()
await createAdmin()

const adminDAO = new AdminDAO()
const admin = await adminDAO.getByUsername("admin")

// create admin playlist
const playlistDAO = new PlaylistDAO()
console.log("Creando playlists...")
try {
    playlistDAO.create({
        name: "Top hits",
        description: "top hits",
        user: admin._id,
        image: "https://res.cloudinary.com/m34mu1c/image/upload/v1701841485/playlist/656eb1615b80386fcde05bf5/jspfqnrkk83vkroqzo37.jpg",
        type: "admin",
        songs: [
            {
                idsong: "2523324931",
                name: "Standing Next to You",
                album: "GOLDEN",
                duration: 206,
                singers: "Jung Kook",
                image: "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "2364618815",
                name: "Seven (feat. Latto) (Explicit Ver.)",
                album: "Seven (feat. Latto)",
                duration: 184,
                singers: "Jung Kook",
                image: "https://e-cdns-images.dzcdn.net/images/cover/d1ddbc901bf7d7b43187fac1b1e6714e/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "2387373015",
                name: "Paint The Town Red",
                album: "Paint The Town Red",
                duration: 231,
                singers: "Doja Cat",
                image: "https://e-cdns-images.dzcdn.net/images/cover/ad4bfc2a374741218dd6498d04e323cc/1000x1000-000000-80-0-0.jpg"
            },
            {

                idsong: "70322142",
                name: "I Wanna Be Yours",
                album: "AM",
                duration: 183,
                singers: "Arctic Monkeys",
                image: "https://e-cdns-images.dzcdn.net/images/cover/64e54e307bd5e2bdb27ffeb662fd910d/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "2496106541",
                name: "PERRO NEGRO",
                album: "nadie sabe lo que va a pasar mañana",
                duration: 162,
                singers: "Bad Bunny",
                image: "https://e-cdns-images.dzcdn.net/images/cover/75aca8c6d242de6db22a9e22fbbf1ba9/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "2427437035",
                name: "Strangers",
                album: "Strangers",
                duration: 172,
                singers: "Kenya Grace",
                image: "https://e-cdns-images.dzcdn.net/images/cover/6e3e7d38cb73367bce8531754ded643d/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "2433388375",
                name: "Que Onda",
                album: "Que Onda",
                duration: 191,
                singers: "Kenya Grace",
                image: "https://e-cdns-images.dzcdn.net/images/cover/6e3e7d38cb73367bce8531754ded643d/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "2503047111",
                name: "HARLEY QUINN",
                album: "Pa las Baby's Y Belikeada",
                duration: 143,
                singers: "Fuerza Regida",
                image: "https://e-cdns-images.dzcdn.net/images/cover/b155612a44ab6fb14aee1457dd347b13/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "136889400",
                name: "Starboy",
                album: "Starboy",
                duration: 230,
                singers: "The Weeknd",
                image: "https://e-cdns-images.dzcdn.net/images/cover/134778e4c4f19ea71c82408300925a9a/1000x1000-000000-80-0-0.jpg"
            }


        ]
    })

    playlistDAO.create({
        name: "Classical",
        description: "c",
        user: admin._id,
        image: "https://res.cloudinary.com/m34mu1c/image/upload/v1701841577/playlist/656eb1615b80386fcde05bf5/yvkl0nurutvucgql7o1s.webp",
        type: "admin",
        songs: [
            {
                idsong: "71959667",
                name: "Tsar Saltan, Op. 57 : Flight of the Bumblebee",
                album: "J'aime pas le classique mais ca j'aime bien",
                duration: 84,
                singers: "André Previn",
                image: "https://e-cdns-images.dzcdn.net/images/cover/8998cba4484f96ccde537002ae9815d5/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "16769492",
                name: "Lacrimosa",
                album: "Requiem - Music To Die For",
                duration: 205,
                singers: "Wolfgang Amadeus Mozart",
                image: "https://e-cdns-images.dzcdn.net/images/cover/46616a3845572e78985052e705556694/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "969717112",
                name: "Für Elise",
                album: "Bethoven Masterpieces and Friends",
                duration: 177,
                singers: "Bethoven Masterpieces",
                image: "https://e-cdns-images.dzcdn.net/images/cover/b523e17e7991aff979b47d2d9f675310/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "2524178641",
                name: "MARTILLAZO",
                album: "MARTILLAZO",
                duration: 158,
                singers: "Dani Flow",
                image: "https://e-cdns-images.dzcdn.net/images/cover/13b74b8eff5cb1c7e1212c8a42c71453/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "4509606",
                name: "Serenata nocturna En RE Mayor. Primer Movimiento",
                album: "Conciertos Y Serenata Nocturna En RE Mayor",
                duration: 258,
                singers: "Mozart",
                image: "https://e-cdns-images.dzcdn.net/images/cover/4f6b6b4b6b6b6b6b6b6b6b6b6b6b6b6b/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "969717102",
                name: "Moonlight Sonata (First Movement)",
                album: "Bethoven Masterpieces and Friends",
                duration: 301,
                singers: "Bethoven Masterpieces",
                image: "https://e-cdns-images.dzcdn.net/images/cover/b523e17e7991aff979b47d2d9f675310/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "16722623",
                name: "Nocturne No. 2 in C Minor",
                album: "Field: Piano Music, Vol. 1",
                duration: 223,
                singers: "Benjamin Frith",
                image: "https://e-cdns-images.dzcdn.net/images/cover/c39ec85e2d05ff6f502948f316b7108c/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "22756251",
                name: "Claire De Lune",
                album: "Debussy: Claire De Lune (Clair De Lune)",
                duration: 125,
                singers: "Debussy Consort",
                image: "https://e-cdns-images.dzcdn.net/images/cover/c6d8f68cd01bbd65a0a60d166f7a7517/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "1062412962",
                name: "Pokémon Theme (Solo Piano) [From \"Pokémon the Movie: I Choose You\"]",
                album: "Pokémon Movie Music Collection (Original Soundtrack)",
                duration: 99,
                singers: "Pokémon",
                image: "https://e-cdns-images.dzcdn.net/images/cover/2a3e0c50d6f5d4ea6dda41373e2d4c25/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "1251950902",
                name: "An Unwavering Heart",
                album: "Back To Unova, Vol. II (Music From \"Pokémon Black & White\")",
                duration: 113,
                singers: "Kunning Fox",
                image: "https://e-cdns-images.dzcdn.net/images/cover/f4af495bbf0f030c53ad2d0944a8ae32/1000x1000-000000-80-0-0.jpg"
            }
        ]
    })

    playlistDAO.create({
        name: "Belikones",
        description: "el buho",
        user: admin._id,
        image: "https://res.cloudinary.com/m34mu1c/image/upload/v1701841897/playlist/656eb1615b80386fcde05bf5/hsjtpjvk7ygpj8y3zcu4.jpg",
        type: "admin",
        songs: [
            {
                idsong: "1634157752",
                name: "Soy El Ratón",
                album: "Soy El Ratón",
                duration: 222,
                singers: "Código FN",
                image: "https://e-cdns-images.dzcdn.net/images/cover/6e74e5d274edbf4db27e01d2cf9413e2/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "451137562",
                name: "Arriba Yecora",
                album: "Muy Alegres, Vol. 2",
                duration: 147,
                singers: "Banda Sinaloense MM",
                image: "https://e-cdns-images.dzcdn.net/images/cover/8a30d7bdc35c96fc27569976bea0fc1c/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "1591561262",
                name: "The Rumbling (TV Size)",
                album: "The Rumbling (TV Size)",
                duration: 90,
                singers: "SiM",
                image: "https://e-cdns-images.dzcdn.net/images/cover/da0983c0a6addef400a72c315ec29f19/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "947832932",
                name: "Arriba",
                album: "Arriba",
                duration: 174,
                singers: "Natanael Cano",
                image: "https://e-cdns-images.dzcdn.net/images/cover/5a0ff5307dbc35066171fad7baeca753/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "1556403002",
                name: "Wo",
                album: "Wo",
                duration: 171,
                singers: "Crazy Point",
                image: "https://e-cdns-images.dzcdn.net/images/cover/2a221b4a68ba0c11df24009446f16d87/1000x1000-000000-80-0-0.jpg"
            },
            {
                idsong: "2210217447",
                name: "Me cogi a mi abuelo",
                album: "SHITMUSIC",
                duration: 108,
                singers: "Centralfbi",
                image: "https://e-cdns-images.dzcdn.net/images/cover/1333690c66fd82542cfe4c8d9c93b4e0/1000x1000-000000-80-0-0.jpg"
            }
        ]
    })
}
catch (error) {
    console.log(error)
}


// create subscriptions
const subscriptionDAO = new SubscriptionDAO()
console.log("Creando suscripciones...")
try {

    subscriptionDAO.create({
        type: "Basic",
        cost: 100,
        duration: 15
    })

    subscriptionDAO.create({
        type: "Platinum",
        cost: 150,
        duration: 30
    })

    subscriptionDAO.create({
        type: "Bombastic",
        cost: 500,
        duration: 180
    })
}
catch (error) {
    console.log(error)
}



