<template>
  <!--  -->
  <div class="w-full h-full title-default">
    <div class="header-report w-full">Hủy</div>
    <div class="w-full">
      <img src="@/assets/icon/ic_safety (1).svg" alt="" />
    </div>

    <div class="w-full">
      <div class="w-full">Lý do báo cáo của bạn là gì?</div>
      <div class="w-full flex style-form bg-default">
        <div class="flex justify-between w-full">
          <div class="bh-item-title">Vui lòng chọn một lý do</div>
          <div class="">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full">
      <div class="describe-report">
        Chúng tôi sẽ không cho Puddink biết rằng bạn đã báo cáo họ
      </div>
      <div>
        <BhCommon :nameTitle="nameTitle"></BhCommon>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import BhCommon from "../../../components/bh-element-ui/button/bh-common";
export default {
  components: { BhCommon },
  name: "report-page",

  data() {
    return {
      nameTitle: "TIẾP THEO",
    };
  },
};
</script>

<style lang="scss"></style>
