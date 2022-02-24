import { createApp } from "vue";
import App from "./App.vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

createApp(App).use(StreamBarcodeReader).mount("#app");
