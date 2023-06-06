const functionValidate = {
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  },

  /**
   * Hàm convert từ dateTime to age
   * @param {*} dob
   * @returns
   */
  calculatAge(dob) {
    const dateNew = new Date(dob);
    var diff_ms = Date.now() - dateNew.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  },

  /**
   * Chuyển đôi sang mi
   * @param {*} value
   * @returns
   */
  locationKmToMi(value) {
    const mi = value / 1.609344;
    return Math.round(mi);
  },

  /**
   * Hàm convert lat/long  to location km
   * @param {*} latAdmin
   * @param {*} longAdmin
   * @param {*} latUser
   * @param {*} longUser
   * @param {*} unit
   * @returns
   */
  convertDistance(latAdmin, longAdmin, latUser, longUser, unit) {
    var radlatAdmin = (Math.PI * latAdmin) / 180;
    var radlatUser = (Math.PI * latUser) / 180;
    var theta = longAdmin - longUser;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlatAdmin) * Math.sin(radlatUser) +
      Math.cos(radlatAdmin) * Math.cos(radlatUser) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist;
  },

  /**
   * Format code chuyển đổi chuỗi
   * @param {*} string
   * @returns
   */
  titleCase(string) {
    //1. Tách các từ, cụm từ trong chuỗi ban đầu
    let sentence = string.toLowerCase().split(" ");

    //2. Tạo vòng lặp và viết hoa chữ cái đầu tiên của các từ, cụm từ trên
    for (var i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    //3. Nối các từ, cụm từ đã xử lý ở trên và trả về kết quả
    return sentence.join(" ");
  },

  /**
   * Viết hoa chữ cái đầu
   * @param {*} string
   * @returns
   */
  toUpperCaseString(string) {
    const capitalizedStr = string.charAt(0).toUpperCase() + string.slice(1);

    return capitalizedStr;
  },
};

export default functionValidate;
