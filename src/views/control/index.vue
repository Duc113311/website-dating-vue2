<!-- <template>
  <div>
    <div>Control</div>
    <div>
      <video ref="video" width="640" height="480" autoplay></video>
      <canvas ref="canvas" width="640" height="480"></canvas>
    </div>
  </div>
</template>

<script>
import * as faceapi from "face-api.js";

export default {
  name: "control-page",

  async mounted() {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    ]);

    const videoElement = this.$refs.video;
    const canvasElement = this.$refs.canvas;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoElement.srcObject = stream;

        videoElement.addEventListener("play", () => {
          const canvasContext = canvasElement.getContext("2d");
          const displaySize = {
            width: videoElement.width,
            height: videoElement.height,
          };
          faceapi.matchDimensions(canvasElement, displaySize);

          const processFrame = async () => {
            const detections = await faceapi
              .detectAllFaces(
                videoElement,
                new faceapi.TinyFaceDetectorOptions()
              )
              .withFaceLandmarks()
              .withFaceExpressions();

            canvasContext.clearRect(
              0,
              0,
              canvasElement.width,
              canvasElement.height
            );
            faceapi.draw.drawDetections(canvasElement, detections);
            faceapi.draw.drawFaceLandmarks(canvasElement, detections);
            faceapi.draw.drawFaceExpressions(canvasElement, detections);

            requestAnimationFrame(processFrame);
          };

          processFrame();
        });
      })
      .catch((error) => {
        console.log("Could not access the camera: ", error);
      });
  },

  methods: {
    startFaceDetection() {
      const videoElement = this.$refs.video;
      const canvasElement = this.$refs.canvas;
      const canvasContext = canvasElement.getContext("2d");

      const processFrame = () => {
        canvasContext.drawImage(
          videoElement,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        );

        // Thực hiện face detection và vẽ khung xác thực
        // Sử dụng các API của OpenCV.js hoặc thư viện xử lý khuôn mặt khác ở đây

        requestAnimationFrame(processFrame);
      };

      // Bắt đầu xử lý frame
      processFrame();
    },
  },
};
</script>
<style lang="css"></style> -->
<template>
  <div>dd</div>
</template>

<script>
export default {
  name: "control-page",
};
</script>

<style></style>
