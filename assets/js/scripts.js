const slideBanner = function () {
	new Swiper('#slideBanner', {
		loop: false,
		simulateTouch: false,
		speed: 250,
		navigation: {
			nextEl: '#slideBanner .slide-button-next',
			prevEl: '#slideBanner .slide-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		on: {
			init: function () {
				Waves.attach('#slideBanner .swiper-slide .btn');
			}
		}
	});
}

const initRowCard = function () {
	let elm = $('#form-expandCard');
	elm.find('.createRow').click(function () {
		html = `<div class="row row-10 mb-3 align-items-center">
									<div class="col-md-3">
										<div class="form-group">
											<select class="form-control" id="network">
												<option name="viettel">Viettel</option>
												<option name="vinaphone">Vinaphone</option>
												<option name="mobile">Mobile</option>
												<option name="gate">Gate</option>
												<option name="zing">Zing</option>
											</select>
										</div>
									</div>
									<div class="col-md-3">
										<div class="form-group">
											<input type="text" class="form-control" id="code" placeholder="Mã thẻ">
										</div>
									</div>
									<div class="col-md-3">
										<div class="form-group">
											<input type="text" class="form-control" id="seri" placeholder="Mã Seri">
										</div>
									</div>
									<div class="col-md-2 col-9">
										<div class="form-group">
											<select class="form-control" id="price">
												<option name="-1">--- Mệnh giá ---</option>
												<option name="10000">10.000 đ</option>
												<option name="20000">20.000 đ</option>
												<option name="30000">30.000 đ</option>
												<option name="50000">50.000 đ</option>
												<option name="100000">100.000 đ</option>
												<option name="200000">200.000 đ</option>
												<option name="300000">300.000 đ</option>
												<option name="500000">500.000 đ</option>
												<option name="1000000">1.000.000 đ</option>
											</select>
										</div>
									</div>
									<div class="col-md-1 col-3">
										<a href="javascript:void(0)"
										   class="deleteRow btn-delete_row btn btn-danger btn-sm waves-light waves-effect">
											<i class="fas fa-trash"></i>
											Xóa
										</a>
									</div>
								</div>`;
		$('#form-expandCard').append(html)
	});

	elm.on('click', '.deleteRow', function () {
		$(this).closest('.row').remove();
	});
}

$(function () {
	Waves.init();

	slideBanner();

	initRowCard();
});