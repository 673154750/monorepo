import axios from "axios";
import { reactive } from "vue";

export default function () {
  let dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_1912.jpg",
  ]);

  async function addDog() {
    // axios.get("https://dog.ceo/api/breed/pembroke/images/random").then(
    //   (response: any) => {
    //     // 成功回调
    //     console.log(response);
    //   },
    //   (error: any) => {
    //     // 失败回调
    //     console.log(error);
    //   }
    // );

    //  优化  await只能等到成功，如果失败了需要用try catch捕获
    try {
      let result = await axios.get(
        "https://dog.ceo/api/breed/pembroke/images/random"
      );
      console.log(result.data.message);
      dogList.push(result.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  //   向外部提供变量与方法
  return { dogList, addDog };
}
