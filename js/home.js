// Khởi tạo giỏ hàng trong localStorage nếu chưa có
if (!localStorage.getItem("cartItems")) {
  localStorage.setItem("cartItems", JSON.stringify([]));
}

function selectColor(color, modalId) {
  // Lấy phần tử hiển thị màu đã chọn trong modal cụ thể
  const selectedColorElement = document.querySelector(`#${modalId} #selectedColor span`);
  if (selectedColorElement) {
    selectedColorElement.textContent = color;
    updateTotalPrice(modalId);
  }
}

function updateTotalPrice(modalId) {
  const quantity = parseInt(document.querySelector(`#${modalId} #quantity`).value) || 1;
  const basePrice = parseInt(
    document.querySelector(`#${modalId} #modalTotal`).textContent.replace(/\D/g, "")
  );
  const total = basePrice * quantity;

  document.querySelector(`#${modalId} #totalPrice`).textContent = `${formatPrice(total)} VNĐ`;
}

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price);
}

function checkQuantity(input, modalId) {
  let value = parseInt(input.value);
  if (isNaN(value) || value <= 0) {
    alert("Số lượng phải là số dương và lớn hơn 0!");
    input.value = 1;
  }
  updateTotalPrice(modalId);
}

function addToCart(modalId) {
  const selectedColor = document.querySelector(`#${modalId} #selectedColor span`).textContent;
  if (!selectedColor) {
    alert("Vui lòng chọn màu sắc!");
    return;
  }

  const productName = document.querySelector(`#${modalId} .modal-title`).textContent.trim();
  const quantityInput = document.querySelector(`#${modalId} #quantity`);
  const quantity = parseInt(quantityInput.value);

  if (isNaN(quantity) || quantity <= 0) {
    alert("Số lượng không hợp lệ!");
    return;
  }

  const basePrice = parseInt(
    document.querySelector(`#${modalId} #modalTotal`).textContent.replace(/\D/g, "")
  );
  const total = basePrice * quantity;

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const newItem = {
    id: Date.now(),
    name: productName,
    color: selectedColor,
    quantity: quantity,
    price: basePrice,
    total: total,
  };

  cartItems.push(newItem);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  var modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
  modal.hide();

  window.location.href = "../html/gioHang.html";
}

function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelector(".gh p").textContent = `${totalItems} Sản phẩm`;
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();

  // Xử lý cho tất cả các modal
  document.querySelectorAll('.modal').forEach(modal => {
    const modalId = modal.id;

    // Khởi tạo giá trị ban đầu
    updateTotalPrice(modalId);

    // Xử lý sự kiện cho các nút chọn màu
    const colorButtons = modal.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
      button.addEventListener('click', function () {
        const color = this.textContent.trim();
        selectColor(color, modalId);
      });
    });

    // Xử lý sự kiện cho input số lượng
    const quantityInput = modal.querySelector("#quantity");
    if (quantityInput) {
      quantityInput.addEventListener("change", function () {
        checkQuantity(this, modalId);
      });

      quantityInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          checkQuantity(this, modalId);
        }
      });
    }

    // Xử lý sự kiện cho nút thêm vào giỏ hàng
    const addToCartBtn = modal.querySelector(".them");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", function () {
        addToCart(modalId);
      });
    }
  });
});



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



  // Biến toàn cục để lưu ID của modal sản phẩm
  var selectedProductModalId;

  // Khi nhấn nút "Mua Hàng" trong modal sản phẩm
  $('.modal .mua').click(function () {
    // Lưu ID của modal sản phẩm hiện tại
    selectedProductModalId = $(this).closest('.modal').attr('id');
    console.log("ID modal sản phẩm: " + selectedProductModalId);
  });

  // Khi nhấn nút xác nhận trong modal thông tin
  $("#modalIdThongTin .modal-footer .btn-primary").click(function () {
    // Sử dụng selectedProductModalId đã lưu trước đó
    if (selectedProductModalId) {
      var hoTenHopLe = kiemTraHoTen();
      var sdtHopLe = kiemTraSDT();
      var emailHopLe = kiemTraEmail();
      var diaChiHopLe = kiemTraDiaChi();

      if (hoTenHopLe && sdtHopLe && emailHopLe && diaChiHopLe) {
        // Lấy thông tin từ modal sản phẩm
        var orderInfo = {
          productName: $("#" + selectedProductModalId + " .modal-title").text().trim(),
          customerName: $("#modalIdThongTin #txtHoTen").val().trim(),
          phone: $("#modalIdThongTin #txtSDT").val().trim(),
          email: $("#modalIdThongTin #txtEmail").val().trim(),
          address: $("#modalIdThongTin #txtDC").val().trim(),
          color: $("#" + selectedProductModalId + " #selectedColor span").text().trim(),
          quantity: $("#" + selectedProductModalId + " #quantity").val().trim(),
          total: $("#" + selectedProductModalId + " #totalPrice").text().trim()
        };

        // Test xem thông tin lấy được có đúng không
        console.log("Thông tin đơn hàng:", orderInfo);

        // Lưu vào localStorage
        var orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(orderInfo);
        localStorage.setItem('orders', JSON.stringify(orders));

        alert("Đặt hàng thành công!");
        $("#modalIdThongTin").modal("hide");

        // Chuyển đến trang mua hàng
        window.location.href = 'muaHang.html';
      }
    } else {
      console.error("Không tìm thấy thông tin modal sản phẩm!");
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    }
  });

  // Hàm test để kiểm tra
  function testModalFlow() {
    $('.modal .mua').click(function () {
      var modalId = $(this).closest('.modal').attr('id');
      console.log("Test - Nút Mua được nhấn trong modal: " + modalId);
      console.log("Test - selectedProductModalId: " + selectedProductModalId);
    });
  }

  $(document).ready(function () {
    testModalFlow();
  });

  // Thêm sự kiện click cho các nút màu sắc
  $(".color-btn").click(function () {
    var color = $(this).text().trim();
    selectColor(color);
  });
});


