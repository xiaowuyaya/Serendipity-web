import Axios from "axios";

const serverUrl = "http://121.4.113.152:7001"

export function post(path, data){
  return Axios.post(
    `${serverUrl}${path}`,
    data,
    {
      headers: { authorization: "Y2hlbmNoZW5jaGVuLHhpYW93dXlheWEsZWlrbw==" },
    }
  )
}

export function get(path){
  return Axios.get(
    `${serverUrl}${path}`,
    {
      headers: { authorization: "Y2hlbmNoZW5jaGVuLHhpYW93dXlheWEsZWlrbw==" },
    }
  )
}

