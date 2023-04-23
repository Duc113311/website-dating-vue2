<template>
  <div class="w-full flex items-center mt-6">
    <div class="w-full">
      <div class="w-full flex items-center form-set-list bg-default">
        <div class="w-full">
          <div class="flex justify-between w-full">
            <div class="w-full">
              <div
                class="form-set-item bh-item-title title-item flex justify-between items-center"
              >
                <div class="">Q&A Events</div>
                <div>
                  <el-switch
                    v-model="valueQAEvent"
                    active-color="#FB5D65"
                    inactive-color="#5F6A86"
                  >
                  </el-switch>
                </div>
              </div>
              <div class="form-set-item bh-describe">
                Turning this off will remove Q&A event content from your
                profile, and you'll no longer see profiles with Q&A event
                content
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
  name: "switch-event",

  data() {
    return {
      valueQAEvent: false,
    };
  },
};
</script>

<style></style>
