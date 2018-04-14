class option { 
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height,
		this.width = width,
		this.bg = bg,
		this.fontSize = fontSize,
		this.textAlign = textAlign;
	}




	createDiv() {
		let div = document.createElement('div');

		div.innerHTML = 'Quatsch';

		div.style.cssText = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size:${this.fontSize}; text-alaign:${this.textAlign};`;

		document.body.appendChild(div);
	}
}



const obj = new option('300','400', 'green', '50px', 'center');

obj.createDiv();

	