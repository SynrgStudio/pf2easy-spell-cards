let fired = false;
let ready = false;
let observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		if ((window.location.pathname.indexOf("sheets") > 0 || window.location.pathname.indexOf("spellbook") > 0) && mutation.target.className.indexOf("fontawesome-i2svg-complete") > 0) {
			ready = true;
		}
		if (!fired && ready) {
			fired = true;
			let button = `<button type="button" style="margin-top: 2px; font-size: 1.1em; border-radius: 50%; padding: 0.3em; line-height: 1em;" class="btn btn-maroon btn-sm mx-1 no-print" data-toggle="tooltip" title="" id="cards_btn" data-original-title="Enable cards display" > <svg class="svg-inline--fa fa-line-columns fa-w-16" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="line-columns" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364.14 364.14" data-fa-i2svg=""><g class="fa-group"> <path class="fa-primary" fill="currentColor" d="M354.069,98.456c-2.163-6.716-6.812-12.185-13.086-15.399L184.652,2.917c-6.275-3.214-13.43-3.793-20.144-1.631 c-6.716,2.164-12.185,6.812-15.4,13.087l-0.098,0.192l-13.475-4.539c-13.805-4.649-28.82,2.795-33.468,16.597l-1.41,4.196 l-20.983-3.158c-6.978-1.048-13.944,0.679-19.62,4.867c-5.678,4.189-9.382,10.338-10.431,17.313l-0.047,0.314h-14.38 c-14.563,0-26.411,11.848-26.411,26.411v261.163c0,14.563,11.848,26.411,26.411,26.411h175.667c10.811,0,20.125-6.53,24.207-15.853 c0.315-0.721,117.37-229.687,117.37-229.687C355.654,112.325,356.233,105.17,354.069,98.456z M264.266,68.978 c2.921,3.955,4.127,8.811,3.396,13.673l-30.39,201.905V76.566c0-7.049-2.781-13.456-7.297-18.197l22.218,3.343 C257.057,62.444,261.344,65.024,264.266,68.978z M275.573,83.842c1.05-6.976-0.681-13.943-4.872-19.617 c-0.076-0.103-0.157-0.2-0.234-0.302l28.985,9.765c4.66,1.569,8.429,4.859,10.613,9.264c2.184,4.405,2.522,9.397,0.952,14.059 l-67.652,200.813L275.573,83.842z M166.961,8.9c4.682-1.508,9.668-1.104,14.042,1.136l87.092,44.646L156.721,17.163 C159.005,13.231,162.596,10.307,166.961,8.9z M109.649,29.173c3.238-9.619,13.708-14.808,23.332-11.566l96.973,32.668 L108.69,32.028L109.649,29.173z M64.803,38.966c3.957-2.919,8.816-4.125,13.679-3.393l96.908,14.583H57.709 C58.606,45.659,61.088,41.707,64.803,38.966z M210.862,356.14H35.195c-10.152,0-18.411-8.259-18.411-18.411V76.566 c0-10.152,8.259-18.411,18.411-18.411h175.667c10.152,0,18.411,8.259,18.411,18.411v261.163c0,1.5-0.194,2.954-0.537,4.349 c-0.049,0.2-0.248,0.93-0.269,0.999C226.168,350.627,219.153,356.14,210.862,356.14z M345.319,114.952l-93.071,181.564 l66.351-196.952c2.177-6.468,1.787-13.378-1.077-19.543l19.812,10.156c4.373,2.24,7.612,6.052,9.12,10.732 C347.963,105.591,347.559,110.578,345.319,114.952z" ></path></g></svg><!-- <i class="fad fa-line-columns"></i> Font Awesome fontawesome.com --></button>`;

			document.querySelector('small.ml-auto').innerHTML = document.querySelector('small.ml-auto').innerHTML + button
			document.querySelector("button#cards_btn").addEventListener('click', function () {
				this.disabled = true;
				let script_one_time = document.createElement('script'); script_one_time.src = "https://github.com/SynrgStudio/pf2easy-spell-cards/blob/main/one-time-insert.js"; document.querySelector('head').appendChild(script_one_time);
			}, false);
		}
	});
});

observer.observe(document.querySelector('html'), {
	attributes: true,
	attributeFilter: ['class']
});