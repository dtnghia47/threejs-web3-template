// import axios from "axios";

export const getData = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(['api response 1', ['api response 2']]);
    } else {
      reject({})
    }
  })
}