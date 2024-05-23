
// Leer palabras seleccionadas del almacenamiento local
const seleccionados = JSON.parse(localStorage.getItem('seleccionados'));

// Generar historia basada en las palabras seleccionadas
let historia = `En una tarde soleada en la bulliciosa ciudad de Nueva York, Peter Parker, también conocido como Spiderman, se encontraba patrullando las calles en su eterna misión de proteger a los ciudadanos. Mientras se deslizaba entre los rascacielos, su agudo sentido arácnido captó una señal de peligro que provenía de ${seleccionados.lugar}.`;

if (seleccionados.lugar === "Callejón Oscuro") {
    historia += ` Sin dudarlo, se dirigió hacia el ${seleccionados.lugar}, un lugar conocido por ser la guarida de los criminales más peligrosos de la ciudad. La oscuridad del callejón era tan densa que apenas dejaba ver un palmo delante de su nariz, pero eso no detuvo a Spiderman. Con cautela, avanzó entre las sombras, preparado para enfrentarse a cualquier adversario que se interpusiera en su camino.`;
} else if (seleccionados.lugar === "Azotea de un rascacielos") {
    historia += ` Sin perder tiempo, se balanceó hacia la ${seleccionados.lugar}, una posición elevada que le brindaba una vista privilegiada de la ciudad, ideal para detectar cualquier amenaza. Desde lo alto de los edificios, Spiderman podía escuchar los murmullos de la ciudad y anticipar los movimientos de sus enemigos. Las alturas no lo intimidaban; al contrario, lo llenaban de energía y determinación.`;
} else if (seleccionados.lugar === "Central Park") {
    historia += ` Aunque Central Park parecía un lugar tranquilo y pacífico, Spiderman sabía que incluso los lugares más apacibles podían esconder peligros inesperados. Se dirigió hacia el parque con cautela, preparado para enfrentar cualquier desafío. Los árboles frondosos y los senderos sinuosos de Central Park proporcionaban un escenario perfecto para una emboscada, pero Spiderman estaba listo para cualquier cosa. Con cada paso, mantenía los sentidos alerta, buscando cualquier indicio de peligro oculto entre la vegetación.`;
}

if (seleccionados.accion === "Batalla contra el Duende Verde") {
    historia += ` Al llegar, se encontró con una escena caótica: el Duende Verde y sus secuaces estaban sembrando el caos en las calles, poniendo en peligro a los inocentes. Con valentía y determinación, Spiderman se enfrentó al villano, desplegando todo su arsenal de habilidades para detenerlo y proteger a la ciudad. La batalla fue épica, con telarañas volando por todas partes y edificios temblando bajo el peso del enfrentamiento. Cada golpe resonaba en el aire, pero Spiderman se mantuvo firme, decidido a prevalecer.`;
} else if (seleccionados.accion === "Rescate de civiles atrapados en un incendio") {
    historia += ` Al llegar, descubrió que un edificio cercano estaba en llamas y que varias personas estaban atrapadas en su interior. Sin dudarlo, se adentró en el peligro para rescatar a los civiles, arriesgando su vida para salvar a los demás. El calor de las llamas era sofocante, pero Spiderman se mantuvo firme, llevando a cabo su misión con valentía y determinación. Cada persona rescatada era un rayo de esperanza en medio de la tragedia, y Spiderman no descansó hasta asegurarse de que todos estuvieran a salvo.`;
} else if (seleccionados.accion === "Persecución de ladrones en motocicletas") {
    historia += ` Al llegar, vio a un grupo de ladrones escapando a toda velocidad en motocicletas robadas, poniendo en peligro a los transeúntes. Spiderman se lanzó en una trepidante persecución por las calles de la ciudad, utilizando sus habilidades acrobáticas y sus telarañas para detener a los delincuentes y devolver la paz a las calles. La persecución fue vertiginosa, con giros y vueltas a toda velocidad mientras Spiderman luchaba por atrapar a los fugitivos. Cada salto y cada giro demostraban la destreza y la agilidad del héroe arácnido, quien no se detuvo hasta que los ladrones estuvieron bajo custodia.`;
}

if (seleccionados.persona === "Mary Jane Watson") {
    historia += ` Durante la batalla, Spiderman recibió inesperadamente la ayuda de Mary Jane Watson, quien demostró ser una aliada valiente y decidida. Juntos, lucharon codo a codo contra el enemigo, fortaleciendo su vínculo y su determinación de proteger a la ciudad. La valentía de Mary Jane inspiró a Spiderman a redoblar sus esfuerzos y enfrentar cualquier desafío con determinación. En medio del caos, encontraron momentos de camaradería y solidaridad, formando un equipo formidable contra las fuerzas del mal.`;
} else if (seleccionados.persona === "Tío Ben") {
    historia += ` En medio del caos, Spiderman recordó las sabias palabras de su querido Tío Ben, quien siempre le enseñó el valor de la responsabilidad y el sacrificio. Inspirado por su legado, redobló sus esfuerzos para proteger a los inocentes y enfrentar el mal con coraje y determinación. El recuerdo de su tío le dio fuerzas para seguir adelante, incluso en los momentos más oscuros. En cada acción, Spiderman buscaba honrar la memoria de su tío, defendiendo los principios de justicia y bondad que le enseñó.`;
} else if (seleccionados.persona === "J. Jonah Jameson") {
    historia += ` A pesar de la oposición de J. Jonah Jameson, el editor del Daily Bugle, Spiderman no se dejó intimidar y continuó luchando por la justicia. Sus acciones valientes y su dedicación a proteger a la ciudad demostraron que era un héroe digno de admiración, incluso ante las críticas de sus detractores. Las noticias de Spiderman en el Daily Bugle no siempre eran favorables, pero eso no detuvo al héroe arácnido en su misión. Cada día, Spiderman salía a las calles con determinación, listo para enfrentar cualquier desafío y defender a los inocentes.`;
}

// Mostrar historia en la página
const historiaText = document.getElementById('historia-text');
historiaText.innerHTML = historia;