import Axios from 'axios';
import Presentages from './presentage.service';
import Salary2020 from './salary2020.service';


class Services {

  private axios = Axios;
  private baseUrl = "http://192.168.100.165:8080/pms_masterdata_api/api/";

  presentages: Presentages;
  salary2020: Salary2020;

  constructor() {
    this.presentages = new Presentages();
    this.salary2020 = new Salary2020();
    
  }

  get(path, data) {
    return new Promise((resolve, reject) => {
      path = this.baseUrl + path;
      //this.setHeader();
      this.axios
        .get(path, { params: data })
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }


  post(path, data, callback) {
    path = this.baseUrl + path;
    //this.setHeader();
    this.axios
      .post(path, data)
      .then(function (response) {
        callback(response.data, null);
      })
      .catch(function (error) {
        callback(null, error);
      });
  }

  // setHeader() {
  //   console.log("setHeader :", store.user.token);
  //   this.axios.defaults.headers.common['session-key'] = store.user.token;
  // }

};

const services = new Services();
export default services;
