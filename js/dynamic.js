import Two from 'https://cdn.skypack.dev/two.js@latest';
 

if(window.innerWidth > 500){
	const two = new Two({
	  type: Two.Types.svg,
	  fullscreen: true,
	  autostart: true
	}).appendTo(document.getElementById("sec6"));

	two.renderer.domElement.style.position = "absolute";


	const characters = [];

	const gravity = new Two.Vector(0, 0.5);

	const styles = {
	family: 'proxima-nova, sans-serif',
	size: 50,
	leading: 50,
	weight: 900
	};

	
	const message = 'Start Typing';

	const directions = two.makeText(message, two.width / 2, two.height / 5, styles);
	directions.fill = 'white';

	window.addEventListener('keydown', keydown, false);
	window.addEventListener('touchstart', touchstart, false);


	two.bind('resize', resize);
	two.bind('update', update);


	function keydown(e) {
	const character = String.fromCharCode(e.which);
	add(character);
	}

	function touchstart(e) {
	const r = Math.random();
	const range = Math.floor(r * 26) + (r > 0.5 ? 97 : 65)
	const character = String.fromCharCode(range);
	add(character);
	}

	function resize() {
	directions.translation.set(two.width / 2, two.height / 6);
	if (window.innerWidth <= 500){
		document.querySelector("#sec6 svg").remove();
	}
	}


	function update() {

	for (let i = 0; i < characters.length; i++) {

		const text = characters[i];
		
		text.translation.addSelf(text.velocity);
		text.rotation += text.velocity.r;
		text.velocity.add(gravity);

		if (text.velocity.y > 0 && text.translation.y > two.height) {
		two.scene.remove(text);
		two.release(text);
		characters.splice(i, 1);
		}
	}
	}


	function add(msg) {

	const x = (Math.random() * two.width) / 2 + two.width / 4;
	const y = two.height * 1.25;

	const text = two.makeText(msg, x, y, styles);
	text.size *= 2;
	text.fill = '#FFF';

	text.velocity = new Two.Vector();
	text.velocity.x = 10 * (Math.random() - 0.5);
	text.velocity.y = -(20 * Math.random() + 13);
	text.velocity.r = (Math.random() * Math.PI) / 8;

	characters.push(text);

	}
}

const iphone = () => {
    if (typeof window === `undefined` || typeof navigator === `undefined`) return false;

    return /iPhone/i.test(navigator.userAgent || navigator.vendor || (window.opera && opera.toString() === `[object Opera]`));
};


if (iphone()){
	document.querySelector("body").style.backgroundImage = "url('../img/iph.png')";
	document.querySelector("body").style.backgroundPosition = "center";

}