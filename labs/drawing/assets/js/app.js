((function (){

	$(document).read(function() {

		console.log("document is ready");

		setTimeout(() => {
			$('#hello-text').addClass('animated infinite bounce');
		}, 1000);
	});
})(document);

// (define and execute here)(pass parameters here)
