// Ajax-запрос с сохранением UTM меток
$('.cf-ajax').each(function(ind, el) {
	$(el).on('submit', function(event) {
		var self = this;
		event.preventDefault();
		var data = $(this).serializeArray();
		window.location.search.slice(1, location.search.length).split('&')
			.filter(function(el) {return el.slice(0,4) === 'utm_'})
			.map(function(el) {var ret=el.split('='); data.push({name: ret[0], value: ret[1]})});
		
		$.post('/cgi/formstub.php', data, function(){
			$(self).fadeOut();
			$(self).parent().find('.cf-ajax-success').fadeIn();
		});
	});
});