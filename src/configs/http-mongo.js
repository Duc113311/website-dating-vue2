import axios from "axios";
export const http_mongo = axios.create({
  baseURL: `https://api.heartlinkdating.com/`,
  headers: {
    "Content-Type": "application/json",
    "Content-Transfer-Encoding": "bachaxPPsb9SCaz7TVJsda7cCD5sshsoft",
    Authorization: `Bearer ${localStorage.getItem("tokenId")}`,
  },
  withCredentials: false,
});

export function updateAcceptLanguage() {
  const language = localStorage.getItem("language") || "en"; // Lấy giá trị ngôn ngữ từ localStorage
  http_mongo.defaults.headers["Accept-Language"] = language; // Cập nhật giá trị trong header
}

// Gọi hàm để cập nhật giá trị 'Accept-Language' lần đầu tiên khi ứng dụng khởi chạy
updateAcceptLanguage();
