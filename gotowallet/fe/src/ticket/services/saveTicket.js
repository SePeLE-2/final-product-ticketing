import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";

const saveTicket = (data) => {
	const { getToken } = tokenManager();
	const token = getToken();
	return axios.post(`${environment.rootApi}/call/ticket/save`, {
		...data,
		token
	}, {
		headers: {
			'Authorization': token,
		}
	}).catch((error) => {
		console.error(error);
		notifyError(error);
	})
}

export default saveTicket; 