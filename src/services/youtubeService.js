import {url} from "../constant/apiUrl";
import Api from "./api";
import autobind from 'autobind-decorator';

@autobind
class YoutubeService extends Api {
  URL = url.youtube;

  constructor() {
    super();
    this.api = new Api();

  }

  @autobind
  addProduct({name, price, description}) {
    const param = {
      name,
      price, 
      description
    };

    this.ajax = this.ajax.bind(this);
    return this.ajax("post", this.URL, "/api/products/add", param).then(res => {
      console.log(res.data);
    })
  }

  @autobind
  getProducts() {
    this.ajax = this.ajax.bind(this);

    return this.ajax("get", this.URL, "/api/products/").then(res => {
      console.log(res);
    })
  }

}

export default new YoutubeService();

