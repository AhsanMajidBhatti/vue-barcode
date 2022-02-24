import { createApp } from "vue";
import App from "./App.vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
import { ImageBarcodeReader } from "vue-barcode-reader";

createApp(App).use(ImageBarcodeReader).use(StreamBarcodeReader).mount("#app");
