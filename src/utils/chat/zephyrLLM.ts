import axios from "axios";

export async function zephyrQuery(data: JSON) {
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-alpha",
    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.data;
  return result;
}
