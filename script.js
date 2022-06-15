const btn = document.querySelector("#btn");
const h2 = document.querySelector("#advice");

const adviceGenerator = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const url = "https://api.adviceslip.com/advice";
    const res = await axios.get(url, config);
    const advice = res.data.slip.advice;
    return (h2.innerHTML = advice);
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", adviceGenerator);
