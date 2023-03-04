let channels = [
    {
        id: 1,
        title: "Telemundo",
        reference: "go:tv01",
        genre: "entretenimiento",
        img: "telemundo",
        sinopsis: "Telemundo es una cadena de televisión estadounidense que transmite en idioma español propiedad de Comcast a través de NBC Universal."
    },
    {
        id: 2,
        title: "Las Estrellas",
        reference: "go:tv02",
        genre: "entretenimiento",
        img: "las_estrellas",
        sinopsis: "Las Estrellas es una cadena de televisión mexicana propiedad de TelevisaUnivision​ Su primera emisión oficial fue el 21 de marzo de 195."
    },
    {
        id: 3,
        title: "Azteca 7",
        reference: "go:tv03",
        genre: "entretenimiento",
        img: "azteca_siete",
        sinopsis: "Las Estrellas es una cadena de televisión mexicana propiedad de TelevisaUnivision​ Su primera emisión oficial fue el 21 de marzo de 195."
    },
    {
        id: 4,
        title: "Bandamax",
        reference: "go:tv04",
        genre: "musica",
        img: "bandamax",
        sinopsis: "Bandamax es un canal de televisión por suscripción latinoamericano de origen mexicano dedicado a la música regional mexicana. Su programación consiste en vídeos musicales, noticias y entrevistas con los representantes de este género. Es propiedad de TelevisaUnivision y operado por Televisa Networks."
    },
    {
        id: 5,
        title: "BitMe",
        reference: "go:tv05",
        genre: "infantiles",
        img: "bitme",
        sinopsis: "Bitme es un canal de televisión por suscripción latinoamericano, de origen mexicano, producido por Televisa Networks. Fue lanzado el 15 de julio de 2019, sustituyendo al canal Tiin"
    },
    {
        id: 6,
        title: "Cartoonito",
        reference: "go:tv06",
        genre: "infantiles",
        img: "cartoonito",
        sinopsis: "Cartoonito es un canal de televisión por suscripción latinoamericano de origen británico-estadounidense, operado por Warner Bros. Discovery Americas. La programación está dirigida a series de carácter preescolar y de jardines infantiles. Sus emisiones comenzaron el 1 de diciembre de 2021, en reemplazo de Boomerang"
    },
    {
        id: 7,
        title: "Cartoon Network",
        reference: "go:tv07",
        genre: "infantiles",
        img: "cartoon_network",
        sinopsis: "Cartoon Network es un canal de televisión por suscripción estadounidense infantil centrado en series de animación para niños y adolescentes. Fue lanzado el 1 de octubre de 1992 por Betty Cohen y es propiedad de The Cartoon Network Inc, subsidiaria de Warner Bros. Discovery Networks, una división de Warner Bros."
    },
    {
        id: 8,
        title: "FX",
        reference: "go:tv08",
        genre: "peliculas",
        img: "fx",
        sinopsis: "FX es un canal de televisión por suscripción estadounidense, propiedad de The Walt Disney Company a través de FX Networks, LLC. Su programación está orientada principalmente para el público adulto y adolescente. Entre sus contenidos destacan series de televisión, eventos deportivos y películas de acción."
    },
    {
        id: 9,
        title: "ADN 40",
        reference: "go:tv09",
        genre: "noticias",
        img: "adn_40",
        sinopsis: "ADN 40 es una cadena de televisión abierta mexicana producida por TV Azteca con una programación de corte noticioso. La señal es producida principalmente para la estación XHTVM-TDT de la Ciudad de México, propiedad de Televisora del Valle de México."
    },
    {
        id: 10,
        title: "Antena 3",
        reference: "go:tv10",
        genre: "entretenimiento",
        img: "antena_3",
        sinopsis: "Antena 3 es un canal de televisión español en abierto, propiedad de Atresmedia. Sus emisiones regulares comenzaron el 25 de enero de 1990."
    },
    {
        id: 11,
        title: "AXN",
        reference: "go:tv11",
        genre: "entretenimiento",
        img: "axn",
        sinopsis: "AXN es un canal de televisión por suscripción latinoamericano de origen estadounidense, propiedad de Sony Pictures Entertainment y distribuido actualmente para la región por Ole Distribution, una empresa formada entre Ole Communications y Warner Bros. Discovery"
    },
    {
        id: 12,
        title: "Azteca UNO",
        reference: "go:tv12",
        genre: "entretenimiento",
        img: "azteca_uno",
        sinopsis: "Azteca Uno es una cadena de televisión comercial de México, perteneciente a la empresa privada Televisión Azteca. Su programación, de corte generalista, está constituida principalmente por reality shows, noticieros, programas de variedad, concursos, películas y series"
    },
    {
        id: 13,
        title: "Animal Planet",
        reference: "go:tv13",
        genre: "cultura",
        img: "animal_planet",
        sinopsis: "El canal está dedicado a programación de la relación entre humanos y animales, es la señal hermana de Discovery. Está disponible en más de 70 países alrededor del mundo y posee versiones locales en países como Canadá, Reino Unido e India. El principal competidor es National Geographic Wild."
    },
    {
        id: 14,
        title: "Cinecanal",
        reference: "go:tv14",
        genre: "peliculas",
        img: "cinecalidad",
        sinopsis: "Cinecanal es un canal de televisión por suscripción latinoamericano, inició sus transmisiones el 1 de abril de 1993. Es propiedad de The Walt Disney Company Latin America y operado por Disney Media Networks Latin America."
    },
    {
        id: 15,
        title: "Discovery Channel",
        reference: "go:tv15",
        genre: "cultura",
        img: "discovery_channel",
        sinopsis: "Discovery Channel es el canal temático líder en contenidos de entretenimiento exclusivamente real. Discovery emite 24 horas al día contenidos de ciencia, tecnología, ingeniería, motor, aventura y culturas mundiales."
    },
    {
        id: 16,
        title: "Disney Jr",
        reference: "go:tv16",
        genre: "infantiles",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/disney_jr.jpg"
    },
    {
        id: 17,
        title: "Star Channel",
        reference: "go:tv17",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/star_channel.jpg"
    },
    {
        id: 18,
        title: "Golden",
        reference: "go:tv18",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/golden.jpg"
    },
    {
        id: 19,
        title: "History Channel",
        reference: "go:tv19",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/history_channel.jpg"
    },
    {
        id: 20,
        title: "Imagen TV",
        reference: "go:tv20",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/imagen_tv.jpg"
    },
    {
        id: 21,
        title: "Milenio Television",
        reference: "go:tv21",
        genre: "noticias",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/milenio_television.jpg"
    },
    {
        id: 22,
        title: "Nat Geo",
        reference: "go:tv22",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/nat_geo.jpg"
    },
    {
        id: 23,
        title: "Teen Nick",
        reference: "go:tv23",
        genre: "infantiles",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/teen_nick.jpg"
    },
    {
        id: 24,
        title: "Nick Jr",
        reference: "go:tv24",
        genre: "infantiles",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/nick_jr.jpg"
    },
    {
        id: 25,
        title: "Nick",
        reference: "go:tv25",
        genre: "infantiles",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/nick.jpg"
    },
    {
        id: 26,
        title: "Paramount",
        reference: "go:tv26",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/paramount.jpg"
    },
    {
        id: 27,
        title: "Tooncast",
        reference: "go:tv27",
        genre: "infantiles",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/tooncast.jpg"
    },
    {
        id: 28,
        title: "Sony Channel",
        reference: "go:tv28",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/sony_channel.jpg"
    },
    {
        id: 29,
        title: "Warner",
        reference: "go:tv29",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/warner.jpg"
    },
    {
        id: 30,
        title: "Multimedios",
        reference: "go:tv30",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/multimedios.jpg"
    },
    {
        id: 31,
        title: "Distrito Comedia",
        reference: "go:tv31",
        genre: "comedia",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/distrito_comedia.jpg"
    },
    {
        id: 32,
        title: "Nu9ve",
        reference: "go:tv32",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/nueve.jpg"
    },
    {
        id: 33,
        title: "Comedy Central",
        reference: "go:tv33",
        genre: "comedia",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/comedy_central.jpg"
    },
    {
        id: 34,
        title: "El Gourmet",
        reference: "go:tv34",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/el_gourmet.jpg"
    },
    {
        id: 35,
        title: "Food Network",
        reference: "go:tv35",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/food_network.jpg"
    },
    {
        id: 36,
        title: "Hola TV",
        reference: "go:tv36",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/hola_tv.jpg"
    },
    {
        id: 37,
        title: "LifeTime",
        reference: "go:tv37",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/lifetime.jpg"
    },
    {
        id: 38,
        title: "MTV",
        reference: "go:tv38",
        genre: "musica",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/mtv.jpg"
    },
    {
        id: 39,
        title: "MTV Live",
        reference: "go:tv39",
        genre: "musica",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/mtv_live.jpg"
    },
    {
        id: 40,
        title: "Space",
        reference: "go:tv40",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/space.jpg"
    },
    {
        id: 41,
        title: "SyFy",
        reference: "go:tv41",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/syfy.jpg"
    },
    {
        id: 42,
        title: "Telehit",
        reference: "go:tv42",
        genre: "musica",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/telehit.jpg"
    },
    {
        id: 43,
        title: "TNT",
        reference: "go:tv43",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/tnt.jpg"
    },
    {
        id: 44,
        title: "TNT Series",
        reference: "go:tv44",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/tnt_series.jpg"
    },
    {
        id: 45,
        title: "Tru TV",
        reference: "go:tv45",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/tru_tv.jpg"
    },
    {
        id: 46,
        title: "Unicable",
        reference: "go:tv46",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/unicable.jpg"
    },
    {
        id: 47,
        title: "MTV Hits",
        reference: "go:tv47",
        genre: "musica",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/mtv_hits.jpg"
    },
    {
        id: 48,
        title: "E!",
        reference: "go:tv48",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/e.jpg"
    },
    {
        id: 49,
        title: "TUDN",
        reference: "go:tv49",
        genre: "deportes",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/tudn.jpg"
    },
    {
        id: 50,
        title: "FOX SPORTS 2",
        reference: "go:tv50",
        genre: "deportes",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/fox_sports_2.jpg"
    },
    {
        id: 51,
        title: "ESPN 2",
        reference: "go:tv51",
        genre: "deportes",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/espn_2.jpg"
    },
    {
        id: 52,
        title: "FOX SPORTS PREMIUM",
        reference: "go:tv52",
        genre: "deportes",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/fox_sports_premium.jpg"
    },
    {
        id: 53,
        title: "MTV 00s",
        reference: "go:tv53",
        genre: "musica",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/mtv_00.jpg"
    },
    {
        id: 54,
        title: "Canal 5",
        reference: "go:tv54",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/canal_5.jpg"
    },
    {
        id: 55,
        title: "A&E",
        reference: "go:tv55",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/ae.jpg"
    },
    {
        id: 56,
        title: "A3 Series",
        reference: "go:tv56",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/atres_series.jpg"
    },
    {
        id: 57,
        title: "ISAT",
        reference: "go:tv57",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/isat.jpg"
    },
    {
        id: 58,
        title: "Films & Arts",
        reference: "go:tv58",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/films_arts.jpg"
    },
    {
        id: 59,
        title: "Morbido TV",
        reference: "go:tv59",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/morbido.jpg"
    },
    {
        id: 60,
        title: "DW",
        reference: "go:tv60",
        genre: "noticias",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/dw_espanol.jpg"
    },
    {
        id: 61,
        title: "Bloomberg TV",
        reference: "go:tv61",
        genre: "noticias",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/bloomberg.jpg"
    },
    {
        id: 62,
        title: "Discovery Turbo",
        reference: "go:tv62",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/turbo.jpg"
    },
    {
        id: 63,
        title: "ESPN 3",
        reference: "go:tv63",
        genre: "deportes",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/espn_3.jpg"
    },
    {
        id: 64,
        title: "AYM Sports",
        reference: "go:tv64",
        genre: "deportes",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/aym_sports.jpg"
    },
    {
        id: 65,
        title: "WOBI",
        reference: "go:tv65",
        genre: "noticias",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/wobi.jpg"
    },
    {
        id: 66,
        title: "TCM",
        reference: "go:tv66",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/tcm.jpg"
    },
    {
        id: 67,
        title: "FOX SPORTS",
        reference: "go:tv67",
        genre: "deportes",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/fox_deportes.jpg"
    },
    {
        id: 68,
        title: "Baby TV",
        reference: "go:tv68",
        genre: "infantiles",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/baby_tv.jpg"
    },
    {
        id: 69,
        title: "TeleFormula",
        reference: "go:tv69",
        genre: "noticias",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/teleformula.jpg"
    },
    {
        id: 70,
        title: "Universal",
        reference: "go:tv70",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/universal.jpg"
    },
    {
        id: 71,
        title: "De Pelicula",
        reference: "go:tv71",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/de_pelicula.webp"
    },
    {
        id: 72,
        title: "Discovery Theater",
        reference: "go:tv72",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/theater.jpg"
    },
    {
        id: 73,
        title: "Discovery Science",
        reference: "go:tv73",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/discovery_science.jpg"
    },
    {
        id: 74,
        title: "Golden Plus",
        reference: "go:tv74",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/golde_plus.jpg"
    },
    {
        id: 75,
        title: "FOX SPORTS 3",
        reference: "go:tv75",
        genre: "deportes",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/fox_sports_3.jpg"
    },
    {
        id: 76,
        title: "Discovery ID",
        reference: "go:tv76",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/discovery_id.jpg"
    },
    {
        id: 77,
        title: "H2",
        reference: "go:tv77",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/h2.jpg"
    },
    {
        id: 78,
        title: "Mas Chic",
        reference: "go:tv78",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/mas_chic.jpg"
    },
    {
        id: 79,
        title: "MTV 80s",
        reference: "go:tv79",
        genre: "musica",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/mtv_80s.jpg"
    },
    {
        id: 80,
        title: "TVC Deportes",
        reference: "go:tv80",
        genre: "deportes",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/tvc_deportes.jpg"
    },
    {
        id: 81,
        title: "ONCE TV",
        reference: "go:tv81",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/once_tv.jpg"
    },
    {
        id: 82,
        title: "Garage TV",
        reference: "go:tv82",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/garage_tv.jpg"
    },
    {
        id: 83,
        title: "Glitz",
        reference: "go:tv83",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/glitz.jpg"
    },
    {
        id: 84,
        title: "TBS",
        reference: "go:tv84",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/tbs.jpg"
    },
    {
        id: 85,
        title: "Discovery World",
        reference: "go:tv85",
        genre: "cultura",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/discovery_world.jpg"
    },
    {
        id: 86,
        title: "Cinemax",
        reference: "go:tv86",
        genre: "peliculas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/cinemax.jpg"
    },
    {
        id: 87,
        title: "Telehit Plus",
        reference: "go:tv87",
        genre: "musica",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/telehit_plus.jpg"
    },
    {
        id: 88,
        title: "Univision",
        reference: "go:tv88",
        genre: "entretenimiento",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/univision.jpg"
    },
    {
        id: 89,
        title: "Tlnovelas",
        reference: "go:tv89",
        genre: "novelas",
        logo: "https://raw.githubusercontent.com/arandevs22/hoo_play/master/img/logos/tlnovelas.jpg"
    },




]

module.exports.channels = channels;