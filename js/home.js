$(document).ready(function () {
  // Kiểm tra xem có người dùng đã đăng nhập chưa
  var loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    // Nếu đã đăng nhập, thay đổi nội dung của thẻ a
    $('.hd1-a a').text(loggedInUser).removeAttr('href');

    // Thêm menu dropdown cho tài khoản người dùng
    $('.hd1-a a').click(function (e) {
      e.preventDefault();
      // Tạo và hiển thị menu dropdown ở đây
      if ($('.user-dropdown').length === 0) {
        var dropdown = $('<div class="user-dropdown"><a href="#" id="logout">Đăng xuất</a></div>');
        $('.hd1-a').append(dropdown);
      } else {
        $('.user-dropdown').toggle();
      }
    });

    // Xử lý đăng xuất
    $(document).on('click', '#logout', function (e) {
      e.preventDefault();
      localStorage.removeItem('loggedInUser');
      location.reload(); // Tải lại trang
    });
  }
});


function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.querySelector('.gh p');
  if (cartCountElement) {
    cartCountElement.textContent = `${totalItems} Sản phẩm`;
  }
}

// Gọi hàm updateCartCount khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
});
