import axios from "axios";
import React, { useState } from "react";

function Api({ url, method, body }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  function apiData() {
    setLoading(true);
    axios({
      url,
      method,
      body,
    })
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return [apiData, { loading, data, error }];
}

export default Api;
