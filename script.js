class FormCTRL {
	constructor(
		selector = document,
		{
			type = 'text',
			pattern = undefined,
			leng = undefined,
			onValid = undefined,
			onInValid = undefined,
		} = options,
	) {
		this.selector = selector;
		this.options = { type, pattern, leng, onValid, onInValid };
	}
}

dock.ready(() => {
	let ctrl = dock._class('form-control', 0);
	let input = ctrl.firstElementChild.children[1];
	run.usable(input.parentElement.dataset['email'], () => {
		input.type = 'email';
		input.onkeyup = (e) => {
			let v = e.target.value;
			if (regex.txt(e.key) || e.key === ' ') {
				if (regex.email(v)) {
					e.target.parentElement.classList.add('valid');
					e.target.parentElement.classList.remove('in-valid');
				} else {
					e.target.parentElement.classList.add('in-valid');
					e.target.parentElement.classList.remove('valid');
				}
			}
		};
	});
	input.onfocus = (e) => e.target.parentElement.classList.add('focus');
	input.onblur = (e) =>
		e.target.value < 1 && e.target.parentElement.classList.remove('focus');
});
