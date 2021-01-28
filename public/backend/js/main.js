// url
let url_users = 'http://localhost:3000/user';
let url_products = 'http://localhost:3000/product';
let url_categories = 'http://localhost:3000/category';
let url_posts = 'http://localhost:3000/post';
let url_slides = 'http://localhost:3000/slide';
let url_comments = 'http://localhost:3000/comment';

// api load data

// load user
async function loadUsers(url) {
    axios.get(url)
        .then(function (response) {
            return users = response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function (users) {
            for (var i = 0; i < users.length; i++) {
                $('#tbody-user').append(
                    '<tr id="user-id' + users[i].id + '">\n' +
                    '    <td>' + users[i].fullname + '</td>\n' +
                    '    <td>' + users[i].position + '</td>\n' +
                    '    <td>' + users[i].address + '</td>\n' +
                    '    <td>' + users[i].age + '</td>\n' +
                    '    <td>' + users[i].start_date + '</td>\n' +
                    '    <td><center>' +
                    '       <a href="http://localhost:3000/backend/edit-user.html?edit_type=user&id=' + users[i].id + '" class="btn btn-info edit-user">Edit</a>' +
                    '       <button class="btn btn-danger delete-user" onclick="deleteUser(' + users[i].id + ')">Delete</button>' +
                    '   </center></td>\n' +
                    '</tr>'
                );
            }
        })
}

// load product
async function loadProducts(url) {
    axios.get(url)
        .then(function (response) {
            return products = response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function (products) {
            for (var i = 0; i < products.length; i++) {
                $('#tbody-product').append(
                    '<tr id="product-id' + products[i].id + '">\n' +
                    '    <td>#' + products[i].id + '</td>\n' +
                    '    <td>' + products[i].name + '</td>\n' +
                    '    <td>' + vndFomat(products[i].price) + ' đ</td>\n' +
                    '    <td><img height="100" src="' + ImageExist(products[i].image, 'icon product') + '" alt=""></td>\n' +
                    '    <td>' + products[i].desc + '</td>\n' +
                    '    <td><center>' +
                    '       <a href="http://localhost:3000/backend/edit-product.html?edit_type=product&id=' + products[i].id + '" class="btn btn-info edit-product">Edit</a>' +
                    '       <button class="btn btn-danger delete-product" onclick="deleteProduct(' + products[i].id +')">Delete</button>' +
                    '   </center></td>\n' +
                    '</tr>'
                );
                $('.odd').hide();
            }
        })
}

// Load comment
async function loadComments(url) {
    axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function (category) {
            for (var i = 0; i < category.length; i++) {
                $('#tbody-comment').append(
                    '<tr id="comment-id' + category[i].id + '">\n' +
                    '    <td>#' + category[i].id + '</td>\n' +
                    '    <td>' + category[i].text + '</td>\n' +
                    '    <td>' + category[i].product_id + '</td>\n' +
                    '    <td><center>' +
                    '       <button class="btn btn-danger delete-category" onclick="deleteComment(' + category[i].id +')">Delete</button>' +
                    '   </center></td>\n' +
                    '</tr>'
                );
                $('.odd').hide();
            }
        })
}

// Load category
async function loadCategories(url) {
    axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function (category) {
            for (var i = 0; i < category.length; i++) {
                $('#tbody-category').append(
                    '<tr id="category-id' + category[i].id + '">\n' +
                    '    <td>#' + category[i].id + '</td>\n' +
                    '    <td>' + category[i].name + '</td>\n' +
                    '    <td><center>' +
                    '       <a href="http://localhost:3000/backend/edit-category.html?edit_type=category&id=' + category[i].id + '" class="btn btn-info edit-product">Edit</a>' +
                    '       <button class="btn btn-danger delete-category" onclick="deleteCategory(' + category[i].id +')">Delete</button>' +
                    '   </center></td>\n' +
                    '</tr>'
                );
                $('.odd').hide();
            }
        })
}

// Load post
async function loadPosts(url) {
    axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function (posts) {
            console.log(posts);
            for (var i = 0; i < posts.length; i++) {
                $('#tbody-post').append(
                    '<tr id="post-id' + posts[i].id + '">\n' +
                    '    <td>#' + posts[i].id + '</td>\n' +
                    '    <td>' + posts[i].name + '</td>\n' +
                    '    <td>' + posts[i].desc + '</td>\n' +
                    '    <td><center>' +
                    '       <a href="http://localhost:3000/backend/edit-post.html?edit_type=post&id=' + posts[i].id + '" class="btn btn-info edit-product">Edit</a>' +
                    '       <button class="btn btn-danger delete-post" onclick="deletePost(' + posts[i].id +')">Delete</button>' +
                    '   </center></td>\n' +
                    '</tr>'
                );
                $('.odd').hide();
            }
        })
}

// Load slide
async function loadSlides(url) {
    axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function (slides) {
            console.log(slides);
            for (var i = 0; i < slides.length; i++) {
                $('#tbody-post').append(
                    '<tr id="slide-id' + slides[i].id + '">\n' +
                    '    <td>#' + slides[i].id + '</td>\n' +
                    '    <td><img height=100px" src="' + ImageExist(slides[i].image, 'slide') + '" alt=""></td>\n' +
                    '    <td><center>' +
                    '       <a href="http://localhost:3000/backend/edit-slide.html?edit_type=slide&id=' + slides[i].id + '" class="btn btn-info edit-product">Edit</a>' +
                    '       <button class="btn btn-danger delete-slide" onclick="deleteSlide(' + slides[i].id +')">Delete</button>' +
                    '   </center></td>\n' +
                    '</tr>'
                );
                $('.odd').hide();
            }
        })
}

// function delete

function deleteProduct(id) {
    let url_delete = 'http://localhost:3000/product/';
    $('#product-id'+id).hide('swing');
    DeleteRow(url_delete, id);
}

function deleteUser(id) {
    let url_delete = 'http://localhost:3000/user/';
    $('#user-id'+id).hide('swing');
    DeleteRow(url_delete, id);
}

function deleteCategory(id) {
    let url_delete = 'http://localhost:3000/category/';
    $('#cate-id'+id).hide('swing');
    DeleteRow(url_delete, id);
}

function deleteSlide(id) {
    let url_delete = 'http://localhost:3000/slide/';
    $('#slide-id'+id).hide('swing');
    DeleteRow(url_delete, id);
}

function deletePost(id) {
    let url_delete = 'http://localhost:3000/post/';
    $('#post-id'+id).hide('swing');
    DeleteRow(url_delete, id);
}

function deleteComment(id) {
    let url_delete = 'http://localhost:3000/comment/';
    $('#comment-id'+id).hide('swing');
    DeleteRow(url_delete, id);
}

// -----------------------------------
// function global delete
async function DeleteRow(url, id) {
    let url_delete = url + id;
    axios.delete(url_delete);
}

// -----------------------------
// save data
function saveUser() {
    let url_post = 'http://localhost:3000/user';

    // data
    var username = $('#username').val();
    var fullname = $('#fullname').val();
    var position = $("input[name='position']:checked").val();
    var address = $('#address').val() ?? '';
    var age = $('#age').val() ?? 0;
    var start_date = $('#start_date').val() ?? '01/01/2020';
    var salary = $('#salary').val() ?? 0;
    var email = $('#email').val();

    // kiem tra
    if(username === '' || fullname === '' || position === '' || position === undefined || email === '') {
        alert('please input full infomation');
        return false;
    }

    let data_post = {
        username: username,
        fullname: fullname,
        position: position,
        address: address,
        age: age,
        start_date: start_date,
        salary: salary,
        email: email
    };

    SaveData(url_post, data_post);
    window.location.href = 'http://localhost:3000/backend/user.html';
}

function saveCategory() {
    let url_post = 'http://localhost:3000/category';

    // data
    var name = $('#name').val();

    // kiem tra
    if(name === '') {
        alert('please input full infomation');
        return false;
    }

    let data_post = {name: name};

    SaveData(url_post, data_post);
    window.location.href = 'http://localhost:3000/backend/category.html';
}

function saveProduct() {
    let url_post = 'http://localhost:3000/product';

    // data
    var name = $('#name').val();
    var price = $('#price').val();
    var image = $('#image').val() ?? 'http://placehold.it/700x400';
    var desc = $('#desc').val();

    // kiem tra
    if(name === '' || price === '' || desc === '') {
        alert('please input full infomation');
        return false;
    }

    let data_post = {name: name, price: price, image: image, desc: desc};

    SaveData(url_post, data_post);
    window.location.href = 'http://localhost:3000/backend/product.html';
}

function savePost() {
    let url_post = 'http://localhost:3000/post';

    // data
    var name = $('#name').val();
    var desc = $('#desc').val();

    // kiem tra
    if(name === '' || desc === '') {
        alert('please input full infomation');
        return false;
    }

    let data_post = {name: name, desc: desc};

    SaveData(url_post, data_post);
    window.location.href = 'http://localhost:3000/backend/post.html';
}

function saveSlide() {
    let url_post = 'http://localhost:3000/slide';

    // data
    var image = $('#image').val();

    // kiem tra
    if(image === '') {
        alert('please input full infomation');
        return false;
    }

    let data_post = {image: image};

    SaveData(url_post, data_post);
    window.location.href = 'http://localhost:3000/backend/slide.html';
}

// function save global
/**
 * @return {boolean}
 */
function SaveData(url_post, dataPost) {
    var is_create = getUrlVars();
    if (is_create.edit_type !== '' && is_create.edit_type !== undefined && is_create.id !== '' && is_create.id !== undefined) {
        axios.patch(url_post + '/' + is_create.id, dataPost)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    } else {
        axios.post(url_post, dataPost)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// get url value
function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    if(vars.edit_type === 'user' && vars.id !== '' && vars.id !== undefined) {
        editUser(vars.id)
    } else if (vars.edit_type === 'category' && (vars.id !== '' || vars.id !== undefined)) {
        editCategory(vars.id)
    } else if (vars.edit_type === 'product' && (vars.id !== '' || vars.id !== undefined)) {
        editProduct(vars.id)
    } else if (vars.edit_type === 'post' && (vars.id !== '' || vars.id !== undefined)) {

    }  else if (vars.edit_type === 'slide' && (vars.id !== '' || vars.id !== undefined)) {
        editSlide(vars.id)
    }
    return vars;
}

// -----------------------------------------------
// edit data
async function editUser(id) {
    let url_edit = 'http://localhost:3000/user/' + id;
    axios.get(url_edit)
        .then(function (response) {
            return response.data
        })
        .then(function (data) {
            $('#username').val(data.username);
            $('#fullname').val(data.fullname);
            $('#position').val(data.position);
            $('#address').val(data.address);
            $('#age').val(data.age);
            $('#start_date').val(data.start_date);
            $('#salary').val(data.salary);
            $('#email').val(data.email);
        })
        .catch(function (error) {
            console.log(error)
        })
}

async function editCategory(id) {
    let url_edit = 'http://localhost:3000/category/' + id;
    axios.get(url_edit)
        .then(function (response) {
            return response.data
        })
        .then(function (data) {
            $('#name').val(data.name);
        })
        .catch(function (error) {
            console.log(error)
        })
}

async function editProduct(id) {
    let url_edit = 'http://localhost:3000/product/' + id;
    axios.get(url_edit)
        .then(function (response) {
            return response.data
        })
        .then(function (data) {
            $('#name').val(data.name);
            $('#price').val(data.price);
            $('#show-image').attr('src', data.image);
            $('#desc').val(data.desc);
        })
        .catch(function (error) {
            console.log(error)
        })
}

async function editPost(id) {
    let url_edit = 'http://localhost:3000/post/' + id;
    axios.get(url_edit)
        .then(function (response) {
            return response.data
        })
        .then(function (data) {
            $('#name').val(data.name);
            $('#desc').val(data.desc);
        })
        .catch(function (error) {
            console.log(error)
        })
}

async function editSlide(id) {
    let url_edit = 'http://localhost:3000/slide/' + id;
    axios.get(url_edit)
        .then(function (response) {
            return response.data
        })
        .then(function (data) {
            $('#show-image').attr('src',data.image);
        })
        .catch(function (error) {
            console.log(error)
        })
}

// ------------------------------------
// helpers
function vndFomat(nStr) {
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

// upload image


var objectDt = {
    chieuDai: null,
    chieuRong: null,
    tinhDienTich: function() {

    }
}
