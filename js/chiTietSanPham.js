// chiTietSanPham.js
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const product = products.find(p => p.id === parseInt(productId));

    if (product) {
        const detailHtml = `
            <div class="row mb-5">
                <div class="col-4">
                    <div id="productCarousel" class="carousel slide border border-2 border-dark-subtle mt-4" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            ${product.images.map((_, index) => `
                                <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="${index}" 
                                    class="${index === 0 ? 'active' : ''} bg-black"></button>
                            `).join('')}
                        </div>
                        <div class="carousel-inner">
                            ${product.images.map((img, index) => `
                                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                    <img src="${img}" alt="${product.name}" class="d-block w-100">
                                </div>
                            `).join('')}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon bg-danger"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon bg-danger"></span>
                        </button>
                    </div>
                </div>
                <div class="col-8">
                    <div class="contentModal">
                        <h3 class= "product-name">${product.name}</h3>
                        <div class="tableModal">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td><strong>Thương hiệu</strong></td>
                                        <td>${product.brand}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Xuất xứ</strong></td>
                                        <td>${product.origin}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Công suất xe</strong></td>
                                        <td>${product.power}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Quãng đường tối đa</strong></td>
                                        <td>${product.maxDistance}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6 color-selection">
                                <label>Chọn màu sắc:</label>
                                <div class="color-buttons">
                                    ${product.colors.map(color => `
                                        <button class="color-btn" style="background-color: #ff4c4c" onclick="selectColor('${color}')">
                                            ${color.toUpperCase()}
                                        </button>
                                    `).join('')}
                                </div>
                                <p id="selectedColor" style="margin-top: 10px; font-weight: bold">
                                    Màu đã chọn: <span></span>
                                </p>
                            </div>
                            <div class="col-md-6 quantity-selection">
                                <label for="quantity">Số lượng:</label>
                                <input type="number" id="quantity" class="form-control quantity-input" min="1" value="1" onchange="checkQuantity(this)" aria-label="Số lượng" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h5 class="border-bottom border-1 border-light">
                                    Giá tiền: <span id="modalTotal">${product.price.toLocaleString('vi-VN')} VNĐ</span>
                                </h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h5>
                                    Tổng tiền: <span id="totalPrice" class="text-danger">${product.price.toLocaleString('vi-VN')} VNĐ</span>
                                </h5>
                            </div>
                        </div>
                        <div class="mt-3 themMua">
                            <button class="btn btn-primary them" onclick="addToCart(${product.id})">Thêm giỏ hàng</button>
                            <button class="btn btn-danger mua" data-bs-toggle="modal" data-bs-target="#modalIdThongTin">Mua Hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('product-detail').innerHTML = detailHtml;
    } else {
        document.getElementById('product-detail').innerHTML = '<p>Không tìm thấy sản phẩm</p>';
    }
});

function selectColor(color) {
    document.querySelector('#selectedColor span').textContent = color;
    updateTotalPrice();
}

function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseInt(document.getElementById('modalTotal').textContent.replace(/\D/g, ''));
    const total = quantity * price;
    document.getElementById('totalPrice').textContent = total.toLocaleString('vi-VN') + ' VNĐ';
}

function addToCart(productId) {
    // Implement add to cart functionality
    alert('Đã thêm sản phẩm vào giỏ hàng!');
}

function checkQuantity(input) {
    if (input.value < 1) {
        input.value = 1;
        alert('Số lượng phải từ 1 trở lên')
    }
    updateTotalPrice();
}



function addToCart(productId) {
    // Kiểm tra màu đã được chọn chưa
    const selectedColorSpan = document.querySelector('#selectedColor span');
    if (!selectedColorSpan.textContent) {
        alert('Vui lòng chọn màu sắc!');
        return;
    }

    // Lấy và kiểm tra số lượng
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
        alert('Số lượng không hợp lệ!');
        quantityInput.value = 1;
        return;
    }

    // Lấy thông tin sản phẩm
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert('Không tìm thấy thông tin sản phẩm!');
        return;
    }

    // Lấy giá và tính tổng tiền
    const basePrice = parseInt(document.getElementById('modalTotal').textContent.replace(/\D/g, ''));
    const total = basePrice * quantity;

    // Tạo đối tượng cartItem
    const cartItem = {
        id: Date.now(), // ID duy nhất cho item trong giỏ hàng
        name: product.name,
        color: selectedColorSpan.textContent,
        quantity: quantity,
        price: basePrice,
        total: total
    };

    // Lấy giỏ hàng hiện tại từ localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa (cùng tên và màu)
    const existingItemIndex = cartItems.findIndex(item =>
        item.name === cartItem.name && item.color === cartItem.color
    );

    if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng và tổng tiền
        cartItems[existingItemIndex].quantity += quantity;
        cartItems[existingItemIndex].total += total;
    } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
        cartItems.push(cartItem);
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Cập nhật số lượng hiển thị trên giỏ hàng
    updateCartCount();

    // Hiển thị thông báo thành công
    if (confirm('Đã thêm sản phẩm vào giỏ hàng! Bạn có muốn đến trang giỏ hàng không?')) {
        window.location.href = 'gioHang.html';
    }
}

// Hàm cập nhật số lượng hiển thị trên giỏ hàng
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.querySelector('.gh p');
    if (cartCountElement) {
        cartCountElement.textContent = `${totalItems} Sản phẩm`;
    }
}

// Hàm định dạng giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}








$(document).ready(function () {
    // Kiểm tra họ tên
    function kiemTraHoTen() {
        // Regex kiểm tra họ tên: bắt đầu bằng chữ hoa, theo sau là chữ thường, ít nhất 2 từ
        var mauKT = /^[A-Z][a-z]*\s[A-Z][a-z]*(\s[A-Z][a-z]*)*$/; var chuoi = $("#txtHoTen").val().trim();
        if (chuoi === "") {
            $(".errHoTen").html("Tên rỗng");
            return false;
        }

        if (!mauKT.test(chuoi)) {
            $(".errHoTen").html("Nhập sai");
            return false;
        } else {
            $(".errHoTen").html("*");
            return true;
        }
    }
    $("#txtHoTen").blur(kiemTraHoTen);

    // Kiểm tra số điện thoại
    function kiemTraSDT() {
        var mauKT = /^(03|09|08)\d{8}$/;
        var chuoi = $("#txtSDT").val().trim();

        if (chuoi === "") {
            $(".errSDT").html("SDT rỗng");
            return false;
        }

        if (!mauKT.test(chuoi)) {
            $(".errSDT").html("Nhập sai");
            return false;
        } else {
            $(".errSDT").html("*");
            return true;
        }
    }
    $("#txtSDT").blur(kiemTraSDT);

    // Kiểm tra email
    function kiemTraEmail() {
        var mauKT = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        var chuoi = $("#txtEmail").val().trim();

        if (chuoi === "") {
            $(".errEmail").html("Email rỗng");
            return false;
        }

        if (!mauKT.test(chuoi)) {
            $(".errEmail").html("Nhập sai");
            return false;
        } else {
            $(".errEmail").html("*");
            return true;
        }
    }
    $("#txtEmail").blur(kiemTraEmail);

    function kiemTraDiaChi() {
        var chuoi = $("#txtDC").val().trim();

        if (chuoi === "") {
            $(".errDC").html("ĐC trống");
            return false;
        } else {
            $(".errDC").html("*");
            return true;
        }
    }
    $("#txtDC").blur(kiemTraDiaChi);



    // Biến toàn cục để lưu màu đã chọn
    var selectedColor = '';

    // Hàm chọn màu
    function selectColor(color) {
        selectedColor = color;
        $("#selectedColor span").text(color);
        enableBuyButton(); // Gọi hàm kiểm tra để kích hoạt nút mua hàng
    }

    // Hàm kiểm tra và kích hoạt/vô hiệu hóa nút mua hàng
    function enableBuyButton() {
        var buyButton = $(".themMua .btn-danger");
        if (selectedColor !== '') {
            buyButton.prop('disabled', false); // Kích hoạt nút
            buyButton.removeClass('disabled');
        } else {
            buyButton.prop('disabled', true); // Vô hiệu hóa nút
            buyButton.addClass('disabled');
        }
    }

    // Gọi hàm này khi trang được tải để vô hiệu hóa nút ban đầu
    $(document).ready(function () {
        enableBuyButton(); // Đảm bảo nút mua hàng bị vô hiệu hóa khi trang tải
    });



    // Khi nhấn nút xác nhận trong modal thông tin
    $("#modalIdThongTin .modal-footer .btn-primary").click(function () {
        var hoTenHopLe = kiemTraHoTen();
        var sdtHopLe = kiemTraSDT();
        var emailHopLe = kiemTraEmail();
        var diaChiHopLe = kiemTraDiaChi();

        if (hoTenHopLe && sdtHopLe && emailHopLe && diaChiHopLe) {
            // Lấy thông tin sản phẩm từ trang chi tiết
            var orderInfo = {
                productName: $(".product-name").text().trim(),
                customerName: $("#txtHoTen").val().trim(),
                phone: $("#txtSDT").val().trim(),
                email: $("#txtEmail").val().trim(),
                address: $("#txtDC").val().trim(),
                color: $("#selectedColor span").text().trim(),
                quantity: $(".quantity-input").val() || $("#quantity").val(),
                price: $(".product-price").text().trim(),
                total: $("#totalPrice").text().trim()
            };

            // Test xem thông tin lấy được có đúng không
            console.log("Thông tin đơn hàng:", orderInfo);

            // Lưu vào localStorage
            var orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(orderInfo);
            localStorage.setItem('orders', JSON.stringify(orders));

            alert("Đặt hàng thành công!");

            // Đóng modal
            $("#modalIdThongTin").modal("hide");

            // Thêm timeout trước khi chuyển hướng
            setTimeout(function () {
                window.location.href = '../html/muaHang.html';
            }, 500);
        }
    });

    // Thêm sự kiện click cho các nút màu sắc
    $(".color-btn").click(function () {
        var color = $(this).text().trim();
        selectColor(color);
    });
});