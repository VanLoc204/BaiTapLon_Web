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
    {
        id: 19,
        name: "E-SCOOTER JVC G5",
        brand: "JVC Eco",
        origin: "Việt Nam",
        power: "800W",
        maxDistance: "96km/lần sạc",
        price: 13390000,
        colors: ["Đỏ", "Xám"],
        images: [
            "../img/JVC5.jpg",
            "../img/JVC6.jpg",
        ],
        description: "Xe Máy Điện E-SCOOTER JVC G5"
    },
    {
        id: 20,
        name: "Xmen JVC F1",
        brand: "JVC Eco",
        origin: "Việt Nam",
        power: "800W",
        maxDistance: "80-100km/lần sạc",
        price: 14900000,
        colors: ["Đỏ", "Xám"],
        images: [
            "../img/JVC7.webp",
            "../img/JVC8.webp",
        ],
        description: "Xe máy điện Xmen JVC F1"
    },
    {
        id: 21,
        name: "E-Scooter YADEA Xmen Sport",
        brand: "YADEA",
        origin: "Việt Nam, Trung Quốc",
        power: "1000W",
        maxDistance: "70km/lần sạc",
        price: 17900000,
        colors: ["Đỏ", "Đen"],
        images: [
            "../img/YADEA1.jpg",
            "../img/YADEA2.jpg",
        ],
        description: "Xe Máy Điện E-Scooter YADEA Xmen Sport"
    },
    {
        id: 22,
        name: "E-Bike YADEA IGO",
        brand: "YADEA",
        origin: "Việt Nam, Trung Quốc",
        power: "210W",
        maxDistance: "50km/lần sạc",
        price: 12690000,
        colors: ["Đỏ", "Đen"],
        images: [
            "../img/YADEA3.jpg",
            "../img/YADEA4.jpg",
        ],
        description: "Xe Đạp Điện E-Bike YADEA IGO"
    },
    {
        id: 23,
        name: "Yadea Xmen Neo",
        brand: "YADEA",
        origin: "Việt Nam, Trung Quốc",
        power: "1000W",
        maxDistance: "80km/lần sạc",
        price: 17500000,
        colors: ["Xanh", "Đen"],
        images: [
            "../img/YADEA5.webp",
            "../img/YADEA6.webp",
        ],
        description: "Xe máy điện Yadea Xmen Neo"
    },
    {
        id: 24,
        name: "Yadea I6",
        brand: "YADEA",
        origin: "Việt Nam, Trung Quốc",
        power: "1000W",
        maxDistance: "80km/lần sạc",
        price: 11790000,
        colors: ["Xanh", "Đen"],
        images: [
            "../img/YADEA7.webp",
            "../img/YADEA8.webp",
        ],
        description: "Xe đạp điện Yadea I6"
    },
    {
        id: 25,
        name: "Yadea I8",
        brand: "YADEA",
        origin: "Việt Nam, Trung Quốc",
        power: "1000W",
        maxDistance: "80km/lần sạc",
        price: 13990000,
        colors: ["Xanh", "Be"],
        images: [
            "../img/YADEA9.webp",
            "../img/YADEA10.webp",
        ],
        description: "Xe đạp điện Yadea I8"
    },
    {
        id: 26,
        name: "Yadea I5",
        brand: "YADEA",
        origin: "Việt Nam, Trung Quốc",
        power: "1000W",
        maxDistance: "80km/lần sạc",
        price: 11500000,
        colors: ["Xanh", "Đỏ"],
        images: [
            "../img/YADEA11.webp",
            "../img/YADEA12.webp",
        ],
        description: "Xe đạp điện Yadea I5"
    },
    {
        id: 27,
        name: "TAY GA XE NIJIA",
        brand: "NIJIA",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 350000,
        colors: ["Đen"],
        images: [
            "../img/phukien3.jpg",
            "../img/phukien3.jpg",
        ],
        description: "Tay ga xe Nijia sử dụng cho xe đạp điện Nijia hàng chính hãng."
    },
    {
        id: 28,
        name: "Bộ khóa xe Yadea Xbull",
        brand: "Yadea",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 150000,
        colors: ["Đen"],
        images: [
            "../img/phukien6.jpg",
            "../img/phukien6.jpg",
        ],
        description: "Bộ khoá nguồn xe điện chỉ dành cho dòng xe điện Yadea Xbull"
    },
    {
        id: 29,
        name: "Bộ khoá xe điện Dk Bike Spatar",
        brand: "DK BIKE",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 350000,
        colors: ["Đen"],
        images: [
            "../img/phukien7.jpg",
            "../img/phukien7.jpg",
        ],
        description: "Bộ khoá nguồn xe điện chỉ dành cho dòng xe điện Dk Bike Spatar"
    },
    {
        id: 30,
        name: "Khoá xe đạp điện Dkbike Samurai",
        brand: "DK BIKE",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 490000,
        colors: ["Đen"],
        images: [
            "../img/phukien8.jpg",
            "../img/phukien8.jpg",
        ],
        description: "Bộ khoá nguồn xe điện chỉ dành cho dòng xe điện Dkbike Samurai"
    },
    {
        id: 31,
        name: "Pin xe điện Yadea Igo 48v-12a",
        brand: "Yadea",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 4800000,
        colors: ["Đen"],
        images: [
            "../img/phukien9.jpg",
            "../img/phukien9.jpg",
        ],
        description: "Pin xe điện Yadea Igo 48v-12a nhanh chóng tiện lợi"
    },
    {
        id: 32,
        name: "SẠC XE XMEN YADEA",
        brand: "YADEA",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 500000,
        colors: ["Đen"],
        images: [
            "../img/phukien10.png",
            "../img/phukien10.png",
        ],
        description: "Sạc xe Xmen Yadea chuyên dùng cho xe máy điện Xmen chính hãng."
    },
    {
        id: 33,
        name: "SẠC PIN 36V",
        brand: "Không có",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 400000,
        colors: ["Đen"],
        images: [
            "../img/phukien11.png",
            "../img/phukien11.png",
        ],
        description: "Sạc pin 36v sử dụng cho các loại xe đạp điện chạy pin lithium có pin 36v."
    },
    {
        id: 34,
        name: "SẠC XE ĐIỆN 48V – 12AH",
        brand: "Không có",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 400000,
        colors: ["Đen"],
        images: [
            "../img/phukien12.png",
            "../img/phukien12.png",
        ],
        description: "Sạc xe điện 48V – 12Ah chuyên dùng cho xe đạp điện chạy 4 bình bé từ 12Ah như Giant, NIJIA, các xe bò điên"
    },

    {
        id: 35,
        name: "ĐIỀU TỐC XE XMEN GT",
        brand: "XMEN",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 1200000,
        colors: ["Trắng"],
        images: [
            "../img/phukien5.jpg",
            "../img/phukien5.jpg",
        ],
        description: "Điều tốc xe Xmen GT là bộ phận quan trọng của xe. Đây là một bộ phận có vai trò quan trọng điều khiển và kiểm soát tất cả các thiết bị điện của xe"
    },

    {
        id: 36,
        name: "Royal M379",
        brand: "Royal",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 250000,
        colors: ["Trắng", "Đen"],
        images: ["../img/nbh1.jpg", "../img/nbh2.jpg"],
        description: "Mũ bảo hiểm 1/2, Royal M379",
    },

    {
        id: 37,
        name: "Royal M103",
        brand: "Royal",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 300000,
        colors: ["Trắng", "Đen"],
        images: ["../img/nbh3.jpg", "../img/nbh4.jpg"],
        description: "Mũ bảo hiểm 1/2, Royal M103",
    },

    {
        id: 38,
        name: "Royal M134C",
        brand: "Royal",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 590000,
        colors: ["Trắng", "Đen"],
        images: ["../img/nbh5.jpg", "../img/nbh6.jpg"],
        description: "Mũ bảo hiểm 3/4, Royal M134C",
    },

    {
        id: 39,
        name: "Nón Sơn",
        brand: "Nón Sơn",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 290000,
        colors: ["Trắng", "Đen"],
        images: ["../img/nbh8.jpg", "../img/nbh7.jpg"],
        description: "Mũ bảo hiểm 1/2, Nón Sơn",
    },

    {
        id: 40,
        name: "NAPOLI BOSOZOKU JAPA",
        brand: "NAPOLI",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 230000,
        colors: ["Vàng", "Đen"],
        images: ["../img/nbh9.jpg", "../img/nbh10.jpg"],
        description: "Mũ bảo hiểm 1/2, NAPOLI BOSOZOKU JAPA",
    },

    {
        id: 41,
        name: "ASIA MT-139",
        brand: "ASIA",
        origin: "Việt Nam",
        power: "Không có",
        maxDistance: "Không có",
        price: 380000,
        colors: ["Đỏ", "Đen"],
        images: ["../img/nbh11.jpg", "../img/nbh12.jpg"],
        description: "Mũ bảo hiểm 1/2, ASIA MT-139",
    },

    // Thêm các sản phẩm khác vào đây
];