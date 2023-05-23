<template>
  <div
    class="w-full h-full relative"
    @mousedown="onMouseDow"
    @mouseup="onMouseUp"
  >
    <Tinder
      v-if="!isLoadData"
      class="uis"
      ref="tinder"
      key-name="_id"
      :queue.sync="listDataUser"
      :offset-y="10"
      @submit="onSubmit"
      :class="{ animate2: animate2, animate1: animate1 }"
    >
      <template slot-scope="scope">
        <div
          v-show="isActiveImag"
          class="pic z-8"
          :style="{
            'background-image': `url(${scope.data.profiles.avatars[0]})`,
          }"
        />
        <div
          v-show="!isActiveImag"
          class="pic z-8"
          :style="{
            'background-image': `url(${idImage}
            )`,
          }"
        />
        <div
          class="flex w-full justify-center absolute top-0 content-center p-0.5 border-solid mt-3"
        >
          <button
            v-for="(data, index) in scope.data.profiles.avatars"
            :key="data"
            :id="`avatar_${index}`"
            :class="index === 0 ? 'active-image' : 'no-active'"
            class="bt-img imageAvatar p-0.5 rounded-lg mr-0.5 no-active"
            @click="onClickNextImage(data)"
          ></button>
        </div>
        <div class="bg-background-shadow w-full h-full absolute top-0"></div>
        <div class="w-full flex items-center absolute bottom-0 h-80 p-4">
          <div class="grid w-full title-boy mb-4">
            <div class="w-70">
              <div>
                <div class="flex items-center">
                  <div
                    :title="scope.data.fullname"
                    class="text-ellipsis whitespace-nowrap font-title overflow-hidden"
                  >
                    {{ scope.data.fullname }},
                  </div>
                  &nbsp;
                  <div
                    class="mr-2 text-age"
                    v-if="scope.data.profiles.showAge === true"
                  >
                    {{ bindingAge(scope.data?.dob) }}
                  </div>
                  <div v-if="scope.data?.verifyStatus === true">
                    <img src="@/assets/icon/ic_verified_enable.svg" />
                  </div>
                </div>
                <div v-if="scrods === 0">
                  <div
                    class="flex items-center"
                    v-if="scope.data.onlineNow === false"
                  >
                    <div class="online-off ml-2 mr-4"></div>
                    <div>Recently Active</div>
                  </div>
                  <div
                    class="flex items-center"
                    v-if="scope.data.onlineNow === true"
                  >
                    <div class="online-status ml-2 mr-3"></div>
                    <div>Recently Active</div>
                  </div>
                  <div class="flex" v-if="scope.data.profiles.address">
                    <div class="mr-2">
                      <img src="@/assets/icon/ic_city_light.svg" />
                    </div>
                    <span class="font-describe"
                      >Sống tại {{ scope.data.profiles.address }}</span
                    >
                  </div>
                  <div
                    class="flex"
                    v-if="scope.data.profiles.showDistance === true"
                  >
                    <div class="mr-2">
                      <img src="@/assets/icon/ic_location_dark.svg" />
                    </div>
                    <span class="font-describe"
                      >{{ bindingLocation(scope.data?.distanceKm) }}
                      {{ valueKi }} away</span
                    >
                  </div>
                </div>
                <div v-if="scrods === 1">
                  {{ scope.data.profiles.about }}
                </div>
                <div v-if="scrods === 2">
                  <span
                    v-for="(item, index) in bingBasicInformation(
                      scope.data.profiles
                    )"
                    :key="index"
                  >
                    <button class="item-home">{{ item }}</button>
                  </span>
                </div>
                <div v-if="scrods === 3">
                  <span
                    v-for="(item, index) in bingLifeStyleStatic(
                      scope.data.profiles
                    )"
                    :key="index"
                  >
                    <button class="item-home">{{ item }}</button>
                  </span>
                </div>
                <div v-if="scrods === 4">
                  <div class="flex">
                    <div class="mr-2">
                      <img src="@/assets/icon/ic_city_light.svg" />
                    </div>
                    <span class="font-describe">{{
                      scope.data.profiles.jobTitle
                    }}</span>
                  </div>
                  <div class="flex">
                    <div class="mr-2">
                      <img src="@/assets/icon/ic_location_dark.svg" alt="" />
                    </div>
                    <span class="font-describe">{{
                      scope.data.profiles.school
                    }}</span>
                  </div>
                </div>
                <div v-if="scrods === 5">
                  <span
                    v-for="(item, index) in bingInterests(scope.data.profiles)"
                    :key="index"
                  >
                    <button class="item-home">{{ item }}</button>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="flex w-30 justify-end items-end cursor-pointer"
              @click="onClickShowDetailUser(scope.data)"
            >
              <i class="fa-solid fa-circle-info text-2xl"></i>
            </div>
          </div>
        </div>
        <div class="w-full flex absolute top-0 opacity-0 h-4/6 nextBg">
          <div
            class="w-2/4 bg-slate-500"
            @click="
              nextImageLeft(scope.data.profiles.avatars, scope.data.profiles)
            "
          ></div>
          <div
            class="w-2/4 bg-orange-200"
            @click="
              nextImageRight(scope.data.profiles.avatars, scope.data.profiles)
            "
          ></div>
        </div>
      </template>

      <div class="like-pointer icon-tinder" slot="like">LIKE</div>
      <div class="nope-pointer icon-tinder" slot="nope">NOPE</div>
      <div class="super-pointers icon-tinder" slot="super">SUPER</div>
    </Tinder>

    <div
      v-if="isLoadData"
      class="w-full h-full flex justify-center items-center"
    >
      <LoadApp :urlImage="icUrlApp" :codeColor="colorApp"></LoadApp>
    </div>
    <div
      class="absolute w-full bottom-0 left-0"
      v-bind:class="{ 'pointer-event': isPointer }"
    >
      <div class="btns">
        <div class="bh-odd justify-center flex items-center">
          <img src="@/assets/icon/bt_back.svg" @click="decide('rewind')" />
        </div>
        <div class="bh-even justify-center flex items-center">
          <img
            src="@/assets/icon/bt_nope.svg"
            @click="decide('nope')"
            v-bind:class="{ 'transform-hover': isHoverNope }"
          />
        </div>
        <div class="bh-odd justify-center flex items-center">
          <img
            src="@/assets/icon/bt_super_like.svg"
            @click="decide('super')"
            v-bind:class="{ 'transform-hover': isHoverSuper }"
          />
        </div>
        <div class="bh-even justify-center flex items-center">
          <img
            src="@/assets/icon/bt_like.svg"
            @click="decide('like')"
            v-bind:class="{ 'transform-hover': isHoverLike }"
          />
        </div>
        <div class="bh-odd justify-center flex items-center">
          <div
            v-if="isProgress === true"
            class="circular-progress"
            ref="progressBar"
          >
            <div class="value-container">
              <img src="@/assets/image-dating/lightning.svg" alt="" />
            </div>
            <MoveBoost></MoveBoost>
          </div>
          <img src="@/assets/icon/bt_boost.svg" @click="decide('help')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoveBoost from "../../bh-element-ui/animation/move-boost";
// import MoveSupperLike from "../../bh-element-ui/animation/move-supper-like";
import LoadApp from "../../layout/loading/load-app";
import Tinder from "vue-tinder";
import functionValidate from "../../../middleware/validate.js";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "view-swipe",
  components: {
    MoveBoost,
    // MoveSupperLike,
    LoadApp,
    Tinder,
  },
  data() {
    return {
      isDragging: false, // Biến cờ để kiểm tra xem phần tử có đang được kéo hay không
      isClickAllowed: true, // Biến cờ để kiểm tra xem sự kiện click có được phép hay không
      queue: [],
      isShowFormMatch: false,
      offset: 0,
      history: [],
      isShowDetail: false,
      isActiveImag: true,
      nameTinder: "",
      idImage: "",
      isPointer: true,
      isPointerNext: true,
      imageActive: 0,
      isAnimating: false,
      isProgressBoost: true,
      truc_x: 0,
      truc_y: 0,
      isHoverLike: false,
      isHoverNope: false,
      isHoverSuper: false,
      icUrlApp: require("@/assets/icon/ic_icon_app.svg"),
      colorApp: "#FF828A",
      bgColorApp: "linear-gradient(#FE4E58,#FD757F)",
      users: [],
      isProgress: false,

      // hiệu ứng quay tròn
      startTime: 0,
      progressValue: 0,
      progressEndValue: 100,
      speed: 100,

      animate2: false,
      animate1: false,

      scrods: 0,
    };
  },

  props: ["isLoadData", "listUserFilter"],

  computed: {
    valueKi() {
      if (localStorage.unit === "mi") {
        return "mi";
      }
      return "km";
    },
    timeBoost() {
      const isBoostParam = this.$store.state.homeModule.isBoost;
      if (Object.keys(isBoostParam).length !== 0) {
        const startTime = new Date(isBoostParam.startTime).getTime();
        const endTime = new Date(isBoostParam.endTime).getTime();

        const timeDiffInSeconds = (endTime - startTime) / 1000; // Chênh lệch giữa hai thời điểm tính bằng giây

        console.log(timeDiffInSeconds); // Kết quả
        return timeDiffInSeconds;
      }
      return 1000;
    },

    listDataUser: {
      get() {
        return this.listUserFilter ? this.listUserFilter : this.users;
      },
      set(newData) {
        this.users = newData;
      },
    },
  },

  methods: {
    ...mapMutations([
      "setUrlNameAvatarUser",
      "setLeftRightAvatar",
      "setDetailUserProfile",
      "setDataUserMatch",
      "setIsValueReport",
    ]),

    ...mapActions([
      "postNopeUser",
      "postLikeUser",
      "postBackUser",
      "postSupperLikeUser",
      "postBoostUser",
    ]),

    onMouseDow(event) {
      this.truc_x = event.clientX;
      this.truc_y = event.clientY;
      document.addEventListener("mousemove", this.moveElement);
      if (event.target.tagName === "IMG") {
        return;
      }
      this.isPointer = true;
      this.isPointerNext = false;

      this.isClickAllowed = false;
    },
    onMouseUp() {
      document.removeEventListener("mousemove", this.moveElement);
      this.isHoverLike = false;
      this.isHoverNope = false;
      this.isHoverSuper = false;
      this.isPointer = false;
      this.isPointerNext = true;

      this.isDragging = true;
      this.isClickAllowed = true;
    },

    moveElement(event) {
      if (this.isPointer) {
        if (event.clientX > this.truc_x + 50) {
          this.isHoverLike = true;
          this.isHoverNope = false;
          this.isHoverSuper = false;
          console.log("right");
        } else if (event.clientX < this.truc_x - 50) {
          this.isHoverLike = false;
          this.isHoverNope = true;
          this.isHoverSuper = false;
          console.log("left");
        } else if (event.clientY < this.truc_y - 50) {
          this.isHoverLike = false;
          this.isHoverNope = false;
          this.isHoverSuper = true;
          console.log("up");
        } else {
          this.isHoverLike = false;
          this.isHoverNope = false;
          this.isHoverSuper = false;
        }
      }
    },

    // Thông tin cơ bản
    bingBasicInformation(val) {
      const zodiacValue = val.zodiac;
      const familyFlanValue = val.familyFlan;
      const educationValue = val.education;
      const covidVaccineValue = val.covidVaccine;
      const personalityValue = val.personality;
      const communicationTypeValue = val.communicationType;
      const loveStyleValue = val.loveStyle;
      const informationBasic =
        this.$store.state.commonModule.listInformationBasic;
      let resultData = [];
      if (zodiacValue) {
        const findData = informationBasic.zodiacs.find(
          (x) => x.code === zodiacValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (familyFlanValue) {
        const findData = informationBasic.familyPlans.find(
          (x) => x.code === familyFlanValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (educationValue) {
        const findData = informationBasic.educations.find(
          (x) => x.code === educationValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (covidVaccineValue) {
        const findData = informationBasic.covidVaccines.find(
          (x) => x.code === covidVaccineValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (personalityValue) {
        const findData = informationBasic.personalities.find(
          (x) => x.code === personalityValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (communicationTypeValue) {
        const findData = informationBasic.communicationStyles.find(
          (x) => x.code === communicationTypeValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (loveStyleValue) {
        const findData = informationBasic.loveStyles.find(
          (x) => x.code === loveStyleValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      return resultData;
    },

    // Phong cách sống
    bingLifeStyleStatic(val) {
      const petValue = val.pet;
      const drinkingValue = val.drinking;
      const smokingValue = val.smoking;
      const workoutValue = val.workout;
      const dietaryPreferenceValue = val.dietaryPreference;
      const socialMediaValue = val.socialMedia;
      const sleepingHabitValue = val.sleepingHabit;
      const lifeStyleStatic =
        this.$store.state.commonModule.listLifeStyleStatic;
      let resultData = [];
      if (petValue) {
        const findData = lifeStyleStatic.pets.find((x) => x.code === petValue);
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (drinkingValue) {
        const findData = lifeStyleStatic.drinkings.find(
          (x) => x.code === drinkingValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (smokingValue) {
        const findData = lifeStyleStatic.smokings.find(
          (x) => x.code === smokingValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (workoutValue) {
        const findData = lifeStyleStatic.workouts.find(
          (x) => x.code === workoutValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (dietaryPreferenceValue) {
        const findData = lifeStyleStatic.foodPreferences.find(
          (x) => x.code === dietaryPreferenceValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (socialMediaValue) {
        const findData = lifeStyleStatic.socials.find(
          (x) => x.code === socialMediaValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      if (sleepingHabitValue) {
        const findData = lifeStyleStatic.sleepingStyles.find(
          (x) => x.code === sleepingHabitValue
        );
        if (findData) {
          resultData.push(findData.value);
        }
      }
      return resultData;
    },

    bingInterests(val) {
      const interestDefaults =
        this.$store.state.commonModule.listLifeStyleSingle;
      const interests = val.interests;
      const resultData = [];
      for (let index = 0; index < interests.length; index++) {
        const element = interests[index];

        const findData = interestDefaults.interests.find(
          (x) => x.code === element
        );

        if (findData) {
          resultData.push(findData.value);
        }
      }

      return resultData;
    },

    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },

    bindingLocation(val) {
      if (localStorage.unit === "mi") {
        if (val === undefined) {
          return 1;
        } else {
          const dataMi = functionValidate.locationKmToMi(val);
          return dataMi;
        }
      } else {
        if ((parseInt(val) === 0) | (val === undefined)) {
          return 1;
        } else {
          return parseInt(val.toFixed(0));
        }
      }
    },

    bindingDistance(val) {
      if ((parseInt(val) === 0) | (val === undefined)) {
        return 1;
      } else {
        return parseInt(val.toFixed(0));
      }
    },

    onClickNopeDetail(value) {
      this.isShowDetail = value;
    },
    nextImageLeft(value, data) {
      console.log(data);
      debugger;
      if (this.isDragging) {
        this.isPointerNext = true;
        if (this.imageActive !== 0) {
          this.imageActive = this.imageActive - 1;

          if (this.imageActive === 0) {
            if (data.about.length !== 0) {
              this.scrods = this.scrods - 1;
            } else {
              const basic = this.bingBasicInformation(data);
              if (basic.length !== 0) {
                this.scrods = this.scrods + 0;
              }
            }
          }
          if (this.imageActive === 1) {
            const basic = this.bingBasicInformation(data);
            if (basic.length !== 0) {
              if (this.scrods === 3) {
                this.scrods = this.scrods - 2;
              } else {
                this.scrods = this.scrods - 1;
              }
            } else {
              const styleStatic = this.bingLifeStyleStatic(data);
              if (styleStatic.length !== 0) {
                this.scrods = this.scrods - 1;
              }
            }
          }
          if (this.imageActive === 2) {
            const styleStatic = this.bingLifeStyleStatic(data);
            if (styleStatic.length !== 0) {
              this.scrods = this.scrods - 1;
            } else {
              const styleStatic = this.bingLifeStyleStatic(data);
              if (styleStatic.length !== 0) {
                this.scrods = this.scrods + 0;
              }
            }
          }
          if (this.imageActive === 3) {
            const styleStatic = this.bingLifeStyleStatic(data);
            if (styleStatic.length !== 0) {
              if (this.scrods === 5) {
                this.scrods = this.scrods - 2;
              } else {
                this.scrods = this.scrods - 1;
              }
            } else {
              if (data.jobTitle.length !== 0 || data.school.length !== 0) {
                this.scrods = this.scrods + 0;
              }
            }
          }
          if (this.imageActive === 4) {
            if (data.jobTitle.length !== 0 || data.school.length !== 0) {
              this.scrods = this.scrods - 1;
            } else {
              const styleStatic = this.bingInterests(data);
              if (styleStatic.length !== 0) {
                this.scrods = this.scrods + 0;
              }
            }
          }
          if (this.imageActive === 5) {
            const styleStatic = this.bingInterests(data);
            if (styleStatic.length !== 0) {
              this.scrods = this.scrods - 1;
            }
          }

          if (this.imageActive < value.length) {
            document
              .getElementById(`avatar_` + parseInt(this.imageActive + 1))
              .classList.remove("active-image");
            this.idImage = value[this.imageActive];
            document
              .getElementById(`avatar_` + parseInt(this.imageActive))
              .classList.add("active-image");
          }

          this.isActiveImag = false;
        } else {
          console.log("end");
          this.animate1 = true;
          setTimeout(() => {
            this.animate1 = false;
          }, 200);
        }
      }
    },

    nextImageRight(value, data) {
      debugger;
      if (this.isDragging) {
        this.isPointerNext = true;

        this.imageActive = this.imageActive + 1;
        if (this.imageActive === 1) {
          if (data.about.length !== 0) {
            this.scrods = this.scrods + 1;
          } else {
            const basic = this.bingBasicInformation(data);
            if (basic.length !== 0) {
              this.scrods = this.scrods + 2;
            }
          }
        }
        if (this.imageActive === 2) {
          const basic = this.bingBasicInformation(data);
          if (basic.length !== 0) {
            this.scrods = this.scrods + 1;
          } else {
            const styleStatic = this.bingLifeStyleStatic(data);
            if (styleStatic.length !== 0) {
              this.scrods = this.scrods + 2;
            }
          }
        }
        if (this.imageActive === 3) {
          const styleStatic = this.bingLifeStyleStatic(data);
          if (styleStatic.length !== 0) {
            this.scrods = this.scrods + 1;
          } else {
            if (data.jobTitle.length !== 0 || data.school.length !== 0) {
              this.scrods = this.scrods + 2;
            }
          }
        }
        if (this.imageActive === 4) {
          if (data.jobTitle.length !== 0 || data.school.length !== 0) {
            this.scrods = this.scrods + 1;
          } else {
            const styleStatic = this.bingInterests(data);
            if (styleStatic.length !== 0) {
              this.scrods = this.scrods + 2;
            }
          }
        }
        if (this.imageActive === 5) {
          const styleStatic = this.bingInterests(data);
          if (styleStatic.length !== 0) {
            if (this.scrods !== 5) {
              this.scrods = this.scrods + 1;
            }
          }
        }
        console.log(data);

        if (this.imageActive < value.length) {
          document
            .getElementById(`avatar_` + parseInt(this.imageActive - 1))
            .classList.remove("active-image");
          this.idImage = value[this.imageActive];
          document
            .getElementById(`avatar_` + parseInt(this.imageActive))
            .classList.add("active-image");
        } else {
          console.log("end");
          this.animate2 = true;
          setTimeout(() => {
            this.animate2 = false;
            // Thực hiện thêm ảnh mới hoặc xóa ảnh hiện tại tại đây
          }, 200);
          this.imageActive = this.imageActive - 1;
        }

        this.isActiveImag = false;
      }
    },

    onNopeUser(val) {
      console.log(val);
    },

    async onClickProgress() {
      const totalTime = this.timeBoost * 1000; // Thời gian trong milisecond, ở đây là 60 giây
      this.isProgress = !this.isProgress;
      // hàm quay tròn
      this.startTime = new Date().getTime();
      let progress = await setInterval(() => {
        let now = new Date().getTime();
        let timeElapsed = now - this.startTime;
        let percentComplete = (timeElapsed / totalTime) * 100;

        if (percentComplete >= 100) {
          percentComplete = 100;
          clearInterval(progress);
          // alert("Time is up!");
          this.isProgress = false;
        }

        this.progressValue = Math.floor(
          (percentComplete / 100) * this.progressEndValue
        );

        this.$refs.progressBar.style.background = `conic-gradient(
            #FD656C ${percentComplete * 3.6}deg,
            #cadcff ${percentComplete * 3.6}deg
        )`;
      }, this.speed);
    },

    onClickShowDetailUser(value) {
      console.log(value);
      this.setDetailUserProfile(value);

      this.$emit("onShowDetailUser", true);
    },
    async onSubmit(value) {
      this.setUrlNameAvatarUser("");
      this.isActiveImag = true;

      if (value.type.toString() === "nope") {
        console.log("Nope");

        await this.postNopeUser({
          interactorId: value.key,
        });

        if (this.history.length === 0) {
          this.history.push(value.item);
        } else {
          this.history[0] = { ...this.history[0], ...value.item };
        }
        this.imageActive = 0;
      }
      if (value.type.toString() === "super") {
        // this.isAnimating = true;
        // setTimeout(() => {
        //   this.isAnimating = false;
        // }, 1200);

        if (this.history.length === 0) {
          this.history.push(value.item);
        } else {
          this.history[0] = { ...this.history[0], ...value.item };
        }

        const isSupperLikeValue = this.$store.state.homeModule.isSupperLike;
        if (isSupperLikeValue.isFreeRuntime) {
          // quẹt thoải mái
          await this.postSupperLikeUser({
            interactorId: value.key,
          });

          // match thành công hiện form match
          if (isSupperLikeValue.isMatched) {
            // this.setDataUserMatch(value.item);
            // this.$emit("onShowFormLikeYou", true);
          }

          this.imageActive = 0;
        } else {
          // Check giá trị likeRemaining>0
          if (isSupperLikeValue.superLikeRemaining > 0) {
            //  Được quẹt
            await this.postSupperLikeUser({
              interactorId: value.key,
            });

            if (isSupperLikeValue.isMatched) {
              //   Xử lý lưu giá trị cache
            }
          } else {
            // if (this.history.length) {
            //   this.$refs.tinder.rewind([this.history.pop()]);
            // }

            this.$nextTick(() => {
              this.$refs.tinder.rewind([this.history.pop()]);
            });

            // Hiển thị package
            this.$emit("onShowPackage", true);
          }
        }
        this.imageActive = 0;
      }

      if (value.type.toString() === "like") {
        console.log("like");
        if (this.history.length === 0) {
          this.history.push(value.item);
        } else {
          this.history[0] = { ...this.history[0], ...value.item };
        }
        this.imageActive = 0;
        // Check được quẹt hay ko?
        const isLikeValue = this.$store.state.homeModule.isLike;
        if (isLikeValue.isFreeRuntime) {
          // quẹt thoải mái
          await this.postLikeUser({
            interactorId: value.key,
          });

          // match thành công hiện form match
          if (isLikeValue.isMatched) {
            this.setDataUserMatch(value.item);
            this.$emit("onShowFormLikeYou", true);
          }

          this.imageActive = 0;
        } else {
          // Check giá trị likeRemaining>0
          if (isLikeValue.likeRemaining > 0) {
            //  Được quẹt
            await this.postLikeUser({
              interactorId: value.key,
            });

            if (isLikeValue.isMatched) {
              this.setDataUserMatch(value.item);
              this.$emit("onShowFormLikeYou", true);
            }
          } else {
            // Hiển thị package

            this.$emit("onShowPackage", true);

            this.$nextTick(() => {
              this.$refs.tinder.rewind([this.history.pop()]);
            });
          }
        }
      }
    },
    async decide(choice) {
      console.log(choice);
      if (choice === "rewind") {
        if (this.history.length) {
          this.postBackUser({
            interactorId: this.history[0]._id,
          });
          this.$refs.tinder.rewind([this.history.pop()]);
        }
      } else if (choice === "help") {
        await this.postBoostUser({ number: 1 });
        const isBoostParam = this.$store.state.homeModule.isBoost;

        if (Object.keys(isBoostParam).length === 0) {
          await this.$emit("onShowPackage", true);
        } else {
          await this.onClickProgress();
        }
      } else {
        await this.$refs.tinder.decide(choice);
      }
    },
  },

  created() {
    // setTimeout(() => {
    //   this.isLoadData = false;
    // }, 2000);
  },
  mounted() {
    this.$nextTick(() => {
      const isNopeReportValue = this.$store.state.homeModule.isNopeReport;
      if (isNopeReportValue) {
        this.decide("nope");
        setTimeout(() => {
          this.setIsValueReport(false);
        }, 1000);
      }
    });
  },
};
</script>

<style lang="scss">
/* xoay ảnh khi hết ảnh của 1 người dùng */
.animate2 {
  animation: shake 0.2s ease-in-out;
  transform-style: preserve-3d;
}

@keyframes shake {
  0% {
    transform: perspective(200px) rotateY(0);
  }
  50% {
    transform: perspective(200px) rotateY(1deg);
  }
  100% {
    transform: perspective(200px) rotateY(0);
  }
}
.animate1 {
  animation: shake1 0.2s ease-in-out;
  transform-style: preserve-3d;
}

@keyframes shake1 {
  0% {
    transform: perspective(200px) rotateY(0);
  }
  50% {
    transform: perspective(200px) rotateY(-1deg);
  }
  100% {
    transform: perspective(200px) rotateY(0);
  }
}
// css
.circular-progress {
  position: absolute;
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 75px;
  height: 75px;
  z-index: 10;
}
.circular-progress:before {
  content: "";
  position: absolute;
  height: 84%;
  width: 84%;
  background-color: #ffffff;
  border-radius: 50%;
}
.value-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
.value-container img {
  width: 60px;
  height: 60px;
}

.vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  width: calc(100% - 20px);
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.icon-tinder {
  font-size: 50px;
  font-weight: 600;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  padding-left: 16px;
  padding-right: 16px;
}

.like-pointer {
  top: 6rem;
  right: 19rem;
  color: #f6a800;
  border: 7px solid #f6a800;
  transform: rotate(-45deg);
}

.nope-pointer {
  top: 76px;
  left: 15rem;
  transform: rotate(45deg);
  color: #39685a;
  border: 7px solid #39685a;
}

.super-pointers {
  bottom: 80px;
  left: 7rem;
  right: 7rem;
  color: #00ba83;
  border: 7px solid #00ba83;
}

.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
}

.home-page {
  background-color: #382e41;
}
.home-page::-webkit-scrollbar {
  display: none;
}

.body-page {
  background-repeat: no-repeat;
  background-size: cover;
}
.title-boy {
  grid-template-columns: 5fr 1fr;
}

.bt-img {
  width: 70px;
}

.bt-option {
  grid-template-columns: auto auto auto auto auto;
  gap: 35px;
}

.title-page {
  background-color: #181c274f;
  background-image: linear-gradient(to top, #1e23334a, #230f1f7d);
  background-attachment: scroll;
  height: 24%;
}

.close-infor {
  position: absolute;
  top: -25px;
  right: 13px;
}
.like-count {
  position: absolute;
  top: 80px;
  right: 9px;
}

.title-body {
  border-bottom: 1px solid #373e50;
}

.bt-about {
  border: 1px solid white;
}

.grid-temlp {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-anthem {
  grid-template-columns: 3fr 1fr;
}

.tinder-card {
  width: 100% !important;
  background-color: #382e41 !important ;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 9%,
    rgba(255, 255, 255, 0) 41%
  );
}

.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  padding-left: 20px;
  z-index: 9;
  padding-right: 20px;
}

.btns img {
  margin-right: 0px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.active-image {
  background-color: white !important;
}

.no-active {
  background-color: #ffffff8f;
}

.h-complete {
  position: absolute;
  bottom: 0px;
  padding: 21px;
  font-size: 26px;
}

.pointer-event {
  pointer-events: none;
}
.transform-hover {
  transform: scale(1.1);
}

.item-home {
  border: 1px solid #ccd2e266;
  padding: 0px 10px 0px 10px;
  margin: 3px;
  background-color: #ccd2e266;
  border-radius: 14px;
}

.online-status {
  width: 12px;
  background-color: yellow;
  height: 12px;
  border-radius: 50%;
}
.online-off {
  width: 8px;
  background-color: yellow;
  height: 8px;
  border-radius: 50%;
}

.text-age {
  font-size: 22px;
  padding-top: 3px;
}
</style>
