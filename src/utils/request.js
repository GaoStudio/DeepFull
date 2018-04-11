/**
 * GET请求
 **/
export const host = 'http://localhost:8080/'
export function GET(url,callBackSuccess,callBackError){
    let uri = host+url;
    let options = {
        method:'GET',
        mode: "cors",
        header:{
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    fetch(uri,options).then((response) => response.json()).then((responseJson) => {
        callBackSuccess(responseJson);
    }).catch((error) => {
        callBackError(error);
    })
}