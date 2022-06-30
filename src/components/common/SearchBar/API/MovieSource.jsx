/* http://www.omdbapi.com/?i=tt3896198&apikey=fdd89297 */

import axios from "axios";


export default axios.create ({
    baseURL: 'http://www.omdbapi.com/'
})