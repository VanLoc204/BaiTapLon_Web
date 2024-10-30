$(document).ready(function () {
    // Kiểm tra xem có thông tin đăng nhập được lưu không
    var savedUsername = localStorage.getItem('tenDangNhap');
    var savedPassword = localStorage.getItem('matKhau');

    if (savedUsername && savedPassword) {
        // Nếu có, điền vào các trường input
        $("#txtTenDN").val(savedUsername);
        $("#textPW").val(savedPassword);
    }

    // Kiểm tra tên đăng nhập
    function kiemTraTenDangNhap() {
        var mauKT = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        var chuoi = $("#txtTenDN").val().trim();
        if (chuoi === "") {
            alert("Tên đăng nhập không được để trống");
            return false;
        }

        if (!mauKT.test(chuoi)) {
            alert("Tên đăng nhập không hợp lệ");
            return false;
        }
        return true;
    }
    $("#txtTenDN").blur(kiemTraTenDangNhap);

    // Kiểm tra mật khẩu
    function kiemTraMatKhau() {
        var chuoi = $("#textPW").val().trim();

        if (chuoi === "") {
            alert("Mật khẩu không được để trống");
            return false;
        }

        return true;
    }
    $("#textPW").blur(kiemTraMatKhau);

    // Xử lý sự kiện cho nút togglePassword
    $(".togglePassword").on('mousedown touchstart', function (e) {
        e.preventDefault();
        var input = $(this).closest('.input-group').find('input');
        var icon = $(this).find('i');

        // Khi nhấn chuột xuống, hiện mật khẩu
        input.attr("type", "text");
        icon.removeClass("bi-eye-slash").addClass("bi-eye");
    }).on('mouseup mouseleave touchend', function (e) {
        e.preventDefault();
        var input = $(this).closest('.input-group').find('input');
        var icon = $(this).find('i');

        // Khi thả chuột ra hoặc di chuột ra khỏi nút, ẩn mật khẩu
        input.attr("type", "password");
        icon.removeClass("bi-eye").addClass("bi-eye-slash");
    });


    // Xử lý checkbox "Lưu Mật Khẩu"
    $("#rememberMe").change(function () {
        if (this.checked) {
            var username = $("#txtTenDN").val().trim();
            var password = $("#textPW").val().trim();
            localStorage.setItem('savedUsername', username);
            localStorage.setItem('savedPassword', password);
        } else {
            localStorage.removeItem('savedUsername');
            localStorage.removeItem('savedPassword');
        }
    });

    $("#loginForm").submit(function (e) {
        e.preventDefault();

        var inputUsername = $("#txtTenDN").val().trim();
        var inputPassword = $("#textPW").val().trim();

        var savedUsername = localStorage.getItem('tenDangNhap');
        var savedPassword = localStorage.getItem('matKhau');

        if (inputUsername === savedUsername && inputPassword === savedPassword) {
            alert("Đăng nhập thành công!");
            localStorage.setItem('loggedInUser', inputUsername); // Lưu tên đăng nhập
            window.location.href = 'home.html'; // Chuyển đến trang chủ sau khi đăng nhập thành công
        } else {
            alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    });
});

