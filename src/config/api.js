import request from "superagent";

const base = 'http://localhost:3001'

class API {
    post = (endpoint) => {
      return request.post(base + endpoint).retry();
    }
  
    get = (endpoint) => {
      return request.get(base + endpoint).retry();
    }
  
    put = (endpoint) => {
      return request.put(base + endpoint).retry();
    }
  
    base = () => {
      return base;
    }
  }
  
  export default new API();