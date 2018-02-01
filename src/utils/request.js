/**
 * GET请求
 **/
const host = 'http://192.168.0.77:8080/deepfull/api/'
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