function KiemTraSoChinhPhuong(num) {
    // Kiểm tra nếu căn bậc hai của số là số nguyên thì đó là số chính phương
    return Math.sqrt(num) === Math.floor(Math.sqrt(num));
}

function TimSoChinhPhuong() {
    // Lấy giá trị của a và b từ ô input
    const a = parseInt(document.getElementById("number_a").value);
    const b = parseInt(document.getElementById("number_b").value);

    // Kiểm tra xem a và b có hợp lệ không
    if (isNaN(a) || isNaN(b)) {
        alert("Vui lòng nhập đúng giá trị của a và b.");
        return;
    }

    // Xóa kết quả cũ nếu có
    document.getElementById("result").innerHTML = "";

    // Tìm các số chính phương trong khoảng a và b và hiển thị kết quả
    let result = "<p>Các số chính phương trong khoảng " + a + " và " + b + " là: </p>";
    for (let i = a; i <= b; i++) {
        if (KiemTraSoChinhPhuong(i)) {
            result += i + " ";
        }
    }

    document.getElementById("result").innerHTML = result;
}
