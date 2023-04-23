<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full">
      <div class="w-full style-switch bg-default">
        <div class="name text-xl">Smart Photos</div>

        <div>
          <el-switch
            v-model="valueSmart"
            active-color="#FB5D65"
            inactive-color="#5F6A86"
            @change="onChangeSmart()"
          >
          </el-switch>
        </div>
      </div>
      <div class="w-full p-3 bh-describe">
        Smart photos continiously tests all your profile photos to find the best
        one
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "smart-photo-page",
  data() {
    return {
      valueSmart: true,
    };
  },

  methods: {
    /**
     * Xử lý sự kiện
     */
    onChangeSmart() {
      // Xử lý sự kiện
    },
  },
};
</script>

<style lang="css"></style>
