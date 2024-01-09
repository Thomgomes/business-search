import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ' + 'Syp1SYRXQubMrXyWTXdQNgTeic9Qg14pXBOPreI_Id7qlAnG_343KjpOP6QgqKe8_PXFnNH16Fdik5tbx3EVrt7sFpAmOF8S-Q0V0cnTb1x9SHCDJzrHfPxG9EyEZXYx'
    }
})