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
        sinopsis: "Nickelodeon es un canal de televisión por suscripción infantil y juvenil estadounidense propiedad de Paramount Global, dirigido principalmente a los niños, preadolescentes y adolescentes."
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
        img: "espn_2",
        sinopsis: "ESPN 2 es un canal de televisión por suscripción latinoamericano de origen estadounidense, especializado en deportes lanzado al aire en 1996 y dirigido para la audiencia de México, Centroamérica y República Dominicana."
    },
    {
        id: 52,
        title: "FOX SPORTS PREMIUM",
        reference: "go:tv52",
        genre: "deportes",
        img: "fox_sports_premium",
        sinopsis: "Fox Sports Premium es un canal de televisión por suscripción prémium mexicano de origen estadounidense dedicado a la transmisión de eventos deportivos de pago por evento. Comenzó sus transmisiones el día 2 de abril de 2022 con la emisión del WrestleMania 38."
    },
    {
        id: 53,
        title: "MTV 00s",
        reference: "go:tv53",
        genre: "musica",
        img: "mtv_00",
        sinopsis: "MTV 00s (pronunciado como MTV Zeros, MTV Noughties o MTV Aughts) es un canal de televisión por suscripción que presenta videos musicales de la década de los 2000. Se emitió en modo de prueba del 29 de mayo al 22 de junio de 2020 en el Reino Unido, como un cambio de marca temporal de MTV OMG. Fue lanzado el 2 de agosto de 2021 en reemplazo de VH1 Europe."
    },
    {
        id: 54,
        title: "Canal 5",
        reference: "go:tv54",
        genre: "general",
        img: "canal_5",
        sinopsis: "Canal 5 (estilizado como 5*) es una cadena de televisión abierta mexicana con cobertura nacional, con sede en la Ciudad de México, perteneciente a TelevisaUnivision. Su estación principal es XHGC-TDT de la Ciudad de México, cuyo canal de frecuencias era el 5 de VHF (canal analógico). Actualmente, tiene asignado el canal virtual digital 5.1 (excepto XETV-TDT) en sus estaciones retransmisoras, propiedad de la filial de Grupo Televisa, Radio Televisión, S.A. de C.V."
    },
    {
        id: 55,
        title: "A&E",
        reference: "go:tv55",
        genre: "series",
        img: "ae",
        sinopsis: "A&E es un canal de televisión por suscripción latinoamericano de origen estadounidense, variante regional del canal original. Su programación se centraba en la emisión de biografías, documentales, y series (en especial de dramas, policiales y misterios), pero más tarde se expandió para incluir también telerrealidad. Tiene un alcance de 32 millones de hogares en Latinoamérica."
    },
    {
        id: 56,
        title: "A3 Series",
        reference: "go:tv56",
        genre: "series",
        img: "atres_series",
        sinopsis: "Atreseries Internacional es un canal de televisión por suscripción español, señal internacional del canal Atreseries, disponible en plataformas de televisión de pago de América, Europa y Oceanía. Sus emisiones regulares comenzaron el 1 de junio de 2014 y su programación consiste en la emisión de series de producción española. El 19 de enero de 2016 se renovó la identidad visual del canal para igualarla a su homólogo español."
    },
    {
        id: 57,
        title: "ISAT",
        reference: "go:tv57",
        genre: "peliculas",
        img: "isat",
        sinopsis: "I.Sat es un canal de televisión por suscripción latinoamericano con sede en Argentina, propiedad de Warner Bros. Discovery y operado por Warner Bros. Discovery Americas, especializado en cine independiente, cortos, documentales y series. El canal está orientado al público de jóvenes-adultos (14 a 49 años) y urbano."
    },
    {
        id: 58,
        title: "Films & Arts",
        reference: "go:tv58",
        genre: "documentales",
        img: "films_arts",
        sinopsis: "Film & Arts (estilizado como film&arts) es un canal de televisión por suscripción latinoamericano de origen argentino dedicado al cine, la música, el teatro y otros espectáculos artísticos y culturales."
    },
    {
        id: 59,
        title: "Morbido TV",
        reference: "go:tv59",
        genre: "peliculas",
        img: "morbido",
        sinopsis: "Mórbido TV no es un canal de nicho, sino general, con una temática explícita, como el terror, el horror y la ciencia ficción."
    },
    {
        id: 60,
        title: "DW",
        reference: "go:tv60",
        genre: "noticias",
        img: "dw_espanol",
        sinopsis: "DW Español (previamente conocido como DW Latinoamérica) es un canal de televisión por suscripción latinoamericano de origen alemán, filial de la cadena internacional Deutsche Welle para Latinoamérica. Su señal también se recibe en Estados Unidos, Brasil, y el Caribe."
    },
    {
        id: 61,
        title: "Bloomberg TV",
        reference: "go:tv61",
        genre: "noticias",
        img: "bloomberg",
        sinopsis: "Bloomberg Television es un canal internacional de televisión por suscripción de noticias estadounidense, que emite programación acerca de las últimas noticias sobre negocios, el cual es propiedad de Bloomberg L.P. Es distribuida internacionalmente, llegando a más de 310 millones de hogares alrededor del mundo. Sus oficinas centrales están basadas en la ciudad de Nueva York, junto con sedes en Londres, Mumbai y Hong Kong."
    },
    {
        id: 62,
        title: "Discovery Turbo",
        reference: "go:tv62",
        genre: "automovilismo",
        img: "turbo",
        sinopsis: "Discovery Turbo es un canal de televisión por suscripción de origen estadounidense, propiedad de Warner Bros. Discovery. Su programación se basa en programas relacionados con los vehículos (automóviles, motocicletas, trenes, barcos y aviones) y también sobre la ingeniería detrás de ellos y otras herramientas."
    },
    {
        id: 63,
        title: "ESPN 3",
        reference: "go:tv63",
        genre: "deportes",
        img: "espn_3",
        sinopsis: "ESPN 3 es un canal de televisión por suscripción latinoamericano de origen estadounidense, lanzado el 14 de noviembre de 2011, que emite contenido deportivo."
    },
    {
        id: 64,
        title: "AYM Sports",
        reference: "go:tv64",
        genre: "deportes",
        img: "aym_sports",
        sinopsis: "AYM Sports, es un canal deportivo, que se trasmite por medio de la señal de cable en México, el cual difunde diferentes eventos deportivos tanto nacionales como internacionales, actualmente transmite la Segunda División de México y la Liga MX Sub-17 y Sub-20."
    },
    {
        id: 65,
        title: "WOBI",
        reference: "go:tv65",
        genre: "noticias",
        img: "wobi",
        sinopsis: "WOBI (World of Business Ideas) es un canal de televisión por suscripción creado por el Grupo HSM para reemplazar a ManagemenTV. Entró en operación el 1 de abril de 2012, siendo el primer canal de televisión del mundo dedicado al género de la administración. Su programación está basada en documentales, reality shows y entrevistas con las más destacadas personalidades del mundo de los negocios a nivel global."
    },
    {
        id: 66,
        title: "TCM",
        reference: "go:tv66",
        genre: "peliculas",
        img: "tcm",
        sinopsis: "TCM es un canal de televisión por suscripción latinoamericano de origen estadounidense. Es propiedad de Warner Bros. Discovery y es operado por Warner Bros. Discovery Americas, bajo la marca internacional Turner Classic Movies. Su programación está dirigida a un público de 35 años en adelante."
    },
    {
        id: 67,
        title: "FOX SPORTS",
        reference: "go:tv67",
        genre: "deportes",
        img: "fox_deportes",
        sinopsis: "Fox Deportes (anteriormente Fox Sports en Español) es un canal de televisión por suscripción estadounidense de temática deportiva en español. Es propiedad de Fox Corporation y se encuentra dirigido a la comunidad hispana de Estados Unidos. Dentro de su programación, emite principalmente deportes como fútbol, béisbol, deporte de combate o automovilismo."
    },
    {
        id: 68,
        title: "Baby TV",
        reference: "go:tv68",
        genre: "infantiles",
        img: "baby_tv",
        sinopsis: "BabyTV es un canal de televisión por suscripción internacional para bebés, niños pequeños y padres, propiedad de Fox Networks Group, una subsidiaria de Walt Disney Direct-to-Consumer & International, en última instancia, propiedad de The Walt Disney Company Lanzado en 2003, BabyTV se distribuye en más de 100 países, transmitiendo en 18 idiomas (a partir de 2013)."
    },
    {
        id: 69,
        title: "TeleFormula",
        reference: "go:tv69",
        genre: "noticias",
        img: "teleformula",
        sinopsis: "No hay información"
    },
    {
        id: 70,
        title: "Universal",
        reference: "go:tv70",
        genre: "series",
        img: "universal",
        sinopsis: "Universal TV (conocido como Universal) es un canal de televisión por suscripción latinoamericano de origen estadounidense. Su programación se compone de series, películas de los Estudios Universal y programas basados en la acción, el crimen, la investigación, el misterio, y el drama, además de series de comedia. Es propiedad del conglomerado NBCUniversal, y se encuentra operado por NBCUniversal International Networks y distribuido por Ole Distribution, una empresa formada entre Ole Communications y WarnerMedia (hoy Warner Bros. Discovery)."
    },
    {
        id: 71,
        title: "De Pelicula",
        reference: "go:tv71",
        genre: "peliculas",
        img: "de_pelicula",
        sinopsis: "De Película (estilizado como Dpelícula) es un canal de televisión por suscripción internacional de origen mexicano, propiedad de Televisa Networks, que está especializado en emitir películas del cine clásico mexicano, y también del nuevo cine mexicano, el cuál inició sus operaciones el 22 de enero del año 1990"
    },
    {
        id: 72,
        title: "Discovery Theater",
        reference: "go:tv72",
        genre: "documentales",
        img: "theater",
        sinopsis: "Discovery Theater es un canal de televisión por suscripción latinoamericano en alta definición de origen estadounidense, propiedad de Warner Bros. Discovery. Su programación se basa en la ciencia y la cultura."
    },
    {
        id: 73,
        title: "Discovery Science",
        reference: "go:tv73",
        genre: "documentales",
        img: "discovery_science",
        sinopsis: "Discovery Science es un canal de televisión por suscripción producido por Warner Bros. Discovery. En Latinoamérica, Sureste Asiático, Europa y Australia se conoce como Discovery Science. Science Channel se caracteriza por transmitir programas de televisión (que fueron emitidos anteriormente en Discovery Channel) relacionado con la ciencia cubriendo todos los aspectos de la ciencia, como el espacio, tecnología, prehistoria y animal."
    },
    {
        id: 74,
        title: "Golden Plus",
        reference: "go:tv74",
        genre: "peliculas",
        img: "golde_plus",
        sinopsis: "El Canal Golden Plus es un canal de televisión que emite su programación en alta definición y cuenta con una programación distinta a la señal principal."
    },
    {
        id: 75,
        title: "FOX SPORTS 3",
        reference: "go:tv75",
        genre: "deportes",
        img: "fox_sports_3",
        sinopsis: "Fox Sports 3 es un canal de televisión por suscripción mexicano de origen estadounidense especializado en deportes. Fue lanzado el 5 de noviembre de 2012 en reemplazo de la variante latinoamericana de Speed. El canal es propiedad de Grupo Multimedia Lauman (bajo licencia de Fox Broadcasting Company)."
    },
    {
        id: 76,
        title: "Investigation Discovery",
        reference: "go:tv76",
        genre: "documentales",
        img: "discovery_id",
        sinopsis: "Investigation Discovery es un canal de televisión por suscripción, operado por Warner Bros. Discovery El canal ofrece programación con respecto a investigaciones criminales, principalmente las investigaciones de homicidios y otros documentales relacionados con delitos."
    },
    {
        id: 77,
        title: "H2",
        reference: "go:tv77",
        genre: "documentales",
        img: "h2",
        sinopsis: "History 2 (o simplemente H2) es un canal de televisión por suscripción latinoamericano de origen estadounidense que emite documentales históricos con un enfoque internacional. Es el canal hermano de History."
    },
    {
        id: 78,
        title: "Mas Chic",
        reference: "go:tv78",
        genre: "estilos de vida",
        img: "mas_chic",
        sinopsis: "Más Chic es un canal de televisión por suscripción latinoamericano de origen argelino que opera para Latinoamérica y la comunidad hispana de Estados Unidos."
    },
    {
        id: 79,
        title: "MTV 80s",
        reference: "go:tv79",
        genre: "musica",
        img: "mtv_80s",
        sinopsis: "MTV 80s es un canal de televisión por suscripción de carácter mundial, operado por Paramount International Networks que presenta videos musicales de la década de 1980. Comenzó a transmitirse como canal de televisión el 5 de octubre de 2020 en reemplazo de VH1 Classic Europe, luego de haber emitido en otras señales hermanas. Está disponible en Europa, Latinoamérica y Nueva Zelanda."
    },
    {
        id: 80,
        title: "TVC Deportes",
        reference: "go:tv80",
        genre: "deportes",
        img: "tvc_deportes",
        sinopsis: "TVC Deportes es un canal de televisión por suscripción mexicano, el cual emite programación deportiva tanto nacional como internacional; es propiedad de PCTV."
    },
    {
        id: 81,
        title: "ONCE TV",
        reference: "go:tv81",
        genre: "cultural",
        img: "once_tv",
        sinopsis: "Canal 11 (estilizado desde el 21 de abril del 2019 como once) es una cadena de televisión pública mexicana, perteneciente al Instituto Politécnico Nacional (IPN). Su estación principal es XEIPN-TDT, localizada en la Ciudad de México. Inició sus transmisiones el 2 de marzo de 1959."
    },
    {
        id: 82,
        title: "Garage TV",
        reference: "go:tv82",
        genre: "automovilismo",
        img: "garage_tv",
        sinopsis: "El Garage TV es un canal de televisión por suscripción dedicado las 24 horas a programas relacionados con el automóvil, así como su historia, fabricantes legendarios, diferentes disciplinas deportivas, seguridad, novedades de la industria, actividad off-road, clasificados, mecánica, los grandes volantes de la historia, diseño industrial, eventos y turismo; además de ciclos especiales sobre motociclismo, aeronáutica y motonáutica."
    },
    {
        id: 83,
        title: "Glitz",
        reference: "go:tv83",
        genre: "novelas",
        img: "glitz",
        sinopsis: "Glitz (estilizado como glitz*) es un canal de televisión por suscripción latinoamericano propiedad de Warner Bros. Discovery, enfocado en entretenimiento local para todo público de la audiencia latinoamericana, reúne los formatos y géneros más reconocidos de la televisión abierta."
    },
    {
        id: 84,
        title: "TBS",
        reference: "go:tv84",
        genre: "peliculas",
        img: "tbs",
        sinopsis: "TBS (previamente conocido como TBS Very Funny) es un canal de televisión por suscripción latinoamericano de origen estadounidense que emite series, programas y películas. Propiedad de Warner Bros. Discovery y operado por Warner Bros. Discovery Americas, fue lanzado el 1 de octubre de 2011."
    },
    {
        id: 85,
        title: "Discovery World",
        reference: "go:tv85",
        genre: "estilos de vida",
        img: "discovery_world",
        sinopsis: "Discovery World es un canal de televisión por suscripción latinoamericano de origen estadounidense, lanzado el 16 de marzo de 2015 en reemplazo de la señal original de TLC HD. Ofrece series, programas y documentales, incluyendo en su mayoría viajes y culinaria que en su mayoría fue movida a Food Network."
    },
    {
        id: 86,
        title: "Cinemax",
        reference: "go:tv86",
        genre: "peliculas",
        img: "cinemax",
        sinopsis: "Cinemax es un canal de televisión por suscripción latinoamericano de origen estadounidense propiedad de Warner Bros. Discovery, y operado por Warner Bros. Discovery Americas. Fue lanzado al aire el 5 de septiembre de 1993 y es el único canal de HBO dentro de la categoría de canales básicos a nivel continental. Durante su antigua denominación, el canal se emitía como una señal pago por visión."
    },
    {
        id: 87,
        title: "Telehit Plus",
        reference: "go:tv87",
        genre: "musica",
        img: "telehit",
        sinopsis: "Telehit Música Plus es la señal en alta definición con programación diferente a la señal en resolución estándar. Inició sus transmisiones bajo el nombre de Telehit HD el 15 de agosto de 2014 en señal de pruebas y se inició oficialmente el 1 de septiembre a las 2:00 p.m. (horario de México)."
    },
    {
        id: 88,
        title: "Univision",
        reference: "go:tv88",
        genre: "general",
        img: "univision",
        sinopsis: "Univision es una cadena de televisión estadounidense en español, propiedad de TelevisaUnivision y operada por la filial Univision Communications. El canal está dedicado, principalmente, a la población hispanohablante de Estados Unidos, e incluye telenovelas y otras series dramáticas, deportes, comedias de situación, series de realidad y variedad, programación de noticias y largometrajes importados en español. Su principal competidor es Telemundo."
    },
    {
        id: 89,
        title: "Tlnovelas",
        reference: "go:tv89",
        genre: "novelas",
        img: "tlnovelas",
        sinopsis: "Tlnovelas es un canal de televisión por suscripción internacional de origen mexicano enfocado en telenovelas. El canal posee tres señales, las cuales se distribuyen en Latinoamérica, Europa y los Estados Unidos respectivamente; esta última señal se encuentra disponible bajo el nombre de Univision Tlnovelas."
    },




]

module.exports.channels = channels;