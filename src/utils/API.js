import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
    getUsers: function () {
        return new Promise((resolve, reject) => {
            axios
                .get("https://randomuser.me/api/?results=200&nat=us")
                .then(res => {
                    const results = res.data;
                    resolve(results);
                })
                .catch(err => reject(err));
        });
    }
};
