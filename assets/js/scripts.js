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

const initRowCardChange = function () {
	let elm = $('#form-expandCard_Change');
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
		$('#form-expandCard_Change').append(html)
	});

	elm.on('click', '.deleteRow', function () {
		$(this).closest('.row').remove();
	});
}

const initRowCardTopUp = function () {
	let elm = $('#form-expandCard_TopUp');
	elm.find('.createRow').click(function () {
		html = `<div class="row row-10 mb-3 align-items-center">
								<div class="col-md-2">
									<div class="form-group">
										<input type="tel" minlength="10" maxlength="11" class="form-control" id="sdt"
											   placeholder="Số điện thoại">
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<select class="form-control" id="nhamang">
											<option name="-1">--- Nhà mạng ---</option>
											<option name="">Viettel trả trước</option>
											<option name="">Viettel trả sau / FTTH / Home</option>
											<option name="">Vina trả trước</option>
											<option name="">Vina trả sau</option>
											<option name="">Mobi trả trước</option>
											<option name="">Mobi trả sau</option>
											<option name="">Bắn TKC Viettel</option>
											<option name="">Bắn TKC Vina</option>
											<option name="">Bắn TKC Mobi</option>
										</select>
									</div>
								</div>
								<div class="col-md-2">
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
								<div class="col-md-2">
									<div class="form-group">
										<input type="text" class="form-control" id="chietkhau" placeholder="Chiết khấu"
											   readonly>
									</div>
								</div>
								<div class="col-md-3">
									<div class="form-group">
										<input type="text" class="form-control" id="ghichu" placeholder="Ghi chú">
									</div>
								</div>
								<div class=" col-md-1 col-3">
									<a href="javascript:void(0)"
									   class="createRow btn-create_row btn btn-success btn-sm waves-light waves-effect">
										<i class="fas fa-plus"></i>
										Thêm
									</a>
								</div>
							</div>`;
		$('#form-expandCard_TopUp').append(html)
	});

	elm.on('click', '.deleteRow', function () {
		$(this).closest('.row').remove();
	});
}

$(function () {
	Waves.init();

	slideBanner();

	initRowCardChange();
	initRowCardTopUp();
});