// import axios from 'axios'
let url_products = 'http://localhost:3000/product';
let url_categories = 'http://localhost:3000/category';
let url_slides = 'http://localhost:3000/slide';

async function detailProduct(id)
{
	let url = 'http://localhost:3000/product/';
	axios.get(url + id)
		.then(function (response) {
			return response.data
		})
		.catch(function (error) {
			console.log(error)
		})
		.then(function (product) {
			$('title').text(product.name);
			$('.card-title').text(product.name);
			$('.img-fluid').attr('src' , product.image);
			$('.img-fluid').attr('style', 'height: 300px');
			$('.price').text(numberFormat(product.price) + ' VND');
			$('.card-text').text(product.desc);
			$('#show-input').attr('product-id', product.id);
		})
}

async function loadCommentProduct(id)
{
	let url = 'http://localhost:3000/comment?product_id=';
	axios.get(url + id)
		.then(function (response) {
			return response.data
		})
		.catch(function (error) {
			console.log(error)
		})
		.then(function (comment) {
			for (var i = 0; i < comment.length; i++) {
				$('.list-comment').prepend('<p>' + comment[i].text +'</p>\n' +
					'            <small class="text-muted">' + comment[i].created_at + '</small>\n' +
					'            <hr>');
			}
		})
}

async function productsByCate(id)
{
	let url = 'http://localhost:3000/product?cate_id=';
	axios.get(url + id)
		.then(function (response) {
			return response.data
		})
		.catch(function (error) {
			console.log(error)
		})
		.then(function (products) {
			console.log(products);
			// always executed
			for (var i = 0; i < products.length; i++) {
				let image_pro;
				image_pro = ImageExist(products[i].image, 'product');
				$(".dssp").append(
					'<div class="col-lg-4 col-md-6 mb-4" id="box_pro'+i+'">' +
					'	<div class="card h-100" id="pro_card' + i +'">' +
					'		<a href="http://localhost:3000/frontend/item.html?id='+ products[i].id +'">' +
					'			<img class="card-img-top" src="'+ image_pro +'" alt="">' +
					'		</a>' +
					'		<div class="card-body" id="card_body' + i +'">' +
					'			<h4 class="card-title">' +
					'				<a href="http://localhost:3000/frontend/item.html?id='+ products[i].id +'">' + products[i].name +'</a>' +
					'			</h4>' +
					'			<h5>' + numberFormat(products[i].price) + ' VND </h5>' +
					'			<p class="card-text">' + products[i].desc + '</p>' +
					'		</div>' +
					'		<div class="card-footer">' +
					' 			<small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>' +
					' 		</div>' +
					'	</div>' +
					'</div>');
			}
		});
}

async function loadProducts (url)
{
	axios.get(url)
		.then(function (response) {
			return products = response.data
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function (products) {
			console.log(products);
			// always executed
			for (var i = 0; i < products.length; i++) {
				let image_pro;
				image_pro = ImageExist(products[i].image, 'product');
				$(".dssp").append(
					'<div class="col-lg-4 col-md-6 mb-4" id="box_pro'+i+'">' +
					'	<div class="card h-100" id="pro_card' + i +'">' +
					'		<a href="http://localhost:3000/frontend/item.html?id='+ products[i].id +'">' +
					'			<img class="card-img-top" src="'+ image_pro +'" alt="">' +
					'		</a>' +
					'		<div class="card-body" id="card_body' + i +'">' +
					'			<h4 class="card-title">' +
					'				<a href="http://localhost:3000/frontend/item.html?id='+ products[i].id +'">' + products[i].name +'</a>' +
					'			</h4>' +
					'			<h5>' + numberFormat(products[i].price) + ' VND </h5>' +
					'			<p class="card-text">' + products[i].desc + '</p>' +
					'		</div>' +
					'		<div class="card-footer">' +
					' 			<small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>' +
					' 		</div>' +
					'	</div>' +
					'</div>');
			}
		});
}

async function loadCategories (url)
{
	axios.get(url)
		.then(function (response) {
			return categories = response.data
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function (categories) {
			console.log(categories);
			// always executed
			for (var i = 0; i < categories.length; i++) {
				$('.list-group').append('<a href="http://localhost:3000/frontend/list-product.html?id=' + categories[i].id + '" class="list-group-item">' + categories[i].name + '</a>')
			}
		});
}

async function loadSlides (url)
{
	axios.get(url)
		.then(function (response) {
			return slides = response.data
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function (slides) {
			console.log(slides);
			// always executed
			for (var i = 0; i < slides.length; i++) {
				let image_slide;
				image_slide = ImageExist(slides[i].image, 'slide');
				$('#slide-list').append('<div class="carousel-item ' + isActive(i) + '">' +
					'<img class="d-block img-fluid" src="' + image_slide + '" alt="First slide">' +
					'</div>');
				$('.carousel-indicators').append('<li data-target="#carouselExampleIndicators" data-slide-to="'+ i +'" class="' + isActive(i) + '"></li>');
			}
		});
}

                                       /*----------------------------------------*/
// Helpers
/**
 * @return {string}
 */
function ImageExist(url, type) {
	$.get(url)
		.done(function() {
			// Do something now you know the image exists.

		}).fail(function() {
		// Image doesn't exist - do something else.
		if (type === 'product') {
			url = 'http://placehold.it/700x400';
		} else if(type === 'slide') {
			url = 'http://placehold.it/900x350';
		} else if (type === 'icon product') {
			url = 'http://placehold.it/140x70';
		}

	});
	return url;
}

async function addComment(id_product) {
	let url = 'http://localhost:3000/comment';
	var text_input = $('#text-comment').val();
	let dataPost = {
		text: text_input,
		product_id: id_product,
		created_at: Date()
	};
	if ((id_product !== '' && id_product !== undefined) || text_input !== '') {
		axios.post(url, dataPost)
			.then(function (response) {
				console.log(response);
				$('.list-comment').prepend('<p>' + text_input +'</p>\n' +
					'            <small class="text-muted">' + Date() + '</small>\n' +
					'            <hr>');
				$('#text-comment').val('');
				$('.input-comment').hide('slow');
				$('#show-input').text('Leave a Review');
			})
			.catch(function (error) {
				console.log(error);
			});
	} else {
		alert('Nhập nội dung comment');
	}
}

function numberFormat(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '.' + '$2');
	}
	return x1 + x2;
}

// active slide
function isActive(number) {
	if (number === 1) {
		return 'active';
	} else {
		return '';
	}
}

function getUrl(type) {
	var vars = {};
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	if (type === 'product') {
		if(vars.id !== '' && vars.id !== undefined) {
			detailProduct(vars.id);
			loadCommentProduct(vars.id);
		} else {
			alert('Thiếu id sản phẩm');
			window.location.href = 'http://localhost:3000';
		}
	} else if (type === 'category') {
		if(vars.id !== '' && vars.id !== undefined) {
			productsByCate(vars.id);
		} else {
			alert('Thiếu id category');
			window.location.href = 'http://localhost:3000';
		}
	}
}
$('.input-comment').hide();
$('#show-input').click(function () {
	$('.input-comment').show('slow');
	$(this).text('Comment');
	if ($('#text-comment').val() !== '' && $('#text-comment').val() !== undefined) {
		addComment($(this).attr('product-id'))
	}
});
