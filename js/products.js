// products.js

const products = [
    {
        id: 1,
        name: "E-BIKE DK Miku Max S",
        brand: "DK Bike",
        origin: "Việt Nam",
        power: "450W",
        maxDistance: "40-45km/lần sạc",
        price: 9990000,
        colors: ["Đỏ", "Đen", "Cam Đen"],
        images: [
            "../img/xedapdien1.jpg",
            "../img/xedapdien2.jpg",
            "../img/xedapdienModal1.jpg",
            "../img/xedapdienModal2.jpg",
            "../img/xedapdienModal3.jpg"
        ],
        description: "Xe Đạp Điện E-BIKE DK Miku Max S – Bánh 16 Inches"
    },
    {
        id: 2,
        name: "E-Bike BOMELLI 18",
        brand: "Hitasa",
        origin: "Việt Nam",
        power: "230W",
        maxDistance: "40-50km/lần sạc",
        price: 9190000,
        colors: ["Đỏ", "Đen", "Xanh"],
        images: [
            "../img/xedapdien3.jpg",
            "../img/xedapdien4.jpg",
            "../img/xedapdienModal4.jpg",
            "../img/xedapdienModal5.jpg",
            "../img/xedapdienModal6.jpg"
        ],
        description: "Xe Đạp Điện E-Bike BOMELLI 18 Nhún Sau"
    },
    {
        id: 3,
        name: "E-BIKE JVC Cap One",
        brand: "JVC",
        origin: "Việt Nam",
        power: "250W",
        maxDistance: "40-50 km/lần sạc",
        price: 12690000,
        colors: ["Đỏ", "Đen", "Xanh"],
        images: [
            "../img/xedapdien9.jpg",
            "../img/xedapdien10.jpg",
            "../img/xedapdienModal7.jpg",
            "../img/xedapdienModal8.jpg",
            "../img/xedapdienModal9.jpg"
        ],
        description: "Xe Đạp Điện E-BIKE JVC Cap One"
    },
    {
        id: 4,
        name: "Bộ khóa xe NIJIA",
        brand: "Nijia",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 350000,
        colors: ["Đen"],
        images: [
            "../img/phukien1.jpg",
            "../img/phukienModal1.jpg",
            "../img/phukienModal2.jpg",
        ],
        description: "Bộ khóa xe Nijia sử dụng cho tất cả các loại xe đạp điện Nijia."
    },
    {
        id: 5,
        name: "TAY GA BA CHẾ ĐỘ",
        brand: "Nijia",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 350000,
        colors: ["Đen", "Đỏ"],
        images: [
            "../img/phukien1.jpg",
            "../img/phukienModal1.jpg",
            "../img/phukienModal2.jpg",
        ],
        description: "Tay ga ba chế độ sử dụng cho xe máy điện có ba chế độ đi. (nhanh,trung bình, chậm)."
    },
    {
        id: 6,
        name: "SẠC 48V – 20AH CAO CẤP",
        brand: "Nijia",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 300000,
        colors: ["Đen"],
        images: [
            "../img/phukien4.jpg",
            "../img/phukienModal4.jpg",
        ],
        description: "Sạc 48V – 20Ah cao cấp chuyên dùng cho xe máy điện chạy 4 bình to từ 18 – 35Ah."
    },
    {
        id: 7,
        name: "ĐIỀU TỐC XE VESPA NIJIA",
        brand: "Nijia",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 1200000,
        colors: ["Trắng", "Đen"],
        images: [
            "../img/phukien5.jpg",
            "../img/phukienModal5.jpg",
        ],
        description: "Điều tốc xe Vespa Nijia tiếp nhận các hoạt động của xe như bật khóa, vặn ga."
    },
    {
        id: 8,
        name: "E-Scooter YADEA X-Bull",
        brand: "YADEA",
        origin: "Việt Nam, Trung Quốc",
        power: "400W",
        maxDistance: "50 km/lần sạc",
        price: 13690000,
        colors: ["Be", "Đen", "Xanh"],
        images: [
            "../img/xedapdien17.jpg",
            "../img/xedapdien18.jpg",
            "../img/xedapdienModal10.jpg",
            "../img/xedapdienModal11.jpg",
            "../img/xedapdienModal12.jpg",
        ],
        description: "Xe Máy Điện E-Scooter YADEA X-Bull (Ắc Quy TTFAR)"
    },
    {
        id: 9,
        name: "E-BIKE DK Tron Z",
        brand: "DK Bike",
        origin: "Việt Nam",
        power: "350W",
        maxDistance: "50-60km/lần sạc",
        price: 10490000,
        colors: ["Cam", "Đen", "Xanh"],
        images: [
            "../img/xedapdien7.jpg",
            "../img/xedapdien8.jpg",
            "../img/xedapdienModal13.jpg",
            "../img/xedapdienModal14.jpg",
            "../img/xedapdienModal15.jpg",
        ],
        description: "Xe Đạp Điện E-BIKE DK Tron Z – Bánh 18 Inches"
    },
    {
        id: 10,
        name: "DK Samurai",
        brand: "DK Bike",
        origin: "Việt Nam",
        power: "450W",
        maxDistance: "50km/lần sạc",
        price: 15490000,
        colors: [, "Đen", "Xanh"],
        images: [
            "../img/DK1.jpg",
            "../img/DK2.jpg",
        ],
        description: "Xe Đạp Điện DK Samurai – Bánh 16 Inches"
    },
    {
        id: 11,
        name: "DK Sparta",
        brand: "DK Bike",
        origin: "Việt Nam",
        power: "600W",
        maxDistance: "50-60 km/lần sạc",
        price: 14490000,
        colors: ["Cam", "Trắng"],
        images: [
            "../img/DK3.jpg",
            "../img/DK4.jpg",
        ],
        description: "Xe Đạp Điện DK Sparta – Bánh 16 Inches"
    },
    {
        id: 12,
        name: "E-Bike BOMELLI B16",
        brand: "Hitasa",
        origin: "Việt Nam",
        power: "230W",
        maxDistance: "40-50km/lần sạc",
        price: 9790000,
        colors: ["Cam", "Đỏ"],
        images: [
            "../img/xedapdien5.jpg",
            "../img/xedapdien6.jpg",
        ],
        description: "Xe Đạp Điện E-Bike BOMELLI B16"
    },
    {
        id: 13,
        name: "E-Bike HITASA 18IM",
        brand: "Hitasa",
        origin: "Việt Nam",
        power: "250W",
        maxDistance: "40-50km/lần sạc",
        price: 9590000,
        colors: ["Cam", "Vàng"],
        images: [
            "../img/HTS1.jpg",
            "../img/HTS2.jpg",
        ],
        description: "Xe Đạp Điện E-Bike HITASA 18IM"
    },
    {
        id: 14,
        name: "E-BIKE HITASA S168",
        brand: "Hitasa",
        origin: "Việt Nam",
        power: "230W",
        maxDistance: "40-50km/lần sạc",
        price: 11190000,
        colors: ["Bạc", "Hồng"],
        images: [
            "../img/HTS3.jpg",
            "../img/HTS4.jpg",
        ],
        description: "Xe Đạp Điện E-BIKE HITASA S168"
    },
    {
        id: 15,
        name: "HITASA N18",
        brand: "Hitasa",
        origin: "Việt Nam",
        power: "250W",
        maxDistance: "40-50km/lần sạc",
        price: 9590000,
        colors: ["Xanh"],
        images: [
            "../img/xedapdien15.jpg",
            "../img/xedapdien16.jpg",
        ],
        description: "Xe đạp điện HITASA N18"
    },
    {
        id: 16,
        name: "E-Bike JVC G10 Premium",
        brand: "JVC",
        origin: "Việt Nam, Trung Quốc",
        power: "250W",
        maxDistance: "40-50km/lần sạc",
        price: 11890000,
        colors: ["Đỏ đen", "Đen"],
        images: [
            "../img/xedapdien11.jpg",
            "../img/xedapdien12.jpg",
        ],
        description: "Xe Đạp Điện E-Bike JVC G10 Premium- Bánh 16 Inches"
    },
    {
        id: 17,
        name: "E-Scooter JVC G9S NFC",
        brand: "JVC",
        origin: "Việt Nam, Trung Quốc",
        power: "500W",
        maxDistance: "60-70km/lần sạc",
        price: 14490000,
        colors: ["Trắng", "Đỏ"],
        images: [
            "../img/JVC1.jpg",
            "../img/JVC2.jpg",
        ],
        description: "Xe Máy Điện E-Scooter JVC G9S NFC"
    },
    {
        id: 18,
        name: "E-Scooter JVC Xmen Neo",
        brand: "JVC",
        origin: "Việt Nam, Trung Quốc",
        power: "500W",
        maxDistance: "60-70km/lần sạc",
        price: 15690000,
        colors: ["Đen", "Xanh"],
        images: [
            "../img/JVC3.jpg",
            "../img/JVC4.jpg",
        ],
        description: "Xe Máy Điện E-Scooter JVC Xmen Neo New"
    },



    // Thêm các sản phẩm khác vào đây
];