import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const saveComment = (data = {}, idArticle) => {
	let body = data;
	console.log("DI SAVE:", idArticle)
	const { getToken } = tokenManager();
	const token = getToken();
	
	return axios.post(`${environment.rootApi}/call/comment/save`, body,
	{
		params: { token, idArticle },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default saveComment
