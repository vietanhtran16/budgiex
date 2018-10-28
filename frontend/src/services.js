import axios from "axios";

const apiUrl = "https://tfs51pnq0j.execute-api.ap-southeast-2.amazonaws.com/dev/";

const saveIncome = async (income) => {
    return await axios.post(`${apiUrl}save`, {
        profile: {
            income
        }
    }, {headers: {'Access-Control-Allow-Origin': '*'}});
};

export { saveIncome };