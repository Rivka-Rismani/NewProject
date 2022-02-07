import Response from '../assets/response .json';
export const getAllData = () => {

    const data = Response.results
    return data ? data : "error data not found"
}
export const setAllData = (data) => {
    debugger
    // Dummy reading

        // axios.post(`url`,data).then(response => {
        //     console.log(response)
        // }).catch(o => {
        //     console.error(o);
        // });
        console.log(data)
}




