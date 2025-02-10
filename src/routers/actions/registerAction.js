import { account } from "../../lib/appwrite";
import generateID from "../../utils/generateID";

const registerAction = async ({ request }) => {
  const formData = await request.formData();

  try {
    await account.create(
      generateID(),
      formData.get("email"),
      formData.get("password"),
      formData.get("name")
    );
  } catch (err) {
    return {
      message: err.message,
    };
  }

  return null;
};

export default registerAction;
