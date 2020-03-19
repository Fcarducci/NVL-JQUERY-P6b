//pregunta 2:

$("ul:first").after("<ul id=mi-lista></ul>");

for (let i = 0; i < 5; i++) {
	$("ul li")
		.eq(i)
		.clone(i)
		.appendTo($("#mi-lista"));
}

//pregunta 3:

for (let j = 0; j < 5; j++) {
	let eliminar = $("ul li")[0];
	eliminar.remove();
}
//pregunta 4:

let agregando = $("ul li").eq("0");
agregando.before(" <li id=cantabria class=even><span>Cantabria</span></li>");

//pregunta5:

$("#mi-lista").append(
	"<li id=perejil class=odd><span>Isla de Perejil</span></li>"
);
