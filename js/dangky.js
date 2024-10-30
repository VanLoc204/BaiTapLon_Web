$(document).ready(function () {
    // Kiểm tra tên đăng nhập
    function kiemTraTenDangNhap() {
        var mauKT = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        var chuoi = $("#txtTen").val().trim();
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
    $("#txtTen").blur(kiemTraTenDangNhap);

    // Kiểm tra mật khẩu
    function kiemTraMatKhau() {
        var chuoi = $("#txtPW").val().trim();

        if (chuoi === "") {
            alert("Mật khẩu không được để trống");
            return false;
        }

        // Kiểm tra độ dài tối thiểu
        if (chuoi.length < 8) {
            alert("Mật khẩu phải có ít nhất 8 ký tự");
            return false;
        }

        // Kiểm tra có ít nhất 1 chữ thường
        if (!/[a-z]/.test(chuoi)) {
            alert("Mật khẩu phải có ít nhất 1 chữ cái thường");
            return false;
        }

        // Kiểm tra có ít nhất 1 chữ hoa
        if (!/[A-Z]/.test(chuoi)) {
            alert("Mật khẩu phải có ít nhất 1 chữ cái hoa");
            return false;
        }

        // Kiểm tra có ít nhất 1 số
        if (!/[0-9]/.test(chuoi)) {
            alert("Mật khẩu phải có ít nhất 1 chữ số");
            return false;
        }

        // Kiểm tra có ít nhất 1 ký tự đặc biệt
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(chuoi)) {
            alert("Mật khẩu phải có ít nhất 1 ký tự đặc biệt");
            return false;
        }

        return true;
    }
    $("#txtPW").blur(kiemTraMatKhau);

    // Kiểm tra nhập lại mật khẩu
    function kiemTraNhapLaiMatKhau() {
        var matKhau = $("#txtPW").val().trim();
        var nhapLaiMatKhau = $("#txtPWCheck").val().trim();
        if (nhapLaiMatKhau === "") {
            alert("Vui lòng nhập lại mật khẩu");
            return false;
        }

        if (matKhau !== nhapLaiMatKhau) {
            alert("Mật khẩu không khớp");
            return false;
        }
        return true;
    }
    $("#txtPWCheck").blur(kiemTraNhapLaiMatKhau);

    // Kiểm tra số điện thoại
    function kiemTraSDT() {
        var mauKT = /^(03|09|08)\d{8}$/;
        var chuoi = $("#txtSDT").val().trim();

        if (chuoi === "") {
            alert("Số điện thoại không được để trống");
            return false;
        }

        if (!mauKT.test(chuoi)) {
            alert("Số điện thoại không hợp lệ");
            return false;
        }
        return true;
    }
    $("#txtSDT").blur(kiemTraSDT);

    // Kiểm tra email
    function kiemTraEmail() {
        var mauKT = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        var chuoi = $("#txtEmail").val().trim();

        if (chuoi === "") {
            alert("Email không được để trống");
            return false;
        }

        if (!mauKT.test(chuoi)) {
            alert("Email không hợp lệ");
            return false;
        }
        return true;
    }
    $("#txtEmail").blur(kiemTraEmail);

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


    // Xử lý sự kiện khi nhấn nút Đăng Ký
    $("#DangKy").click(function (e) {
        e.preventDefault(); // Ngăn chặn form submit mặc định

        // Kiểm tra tất cả các trường
        if (kiemTraTenDangNhap() && kiemTraMatKhau() && kiemTraNhapLaiMatKhau() && kiemTraSDT() && kiemTraEmail()) {
            // Lấy tên đăng nhập và mật khẩu
            var tenDangNhap = $("#txtTen").val().trim();
            var matKhau = $("#txtPW").val().trim();

            // Lưu thông tin đăng nhập vào localStorage
            localStorage.setItem('tenDangNhap', tenDangNhap);
            localStorage.setItem('matKhau', matKhau);

            alert("Đăng ký thành công!");

            // Chuyển hướng đến trang đăng nhập
            window.location.href = 'dangnhap.html'; // Thay đổi 'dangnhap.html' thành đường dẫn thực tế của trang đăng nhập của bạn
        } else {
            alert("Vui lòng kiểm tra lại thông tin đăng ký");
        }
    });
});