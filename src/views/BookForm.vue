<template>
  <div id="form" class="my-3">
    <b-card class="shadow" no-body>
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
          <p class="small text-muted m-0">{{ book.author }}著</p>
          <p class="small text-muted m-0">{{ book.publisher }} /刊</p>
          <p class="small text-muted">{{ book.published }} /発売</p>
          <p class="small text-right text-muted m-0">{{ book.price }}円</p>
        </b-card-text>
      </b-card-body>
    </b-card>
    <hr />
    <b-form @submit="onsubmit">
      <label for="read">読了日</label>
      <b-form-datepicker
        id="read"
        v-model="form.read"
        class="mb-2"
        selected-variant="c-highlight"
        today-button
        today-button-variant="c-stroke"
        :date-format-options="{
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }"
        locale="ja"
      ></b-form-datepicker>
      <label for="memo">感想</label>
      <b-form-textarea
        id="memo"
        size="sm"
        v-model="form.memo"
      ></b-form-textarea>
      <b-button type="submit" variant="c-stroke" class="mt-3">登録</b-button>
    </b-form>
    <!-- <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="読了日">
        <el-date-picker type="date" v-model="form.read"></el-date-picker>
      </el-form-item>

      <el-form-item label="感想" prop="memo">
        <el-input type="textarea" size="large" v-model="form.memo"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onsubmit">登録</el-button>
      </el-form-item>
    </el-form> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import BookInfo from "@/components/BookInfo.vue";
import { UPDATE_CURRENT, UPDATE_BOOK } from "@/store/mutation-types";
export default {
  name: "book-form",
  components: {
    // BookInfo,
  },
  data() {
    return {
      book: {},
      form: {
        read: new Date(),
        memo: "",
      },
      // rules: {
      //   memo: [
      //     { required: true, message: "メモが未入力です。", trigger: "blur" },
      //   ],
      // },
      /*
      rules: {
        memo: [{
          validator: (rule, value, callback) => {
            console.log(rule);
            if (!value) {
              return callback(new Error('メモが未入力です。'))
            }
          },
          trigger: 'change'
        }]
      }
      */
    };
  },
  computed: mapGetters(["current", "getBookById"]),
  created() {
    if (!this.current) {
      this.$router.push("/");
    }
    this.book = Object.assign({}, this.current);
  },
  mounted() {
    let b = this.getBookById(this.book.id);
    if (b) {
      this.form.read = b.read;
      this.form.memo = b.memo;
    }
  },
  methods: {
    ...mapActions([UPDATE_BOOK, UPDATE_CURRENT]),
    onsubmit() {
      // this.$refs["form"].validate((valid) => {
      //   if (valid) {
      this[UPDATE_BOOK](Object.assign({}, this.book, this.form));
      this[UPDATE_CURRENT](null);
      // this.$notify({
      //   title: "Reading Recorder",
      //   message: this.$createElement(
      //     "p",
      //     { style: "color: #009" },
      //     "読書情報の登録／更新に成功しました。"
      //   ),
      //   duration: 2000,
      // });
      this.form.read = new Date();
      this.form.memo = "";
      this.$router.push("/");
    },
    //   });
    // },
  },
};
</script>
