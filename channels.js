let channels = [
    {
        id: 1,
        title: "Telemundo",
        reference: "go:tv01",
        genre: "general",
        img: "telemundo",
        sinopsis: "Telemundo es una cadena de televisión estadounidense que transmite en idioma español propiedad de Comcast a través de NBC Universal."
    },
    {
        id: 2,
        title: "Las Estrellas",
        reference: "go:tv02",
        genre: "general",
        img: "las_estrellas",
        sinopsis: "Las Estrellas es una cadena de televisión mexicana propiedad de TelevisaUnivision​ Su primera emisión oficial fue el 21 de marzo de 195."
    },
    {
        id: 3,
        title: "Azteca 7",
        reference: "go:tv03",
        genre: "general",
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
        genre: "general",
        img: "antena_3",
        sinopsis: "Antena 3 es un canal de televisión español en abierto, propiedad de Atresmedia. Sus emisiones regulares comenzaron el 25 de enero de 1990."
    },
    {
        id: 11,
        title: "AXN",
        reference: "go:tv11",
        genre: "series",
        img: "axn",
        sinopsis: "AXN es un canal de televisión por suscripción latinoamericano de origen estadounidense, propiedad de Sony Pictures Entertainment y distribuido actualmente para la región por Ole Distribution, una empresa formada entre Ole Communications y Warner Bros. Discovery"
    },
    {
        id: 12,
        title: "Azteca UNO",
        reference: "go:tv12",
        genre: "general",
        img: "azteca_uno",
        sinopsis: "Azteca Uno es una cadena de televisión comercial de México, perteneciente a la empresa privada Televisión Azteca. Su programación, de corte generalista, está constituida principalmente por reality shows, noticieros, programas de variedad, concursos, películas y series"
    },
    {
        id: 13,
        title: "Animal Planet",
        reference: "go:tv13",
        genre: "documentales",
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
        genre: "documentales",
        img: "discovery_channel",
        sinopsis: "Discovery Channel es el canal temático líder en contenidos de entretenimiento exclusivamente real. Discovery emite 24 horas al día contenidos de ciencia, tecnología, ingeniería, motor, aventura y culturas mundiales."
    },
    {
        id: 16,
        title: "Disney Jr",
        reference: "go:tv16",
        genre: "infantiles",
        img: "disney_jr",
        sinopsis: "Disney Junior en Latinoamérica es una marca que conecta la propuesta integral de Disney con la audiencia preescolar. Se dirige a niños de 2 a 7 años por medio de experiencias en múltiples plataformas para acercarles entretenimiento en etapa de crianza temprana, promoviendo su desarrollo positivo"
    },
    {
        id: 17,
        title: "Star Channel",
        reference: "go:tv17",
        genre: "peliculas",
        img: "star_channel",
        sinopsis: "STAR Channel es el canal #1 de entretenimiento general en TV Paga, un canal para todos, es emocionante, agudo y perspicaz, ofrece una gran variedad de contenido, mostrándose siempre con historias irreverentes y seductoras, es el canal donde puedes encontrar la mejor mezcla de películas y series con una variedad de temas y grandes tramas, llevando como contenido estandarte, la serie de animación más relevante de todos los tiempos: Los Simpson. "
    },
    {
        id: 18,
        title: "Golden",
        reference: "go:tv18",
        genre: "peliculas",
        img: "golden",
        sinopsis: "Golden es un canal de televisión por cable propiedad de Televisa Networks dedicado a la emisión de películas. La programación de Golden está basada en películas de todos los géneros, además de eventos especiales como peleas de boxeo entre otros."
    },
    {
        id: 19,
        title: "History Channel",
        reference: "go:tv19",
        genre: "documentales",
        img: "history_channel",
        sinopsis: "The History Channel, o simplemente History es un canal de televisión de paga dedicada a la historia. Lanzó en el 2001 y es propiedad de HBO Latin America Group."
    },
    {
        id: 20,
        title: "Imagen TV",
        reference: "go:tv20",
        genre: "general",
        img: "imagen_tv",
        sinopsis: "Imagen Televisión es una cadena comercial de televisión abierta mexicana. Es propiedad de Grupo Imagen, empresa responsable de la ahora extinta cadena de televisión, cadenatres. Desde agosto de 2019, de acuerdo con el IFT, es la séptima cadena de televisión nacional en México, contando con una cobertura del 51.6 % del territorio mexicano."
    },
    {
        id: 21,
        title: "Milenio Television",
        reference: "go:tv21",
        genre: "noticias",
        img: "milenio_television",
        sinopsis: "Milenio Televisión es un canal de televisión abierta mexicano que transmite noticias. Pertenece a Grupo Multimedios. Es el canal hermano del periódico del mismo nombre y de la cadena de radio homónima. Su programación se basa en espacios informativos, debates y análisis."
    },
    {
        id: 22,
        title: "Nat Geo",
        reference: "go:tv22",
        genre: "documentales",
        img: "nat_geo",
        sinopsis: "National Geographic, abreviado como Nat Geo, es un canal de televisión por suscripción estadounidense lanzado por National Geographic Partners el 1 de septiembre de 1997. Su programación se basa en documentales de 45 min aproximadamente sobre exploración científica, historia, naturaleza y cultura, entre otros."
    },
    {
        id: 23,
        title: "Teen Nick",
        reference: "go:tv23",
        genre: "infantiles",
        img: "teen_nick",
        sinopsis: "La propuesta de TeenNick es emitir contenido para los adolescentes de hoy en día, y su programación está mayormente compuesta por series live-action."
    },
    {
        id: 24,
        title: "Nick Jr",
        reference: "go:tv24",
        genre: "infantiles",
        img: "nick_jr",
        sinopsis: "Nick Jr. es una marca de Nickelodeon destinada al público preescolar que se emite en el canal del mismo nombre alrededor del mundo teniendo en algunas regiones como Estados Unidos, Reino Unido, Australia y Latinoamérica un canal de emisión propia."
    },
    {
        id: 25,
        title: "Nick",
        reference: "go:tv25",
        genre: "infantiles",
        img: "nick",
        sinopsis: "Nick Jr. proporciona programas educativos y entretenidos para animar a los preescolares a aprender, jugar y divertirse."
    },
    {
        id: 26,
        title: "Paramount",
        reference: "go:tv26",
        genre: "peliculas",
        img: "paramount",
        sinopsis: "Paramount Network es un canal de televisión en abierto español, propiedad de Paramount Global y operado por SGT Net TV. La programación del canal se basa en películas, series, programas de humor y de telerrealidad. Paramount Network fue lanzado el 30 de marzo de 2012, con la película El padrino."
    },
    {
        id: 27,
        title: "Tooncast",
        reference: "go:tv27",
        genre: "infantiles",
        img: "tooncast",
        sinopsis: "Tooncast es un canal de televisión por suscripción latinoamericano lanzado en diciembre de 2008, propiedad de Warner Bros. Discovery y operado por Warner Bros. Discovery Americas, que emite dibujos animados clásicos transmitidos anteriormente en su canal hermano Cartoon Network."
    },
    {
        id: 28,
        title: "Sony Channel",
        reference: "go:tv28",
        genre: "peliculas",
        img: "sony_channel",
        sinopsis: "Entra a Sony Channel para ver los mejores programas: Grey's Anatomy, The Good Doctor, Shark Tank Colombia, Shark Tank México y más!"
    },
    {
        id: 29,
        title: "Warner",
        reference: "go:tv29",
        genre: "peliculas",
        img: "warner",
        sinopsis: "Warner Channel es un canal de televisión por suscripción latinoamericano de origen estadounidense operado por Warner Bros. Discovery Americas, empresa filial perteneciente a Warner Bros. Discovery. Se unió al Consejo Latinoamericano de Publicidad en Multicanales en 2004."
    },
    {
        id: 30,
        title: "Multimedios",
        reference: "go:tv30",
        genre: "general",
        img: "multimedios",
        sinopsis: "Canal 6, más conocido como Multimedios Televisión, es una cadena de televisión abierta mexicana con sede en Monterrey, Nuevo León, siendo la estación principal de la cadena, XHAW-TDT en esa ciudad. El canal virtual nacional asignado para este canal en México es el 6.1"
    },
    {
        id: 31,
        title: "Distrito Comedia",
        reference: "go:tv31",
        genre: "comedia",
        img: "distrito_comedia",
        sinopsis: "El Canal Distrito Comedia es un canal de televisión humorístico operado por Televisa Networks, en donde se viven los clásicos y comedia contemporánea de habla hispana. El Canal Distrito Comedia actualmente transmite exitosas producciones cómicas de antaño y producciones cómicas actuales."
    },
    {
        id: 32,
        title: "Nu9ve",
        reference: "go:tv32",
        genre: "general",
        img: "nueve",
        sinopsis: "Canal 9 (estilizado como NU9VE y anteriormente conocido como Galavisión y Gala TV) es un canal de televisión abierta mexicano propiedad de TelevisaUnivision. ​ Su estación principal es XEQ-TDT, ubicada en Ciudad de México."
    },
    {
        id: 33,
        title: "Comedy Central",
        reference: "go:tv33",
        genre: "comedia",
        img: "comedy_central",
        sinopsis: "El Canal Comedy Central (México) es un canal de televisión que se enfoca en transmitir series de comedia de producción extranjera y local enfocadas a jóvenes y adultos. El Canal Comedy Central (México) es propiedad de Viacom y es operado por VIMN The Americas."
    },
    {
        id: 34,
        title: "El Gourmet",
        reference: "go:tv34",
        genre: "gastronomia",
        img: "el_gourmet",
        sinopsis: "El Gourmet es un canal de televisión por suscripción latinoamericano de origen argentino dedicado a la gastronomía"
    },
    {
        id: 35,
        title: "Food Network",
        reference: "go:tv35",
        genre: "gastronomia",
        img: "food_network",
        sinopsis: "Food Network conecta a su audiencia con el placer y poder de la comida. Esta marca muestra el paso a paso de todo tipo de recetas y entretiene al público a través de programas conducidos por chefs de talla mundial y expertos culinarios."
    },
    {
        id: 36,
        title: "¡Hola! TV",
        reference: "go:tv36",
        genre: "entretenimiento",
        img: "hola_tv",
        sinopsis: "El Canal ¡Hola! TV es un canal de televisión creado con la asoción de Atresmedia y el grupo ¡HOLA! para latinoamérica y Estados Unidos. ¡Hola! TV cuenta con producción original dirigida a la audiencia de los Estados Unidos y Latinoamérica para reflejar los valores y el mundo estético de la marca ¡HOLA!"
    },
    {
        id: 37,
        title: "LifeTime",
        reference: "go:tv37",
        genre: "estilos de vida",
        img: "lifetime",
        sinopsis: "El Canal Lifetime es un canal de televisión que cuenta con una variedad de series enfocándose en los diferentes estilos de vida de la mujer y programas dedicados al baile, moda y maquillaje. El Canal Lifetime es propiedad de A+E Networks Sony Pictures Entertainment y es operado por HBO Latin America Group."
    },
    {
        id: 38,
        title: "MTV",
        reference: "go:tv38",
        genre: "musica",
        img: "mtv",
        sinopsis: "El Canal MTV es un canal de televisión por suscripción latinoamericano de origen estadounidense que transmite al televidente una programación compuesta por talk show, música, series y eventos en vivo.El canal es propiedad de ViacomCBS y es operado por ViacomCBS Networks Americas."
    },
    {
        id: 39,
        title: "MTV Live",
        reference: "go:tv39",
        genre: "musica",
        img: "mtv_live",
        sinopsis: "MTV Live es la versión internacional del canal de televisión estadounidense MTV Live como red de televisión de pago de música en vivo de alta definición de 24 horas propiedad de Paramount Networks EMEAA, subsidiaria de Paramount International Networks."
    },
    {
        id: 40,
        title: "Space",
        reference: "go:tv40",
        genre: "peliculas",
        img: "space",
        sinopsis: "Space es un canal de televisión por suscripción latinoamericano de origen argentino. Es propiedad de Warner Bros. Discovery y es operado por Warner Bros. Discovery Americas. El canal está orientado al público de jóvenes y adultos."
    },
    {
        id: 41,
        title: "SyFy",
        reference: "go:tv41",
        genre: "peliculas",
        img: "syfy",
        sinopsis: "Syfy es un canal de televisión por suscripción estadounidense, dedicado mayoritariamente a la emisión de series y películas de ciencia ficción, si bien, también dedica espacios a los géneros de fantasía, horror y fenómenos paranormales."
    },
    {
        id: 42,
        title: "Telehit",
        reference: "go:tv42",
        genre: "musica",
        img: "telehit",
        sinopsis: "Telehit es un canal de televisión por suscripción latinoamericano de origen mexicano de temática musical dirigido al público hispanohablante. El canal fue lanzado el 27 de agosto de 1993, es propiedad de TelevisaUnivision y operado por Televisa Networks."
    },
    {
        id: 43,
        title: "TNT",
        reference: "go:tv43",
        genre: "peliculas",
        img: "tnt",
        sinopsis: "TNT es un canal de televisión por suscripción latinoamericano de origen estadounidense, variante regional del canal original, que inició sus operaciones el 28 de enero de 1991 y está orientado a la emisión de películas de cualquier género. Es propiedad de Warner Bros. Discovery y es operado por Warner Bros."
    },
    {
        id: 44,
        title: "TNT Series",
        reference: "go:tv44",
        genre: "series",
        img: "tnt_series",
        sinopsis: "TNT Series es un canal de televisión por suscripción latinoamericano de origen estadounidense, señal hermana de TNT en Latinoamérica, lanzado en 2015. Es propiedad de Warner Bros. Discovery y es operado por Warner Bros. Discovery Americas."
    },
    {
        id: 45,
        title: "Tru TV",
        reference: "go:tv45",
        genre: "entretenimiento",
        img: "tru_tv",
        sinopsis: "TruTV es un canal de televisión por suscripción latinoamericano de origen estadounidense operado por Warner Bros. Discovery Americas. Inició sus transmisiones en Latinoamérica el 1 de abril de 2009 en reemplazo de Retro,1 cambiando radicalmente toda la programación de la señal, basada en series clásicas, y moviéndose la misma a TCM."
    },
    {
        id: 46,
        title: "Unicable",
        reference: "go:tv46",
        genre: "entretenimiento",
        img: "unicable",
        sinopsis: "Unicable es un canal de televisión por suscripción mexicano producido por TelevisaUnivision. Su programación se centra en la emisión de programas de entretenimiento, estilo de vida, moda, salud, espectáculos, series, novelas y películas."
    },
    {
        id: 47,
        title: "MTV Hits",
        reference: "go:tv47",
        genre: "musica",
        img: "mtv_hits",
        sinopsis: "MTV Hits fue un canal de televisión por suscripción latinoamericano de origen estadounidense operado por Paramount Global. Su programación consiste en la emisión de videos musicales. El canal poseía una sola señal para toda Latinoamérica, a diferencia de la mayoría de señales de Paramount Global que están divididas en diferentes regiones."
    },
    {
        id: 48,
        title: "E!",
        reference: "go:tv48",
        genre: "estilos de vida",
        img: "e",
        sinopsis: "E! (conocido como E! Entertainment Television) es un canal de televisión por suscripción latinoamericano de origen estadounidense, propiedad de NBCUniversal, operado por NBCUniversal International Networks y distribuido por Ole Distribution, una empresa formada entre Ole Communications y Warner Bros. Discovery.2"
    },
    {
        id: 49,
        title: "TUDN",
        reference: "go:tv49",
        genre: "deportes",
        img: "tudn",
        sinopsis: "TUDN (acrónimo de Televisa Univision Deportes Network) es un canal de televisión por suscripción mexicano-estadounidense especializado en deportes, propiedad de TelevisaUnivision."
    },
    {
        id: 50,
        title: "FOX SPORTS 2",
        reference: "go:tv50",
        genre: "deportes",
        img: "fox_sports_2",
        sinopsis: "Fox Sports 2 es un canal de televisión por suscripción latinoamericano de origen estadounidense dedicado a la programación deportiva, transmitiendo su programación desde Argentina, para Sudamérica y Centroamérica. Fue lanzado el 12 de octubre de 2009, bajo el nombre de Fox Sports+, y el 5 de noviembre de 2012, con la actual. El canal es propiedad de The Walt Disney Company Latin America, siendo operado por Disney Media Networks Latin America."
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