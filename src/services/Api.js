import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://votesserver.herokuapp.com/'
  })
}
