// Bài 1
/*
Mô hình 3 khối:
đầu vào : tìm số tự nhiên nhỏ nhất
xử lí : tính tổng các số từ 1 - N sao cho tổng <10000
đầu ra: xuất ra màn hình số N

*/
document.getElementById('btnTimSo').onclick = function () {
    var Tong = 0;
    var N = 1;
    //  b1 : giá trị bắt đầu 
    //  b2 : thiết lập điều kiện lặp
    while (Tong < 10000) {
        // b3 khối lệnh xử lí
        Tong += N;
        //   b4 :  thay đổi điều kiện lặp 
        N++;
    }
    if (Tong > 10000) {
        N = N - 1;
    }
    // in out put ra giao diện 
    document.getElementById('ketQua_b1').innerHTML = "Số nguyên dương nhỏ nhất là: " + N;
}
//Bài 2
document.getElementById('btnTinhSN').onclick = function () {
    //input: x:number, n:number
    var x = Number(document.getElementById('nhapX').value);
    var n = Number(document.getElementById('nhapN').value);
    //output: ketQua4 : string
    var ketQua4 = '';
    //progress
    var tong4 = 0;
    var iSo4 = 1;
    // yếu tố thay đổi
    var soDem4 = 0;
    // thiết lập điều kiện lặp
    while (soDem4 <= n) {
        //khối lệnh xử lí
        if (iSo4 <= n) {
            tong4 += x ** iSo4;
            iSo4++;
        }
        //thay đổi điều kiện
        soDem4++;
    }
    document.getElementById('ketQua_b2').innerHTML = 'Tổng: ' + tong4;
}
//Bài tập 3: Cho phép người dùng nhập vào 1 số, in ra giai thừa của số đó
// 5! = 1 * 2 * 3 * 4 * 5;
/*
    4 yếu của vòng lặp: 
    B1: Xác định yếu tố thay đổi (khởi tạo giá trị bắt đầu) => Nó sẽ bị thay đổi trong vòng lặp
    B2: Thiết lặp điều kiện lặp (đúng thì làm và lặp lại)
    B3: Cài đặt khối xử lý 
    B4: Thay đổi giá trị của biến khai báo ở bước 1
*/
document.getElementById('btnTinhGiaiThua').onclick = function () {
    //input: so:number ví dụ: 5
    var iSo = Number(document.getElementById('nhapSo_2').value);
    //output: giaiThua: number = 120
    var giaiThua = 1;

    //progress: Xử lý
    //B1: Giá trị thay đổi
    var soHang = 1;
    //B2: Thiết lặp điều kiện lặp
    while (soHang <= iSo) {
        //Bước 3: Khối lệnh xử lý
        giaiThua = giaiThua * soHang;
        //Bước 4: Thay đổi điều kiện
        soHang++;
    }
    //in output ra giao diện
    document.getElementById('ketQua_b3').innerHTML = 'Giai thừa của số này là:' + giaiThua;
}
// Bài 4
document.getElementById('btnInTheDiv').onclick = function () {
    var html = '';
    //Progress:
    //Bước 1: Giá trị bắt đầu
    var dem = 1;
    //Bước 2: Thiết lặp điều kiện lặp
    while (dem <= 10) {
        //B3: Khối lệnh xử  lý
        if (dem % 2 == 0) {
            var div = '<div class="alert alert-danger"></div>';
            html += div; //html = html + div;   
        }
        else {
            var div = '<div class="alert alert-primary"></div>';
            html += div; //html = html + div;   
        }
        //B4: Thay đổi điều lặp
        dem++; //dem += 1;
    }

    //in output ra giao diện
    document.getElementById('ketQua_b4').innerHTML = html;

}