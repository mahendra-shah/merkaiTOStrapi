const axios = require("axios");
require("dotenv").config();

const BEARER_TOKEN = '';
const MERAKI_JWT = '';
const token = '';

const tableName = "tableName";
const assesId = 344;

const postBaseURL = "putStrapiBaseURL";
const getBaseURL = "putMerakiBaseURL";
const getExerciseBaseURL = "putStrapiServerBaseURL";

const headers = {
	Authorization: `Bearer ${token}`,
};

const getExerciseDetails = async (assesId) => {
	try {
		const response = await axios.get(
			`${getExerciseBaseURL}/assessment/allDetailedAssessments/${assesId}`,
			{ headers }
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

const merakiAssesConv = async (assesId) => {
	const coData = await axios.get(`${getBaseURL}/assessment/${assesId}`, {
		headers: {
			"version-code": 5050505,
			Authorization: `Bearer ${MERAKI_JWT}`,
		},
	});
	const allAssesments = coData.data;
	const assessmentDetails = await getExerciseDetails(assesId);
	const strapiFormat = {
		content: {
			time: Date.now(),
			blocks: allAssesments,
		},
		version: "2.23.2",
	};
	const data = {
		data: {
			name: assessmentDetails.name,
			content: strapiFormat,
			course_id: assessmentDetails.course_id,
			exercise_id: assessmentDetails.exercise_id,
		},
	};
	// const res = await postData(data);
	// console.log(assesId,"-->",res.data.data.id,"assesment id");
};

const postData = async (data) => {
	const res = await axios.post(`${postBaseURL}/${tableName}`, data, {
		headers: {
			Authorization: `Bearer ${BEARER_TOKEN}`,
		},
	});
	return res;
};

merakiAssesConv(assesId);
