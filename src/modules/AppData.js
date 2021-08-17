// import axios from "axios";
import app_data from "../data/fixtures/app_data.json";
import store from "../state/store/configureStore";

const AppData = {
  async read() {
    try {
      // const response = await axios.get("/app_data");
      //store.dispatch({ type: "SET_APP_DATA", payload: response.data.app_data });
      store.dispatch({ type: "SET_APP_DATA", payload: app_data.app_data });
    } catch (error) {
      store.dispatch({ type: "SET_LAYOUT_LOAD_ERROR" });
    }
  },
};

export default AppData;
