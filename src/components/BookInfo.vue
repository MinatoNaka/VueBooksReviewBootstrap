<template>
  <b-col cols="6" sm="4" md="3" class="p-2">
    <b-card :class="{ linkable }" class="h-100 shadow" @click="onclick" no-body>
      <b-card-img
        :src="book.image"
        alt="Image"
        top
        class="p-1"
        height="100"
        style="object-fit: contain"
      ></b-card-img>
      <b-card-body class="p-1">
        <b-card-text class="text-center">
          <p class="small font-weight-bold">{{ book.title }}</p>
          <p class="small text-right text-muted m-0">{{ book.author }}著</p>
          <!-- <p class="small m-0">{{ book.publisher }} /刊</p>
          <p class="small">{{ book.published }} /発売</p> -->
          <p class="small text-right text-muted m-0">{{ book.price }}円</p>
        </b-card-text>
      </b-card-body>
      <b-card-footer class="p-1 text-center bg-c-background text-c-stroke"
        >Post Review <b-icon icon="chevron-double-right"></b-icon
      ></b-card-footer>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "book-info",
  props: {
    index: { type: Number },
    linkable: { type: Boolean, default: false },
    book: { type: Object },
  },
  methods: {
    onclick() {
      console.log(111);
    },
  },
};
</script>
