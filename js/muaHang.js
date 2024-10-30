$(document).ready(function () {

    // Hiển thị đơn hàng từ localStorage
    function displayOrders() {
        var orders = JSON.parse(localStorage.getItem('orders')) || [];
        var tableBody = $("#cart-items");
        tableBody.empty();
        var totalAmount = 0;

        orders.forEach(function (order, index) {
            var row = $("<tr>");
            row.append($("<td>").text(index + 1));
            row.append($("<td>").text(order.productName));
            row.append($("<td>").text(order.quantity));
            row.append($("<td>").text(order.color));
            row.append($("<td>").text(order.customerName));
            row.append($("<td>").text(order.phone));
            row.append($("<td>").text(order.address));
            row.append($("<td>").text(order.email));
            row.append($("<td>").text(order.total));
            row.append($("<td>").html('<button class="btn btn-danger btn-sm delete-order">Xóa</button>'));

            tableBody.append(row);

            // Cộng vào tổng tiền
            var price = parseFloat(order.total.replace(/[^\d]/g, ''));
            totalAmount += price;
        });

        // Cập nhật tổng tiền
        $("#cart-total").text(totalAmount.toLocaleString('vi-VN') + ' VNĐ');
    }

    // Xử lý sự kiện xóa đơn hàng
    $(document).on('click', '.delete-order', function () {
        var row = $(this).closest('tr');
        var index = row.index();

        // Xóa từ localStorage
        var orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.splice(index, 1);
        localStorage.setItem('orders', JSON.stringify(orders));

        // Cập nhật lại bảng
        displayOrders();
    });

    // Hiển thị đơn hàng khi trang được tải
    displayOrders();
});





