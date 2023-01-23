const getNotyfication = () => {
  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  fetch(
    "https://maker.ifttt.com/trigger/CV/with/key/bjZIEZvbsAn21Uwt9VxXPo",
    requestOptions
  );
};

export default getNotyfication;
