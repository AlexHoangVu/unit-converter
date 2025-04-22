document.getElementById("convertButton").addEventListener("click", function () {
  console.log("Button clicked!");

  let inputValue = document.getElementById("inputValue").value;
  console.log("Giá trị nhập vào là: " + inputValue);

  let conversionType = document.getElementById("conversionType").value;
  console.log("Chuyển đổi loại: " + conversionType);

  const resultEl = document.getElementById("result");
  resultEl.classList.remove("show"); // Xóa class cũ nếu có

  if (conversionType === "usdToVnd") {
    resultEl.innerText = "Kết quả: " + (inputValue * 25980).toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " VND";
  } else {
    resultEl.innerText = "Kết quả: " + (inputValue / 25980).toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " USD";
  }

  void resultEl.offsetWidth; // Trigger lại reflow
  resultEl.classList.add("show"); // Thêm class để chạy hiệu ứng
});
