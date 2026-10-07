const PIXEL_PRICE = 50;

const BOARD_SIZE = 100;

const TOTAL_PIXELS = BOARD_SIZE * BOARD_SIZE;

const pixelBoard = document.getElementById("pixelBoard");

const selectedPixelsElement =
  document.getElementById("selectedPixels");

const totalPriceElement =
  document.getElementById("totalPrice");

const checkoutPixelsElement =
  document.getElementById("checkoutPixels");

const checkoutPriceElement =
  document.getElementById("checkoutPrice");

const reserveButton =
  document.getElementById("reserveButton");


let selectedPixels = new Set();


// إنشاء الـ 10,000 بكسل
for (let i = 0; i < TOTAL_PIXELS; i++) {

  const pixel = document.createElement("div");

  pixel.className = "pixel";

  pixel.dataset.id = i;

  pixel.addEventListener("click", () => {

    // لو المربع متباع، ممنوع اختياره
    if (pixel.classList.contains("sold")) {
      return;
    }

    // لو محدد بالفعل
    if (selectedPixels.has(i)) {

      selectedPixels.delete(i);

      pixel.classList.remove("selected");

    } else {

      selectedPixels.add(i);

      pixel.classList.add("selected");

    }

    updatePrice();

  });

  pixelBoard.appendChild(pixel);
}


// تحديث السعر والعدادات
function updatePrice() {

  const count = selectedPixels.size;

  const price = count * PIXEL_PRICE;

  selectedPixelsElement.textContent =
    count.toLocaleString("en-US");

  totalPriceElement.textContent =
    price.toLocaleString("en-US") + " جنيه";

  checkoutPixelsElement.textContent =
    count.toLocaleString("en-US") + " بكسل";

  checkoutPriceElement.textContent =
    price.toLocaleString("en-US") + " جنيه";
}


// زر الحجز
reserveButton.addEventListener("click", () => {

  const count = selectedPixels.size;

  if (count === 0) {

    alert("من فضلك اختر بكسل واحد على الأقل.");

    return;
  }

  const price = count * PIXEL_PRICE;

  alert(
    "تم اختيار " +
    count +
    " بكسل\n" +
    "الإجمالي: " +
    price +
    " جنيه\n\n" +
    "سنضيف نموذج بيانات العميل والدفع في الخطوة القادمة."
  );

});
