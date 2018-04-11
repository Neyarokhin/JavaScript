class option { 
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = '300',
		this.width = '400',
		this.bg = 'green',
		this.fontSize = '50px',
		this.textAlign = 'center';
	}

	createDiv() {
		let div = document.createElement('div');

		div.innerHTML = 'Quatsch';

		div.style.cssText = `height:${this.height}; width${this.width}; background-color:${this.dg}; font-size:${this.fontSize}; text-alagin:${this.textAlign};`;

		document.body.appendChild(div);
	}
}

let obj = new option;

obj.createDiv();

	