# Angular 10 & NodeJS same port server
> Đây là một demo sử dụng nodjs và angular 8,..,10 chạy trên cùn một server cổng 3000
> bạn có thể thay đôi cổng của nó trong file serer.js
## Cài đặt
Chạy lệnh `npm install` để cài đặt các gói thư việc cho node và angualar
## Run server
Chạy lệnh `npm start` bạn sẽ thấy trên màn hình console báo máy chủ đang chạy `http://localhost:3000/`
## Các link khác có dạng
- About: `http://localhost:3000/about`
- Books: `http://localhost:3000/books`
- Contact: `http://localhost:3000/contact`

## Api link có dạng
- Truy cập các api VD: `http://localhost:3000/api/book`
- Các api có thể phát triển và khai báo tại file server.js
## Đổi cổng cho server
Mở file **server.js** tìm dòng 17 và thay đổi cổng
```js

// Đặt cổng cho server
const port = 3000; // thay đổi cổng bạn muốn

```
## Phát triển ứng dụng
- Lập trình viên có thể xây dựng các component của angular như bình thường
- Và xây dựng các api của nodejs như bình thường
- Sau mỗi lần thay dổi nhớ chạy lệnh `npm start` để build lại server