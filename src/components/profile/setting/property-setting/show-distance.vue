<template>
  <div class="w-full">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title">
        <div class="w-full bh-item-title title-size">App Setiings</div>
      </div>
      <div class="w-full form-set-list">
        <div class="w-full flex justify-between form-set-item">
          <div class="bh-title">SHOW DISTANCE IN</div>
          <div class="bh-describe">km.</div>
        </div>

        <div
          class="w-full flex justify-center items-center form-set-item gap-6"
        >
          <div
            v-for="(item, index) in listDistance"
            :key="index"
            :id="`location_` + item"
            class="style-distance no-active-distance"
            @click="onChangeDistanceLocation(item)"
          >
            {{ item.charAt(0).toUpperCase() + item.slice(1) + "." }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "show-distance",

  data() {
    return {
      listDistance: ["km", "mi"],
    };
  },

  component: {
    ...mapGetters({ nameDistanceLocation: "showDistanceLocation" }),

    isShowDistance: {
      get() {
        const statusDistance = this.nameDistanceLocation;
        debugger;
        if (statusDistance === "km") {
          return true;
        }
        return false;
      },
      set(newName) {
        debugger;
        if (newName === "km") {
          return true;
        }
        return false;
      },
    },
  },

  methods: {
    onChangeDistanceLocation(val) {
      debugger;
      console.log(val);
      for (let index = 0; index < this.listDistance.length; index++) {
        const element = this.listDistance[index];
        if (element === val) {
          document
            .getElementById("location_" + val)
            .classList.add("active-distance");
          document
            .getElementById("location_" + val)
            .classList.remove("no-active-distance");
        } else {
          document
            .getElementById("location_" + element)
            .classList.remove("active-distance");
          document
            .getElementById("location_" + element)
            .classList.add("no-active-distance");
        }
      }
    },
  },

  mounted() {
    const location = this.nameDistanceLocation;
    console.log(location);
    document
      .getElementById("location_" + location)
      .classList.add("active-distance");
    document
      .getElementById("location_" + location)
      .classList.remove("no-active-distance");
  },
};
</script>

<style lang="css">
.style-distance {
  width: 28%;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
.active-distance {
  background-color: #fd5d65;
}
.no-active-distance {
  background-color: #5f6a86;
}
</style>
