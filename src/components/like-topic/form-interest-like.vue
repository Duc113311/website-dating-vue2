<template>
  <div class="w-full h-full">
    <div class="padding-title w-full">Interests</div>
    <div class="w-full h-form-interest">
      <div
        class="w-full h-full list-interest-form mt-5 height-scroll overflow-scroll"
      >
        <span v-for="(item, index) in listInterest" :key="index">
          <button
            @click="onSelectInterest(item.code)"
            :id="`not-check_` + item.code"
            class="option-interests border-default mr-3 mb-3 p-3"
            size="large"
          >
            {{ item.value }}
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-interest-like",

  data() {
    return {
      listChecked: [],
      listInterestCode: [],
      listInterest:
        this.$store.state.commonModule.listLifeStyleSingle.interests,
    };
  },

  methods: {
    onSelectInterest(val) {
      const listInterest =
        this.$store.state.commonModule.listLifeStyleSingle.interests;
      const findData = this.listChecked.find((x) => x.code === val);
      if (!findData) {
        if (this.listChecked.length < 5) {
          document
            .getElementById("not-check_" + val)
            .classList.add("bg-active");
          const findValue = listInterest.find((x) => x.code === val);
          document
            .getElementById("not-check_" + val)
            .classList.remove("border-default");

          if (findValue) {
            const objectChecked = {
              code: val,
              value: findValue.value,
            };
            this.listInterestCode.push(val);

            this.listChecked.push(objectChecked);
          }
        }
        // Khong ton tai
      } else {
        // Ton tại
        document
          .getElementById("not-check_" + val)
          .classList.remove("bg-active");
        document
          .getElementById("not-check_" + val)
          .classList.add("border-default");
        const indexData = this.listChecked.findIndex((x) => x.code === val);
        const indexCode = this.listInterestCode.findIndex((x) => x === val);

        this.listChecked.splice(indexData, 1);
        this.listInterestCode.splice(indexData, 1);
      }
    },
  },

  mounted() {
    const interestsData = this.$store.state.commonModule.listInterestFilter;

    if (interestsData.length !== 0) {
      for (let index = 0; index < interestsData.length; index++) {
        const element = interestsData[index];
        document
          .getElementById("not-check_" + element)
          .classList.add("bg-active");

        document
          .getElementById("not-check_" + element)
          .classList.remove("border-default");
        const nameInterest = document
          .getElementById("not-check_" + element)
          .innerHTML.toString();
        const objectChecked = {
          code: element,
          value: nameInterest,
        };
        this.listInterestCode.push(element);
        this.listChecked.push(objectChecked);
      }
    }
  },
};
</script>

<style lang="scss">
.h-form-interest {
  height: 34rem;
}

.bg-active {
  border: 1.5px solid #f65a62;
  color: #f65a62;
}
</style>
