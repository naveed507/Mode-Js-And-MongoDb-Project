import notifier from "node-notifier";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);
class toaster {
  static successMsg = (msg) => {
    return notifier.notify({
      title: "SUCCESS",
      message: msg,
      sound: false,
      icon: path.join(currentDirPath, "/public/images/logo.jpg"),
      appID: "\u{200B}",
    });
  };
  static errorMsg = (msg) => {
    return notifier.notify({
      title: "ERROR",
      message: msg,
      sound: false,
      icon: path.join(currentDirPath, "/public/images/logo.jpg"),
      appID: "\u{200B}",
    });
  };
}

export default toaster;
