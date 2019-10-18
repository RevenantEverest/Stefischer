import axios from 'axios';
const services = {};

services.sendEmail = (data) => {
    return axios({
        method: 'POST',
        url: 'https://formcarry.com/s/jmwJqRG3jGF',
        dataType: "jsonp",
        data: {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone_number: data.phone_number,
            message: data.message
        },
        headers: { "Accept": "application/json" }
    })
}

export default services;