<template>
  <div class="hello">
    <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoaded"
    ></StreamBarcodeReader>
    <ImageBarcodeReader @decode="onDecode2" @error="onError"></ImageBarcodeReader>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import { ImageBarcodeReader } from "vue-barcode-reader"; 

export default {
  name: "HelloWorld",
  components: {
    StreamBarcodeReader,
  },
  props: {
    msg: String,
  },
  methods: {
    onDecode(result) {
      if (result === null) {
        alert("NULL VALUE");
      } else {
        alert(result);
      }
    },
    onDecode2 (result) { console.log(result) }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  margin-left: 35%;
  width: 30%;
  height: 30%;
  margin-top: 10%;
}
</style>
