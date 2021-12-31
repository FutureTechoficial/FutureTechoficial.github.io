window.addEventListener("scroll", function(){
    var barra__nav = document.querySelector(".barra__nav");
    barra__nav.classList.toggle("abajo",window.scrollY>2);
})

//texto header//

const typed = new Typed('.typed', {
	strings: [
		'<i class="nombre">Hola, Mi nombre Es Erick</i>',
        '<i class="saludo">Sera un Placer Atenderte</i>',		
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


/*******VENTANAS*********/

function mostrarhtml(){
	swal({
		title: "HTML",
		text: "El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos",
		icon: "img/html.svg",
		button: 'Gracias por la Data',
		
	 })
		
}

function mostrarcss(){
	swal({
       title: "CSS",
	   text: "CSS (en inglés Cascading Style Sheets) es lo que se denomina lenguaje de hojas de estilo en cascada y se usa para estilizar elementos escritos en un lenguaje de marcado como HTML. CSS separa el contenido de la representación visual del sitio.",
	   icon: "img/css.svg",
	   button: 'Gracias por la Data',
	})
		
}

function mostrarjs(){
	swal({
       title: "JAVASCRIPT",
	   text: "JavaScript es el lenguaje de programación que se usa para añadir características interactivas a tu sitio web, por ejemplo, eventos que ocurren cuando los botones son presionados o los datos son introducidos en los formularios, efectos de estilo dinámicos, animación, y mucho más :).",
	   icon: "img/js.svg",
	   button: 'Gracias por la Data',
	})
		
}

function mostrarPs(){
	swal({
       title: "PHOTOSHOP",
	   text: "Photoshop es un programa para el retoque fotográfico y el diseño gráfico Photoshop es una herramienta fundamental para la edición de fotografía, pero también se usa mucho para la edición gráfica general e incluso para la creación de interfaces de usuario.",
	   icon: "img/photoshop.svg",
	   button: 'Gracias por la Data',
	})
		
}

