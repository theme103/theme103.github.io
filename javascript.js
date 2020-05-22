$('#sandwichmenu').on('click', function(e) {
		e.preventDefault();
		$('#sandwichmenu').toggleClass("active");
    $('.js_menu').toggleClass("active");
	});

var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('footer');
el.innerHTML = 'Наркомания и ее опасность ' + year + '<br>Работу подготовили и выполнили :<br>Зиновьев Илья Аркадьевич<br>Миронов Илья Олегович';
