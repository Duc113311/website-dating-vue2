<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex bh-title p-3 items-center">
        <div>SHOW ME ON CARD STACK</div>
      </div>
      <div class="w-full flex items-center">
        <div class="w-full style-bg-common form-set-list">
          <div class="flex justify-between w-full">
            <div class="w-full">
              <div class="flex justify-between items-center">
                <div class="form-set-item bh-item-title title-item">
                  Show me on Card Stack
                </div>
                <div>
                  <el-switch
                    v-model="valueCardStack"
                    active-color="#FB5D65"
                    inactive-color="#5F6A86"
                    @change="onChangeCardStack()"
                  >
                  </el-switch>
                </div>
              </div>
              <div class="form-set-item bh-describe">
                If you turn off, you will not be shown in the card stack. People
                you have already liked may still your profile and match with
                you. You can still see and chat with your matches
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-stack-page",

  data() {
    return {
      valueCardStack: "",
    };
  },

  methods: {
    onChangeCardStack() {
      debugger;
    },
  },
};
</script>

<style css scoped></style>
