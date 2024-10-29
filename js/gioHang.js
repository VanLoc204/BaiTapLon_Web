document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();
    updateCartCount();
});

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const tableBody = document.getElementById('cart-items');
    let totalCart = 0;

    tableBody.innerHTML = '';

    if (cartItems.length === 0) {
        tableBody.innerHTML = `
                    <tr>
                        <td colspan="8" class="text-center">
                            <p>Giỏ hàng trống</p>
                            <a href="../html/home.html" class="btn btn-primary">Tiếp tục mua sắm</a>
                        </td>
                    </tr>
                `;
        document.getElementById('cart-total').textContent = '0 VNĐ';
        return;
    }

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.color}</td>
                    <td>${item.quantity}</td>
                    <td>${formatPrice(item.price)} VNĐ</td>
                    <td>${formatPrice(item.total)} VNĐ</td>
                    <td>
                        <button class="btn btn-danger btn-sm w-100" onclick="removeItem(${item.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm w-100" onclick="buyItem(${item.id})">Mua</button>
                    </td>
                `;
        tableBody.appendChild(row);
        totalCart += item.total;
    });

    document.getElementById('cart-total').textContent = `${formatPrice(totalCart)} VNĐ`;
}

function removeItem(itemId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
    updateCartCount();
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.querySelector('.gh p');
    if (cartCountElement) {
        cartCountElement.textContent = `${totalItems} Sản phẩm`;
    }
}
function clearCart() {
    if (confirm('Bạn có chắc muốn xóa tất cả sản phẩm trong giỏ hàng?')) {
        localStorage.setItem('cartItems', JSON.stringify([]));
        displayCartItems();
        updateCartCount();
    }
}

function buyItem(itemId) {
    // Lấy danh sách cartItems từ localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Tìm item trong cartItems
    const item = cartItems.find(item => item.id === itemId);

    if (item) {
        // Lưu thông tin sản phẩm hiện tại vào localStorage
        localStorage.setItem('currentBuyingItem', JSON.stringify(item));

        // Hiển thị modal thông tin
        const modal = new bootstrap.Modal(document.getElementById('modalIdThongTin'));
        modal.show();
    } else {
        console.error('Không tìm thấy sản phẩm');
        alert('Không tìm thấy sản phẩm trong giỏ hàng');
    }
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
            $(".errDC").html("Địa chỉ không được để trống");
            return false;
        } else {
            $(".errDC").html("*");
            return true;
        }
    }
    $("#txtDC").blur(kiemTraDiaChi);

    // Khi nhấn nút xác nhận trong modal thông tin
    $("#modalIdThongTin .modal-footer .btn-primary").click(function () {
        var hoTenHopLe = kiemTraHoTen();
        var sdtHopLe = kiemTraSDT();
        var emailHopLe = kiemTraEmail();
        var diaChiHopLe = kiemTraDiaChi();

        if (hoTenHopLe && sdtHopLe && emailHopLe && diaChiHopLe) {
            // Lấy thông tin sản phẩm từ localStorage
            const currentBuyingItem = JSON.parse(localStorage.getItem('currentBuyingItem'));

            if (currentBuyingItem) {
                // Chuyển đổi total thành định dạng mong muốn
                let formattedTotal;
                if (typeof currentBuyingItem.total === 'string') {
                    // Nếu total là chuỗi, loại bỏ tất cả ký tự không phải số
                    let numericTotal = parseFloat(currentBuyingItem.total.replace(/[^\d]/g, ''));
                    formattedTotal = new Intl.NumberFormat('vi-VN').format(numericTotal) + ' VNĐ';
                } else {
                    // Nếu total đã là số, định dạng nó
                    formattedTotal = new Intl.NumberFormat('vi-VN').format(currentBuyingItem.total) + ' VNĐ';
                }

                // Tạo đối tượng orderInfo với thông tin từ form và sản phẩm
                var orderInfo = {
                    productName: currentBuyingItem.name,
                    customerName: $("#modalIdThongTin #txtHoTen").val().trim(),
                    phone: $("#modalIdThongTin #txtSDT").val().trim(),
                    email: $("#modalIdThongTin #txtEmail").val().trim(),
                    address: $("#modalIdThongTin #txtDC").val().trim(),
                    color: currentBuyingItem.color,
                    quantity: currentBuyingItem.quantity,
                    total: formattedTotal // Sử dụng giá trị đã được format
                };

                console.log("Thông tin đơn hàng:", orderInfo);

                // Lưu vào localStorage
                var orders = JSON.parse(localStorage.getItem('orders')) || [];
                orders.push(orderInfo);
                localStorage.setItem('orders', JSON.stringify(orders));

                // Xóa sản phẩm khỏi giỏ hàng
                const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                const updatedCartItems = cartItems.filter(item => item.id !== currentBuyingItem.id);
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

                alert("Đặt hàng thành công!");

                // Đóng modal
                $("#modalIdThongTin").modal("hide");

                // Cập nhật lại hiển thị giỏ hàng
                displayCartItems();
                updateCartCount();

                // Chuyển đến trang mua hàng
                window.location.href = 'muaHang.html';
            } else {
                alert("Không tìm thấy thông tin sản phẩm!");
            }
        }
    });
});


