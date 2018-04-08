/**
 * GET请求
 **/
export const host = 'http://api.deepfull.com/'
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