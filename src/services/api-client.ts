import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7d67eff5fd8544fdb3f2e2ccbb5f102a",
  },
});
