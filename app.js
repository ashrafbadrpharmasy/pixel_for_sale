const PIXEL_PRICE = 10;
const BOARD_SIZE = 100;
const TOTAL_PIXELS = BOARD_SIZE * BOARD_SIZE;

const pixelBoard = document.getElementById("pixelBoard");
const selectedCount = document.getElementById("selectedCount");
const totalPrice = document.getElementById("totalPrice");
const reserveButton = document.getElementById("reserveButton");

const selectedPixels = new Set();

// إنشاء الـ 10,000 Pixel
for (let i = 0; i < TOTAL_PIXELS; i++) {
    const pixel = document.createElement("div");

    pixel.className = "pixel";
    pixel.dataset.index = i;

    pixel.addEventListener("click", () => {
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

// تحديث العدد والسعر
function updatePrice() {
    const count = selectedPixels.size;
    const price = count * PIXEL_PRICE;

    selectedCount.textContent = count;
    totalPrice.textContent = `${price} جنيه`;
}

// زر الحجز
reserveButton.addEventListener("click", () => {
    const count = selectedPixels.size;

    if (count === 0) {
        alert("اختار بيكسل واحد على الأقل أولاً.");
        return;
    }

    const price = count * PIXEL_PRICE;

    alert(
        `تم اختيار ${count} بيكسل\n` +
        `الإجمالي: ${price} جنيه\n\n` +
        `في الخطوة التالية هنضيف بيانات الإعلان والدفع.`
    );
});

updatePrice();
