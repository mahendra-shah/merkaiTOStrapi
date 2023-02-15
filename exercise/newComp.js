const conv = async () => {
  const coData = await axios.get(`${getBaseURL}/courses/${course_id}/exercises`, {
    headers: {
      'version-code': 345948,
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });
  console.log(coData.data)
}


conv();
// console.log(res)
