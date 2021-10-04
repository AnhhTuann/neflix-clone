import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase.prod";
export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  // lỗi nằm ở lúc kiểm tra user có đăng nhập hay chưa
  // ở component này
  // giờ  hàm này nó sẽ kiểm tra xem user có đăng nhập hay chưa
  // nếu đã đăng nhập rồi thì nó sẽ đưa thông tin đó vào trong localStorage trên máy ông.
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      //cái onAuthStateChanged dòng này là hàm của firebase, nó luôn luôn chạy để lắng nghe sự kiến đăng xuất, đăng nhập của user. sau đó tùy vào đăng nhập hay chưa mà thực hiện hàm if bên dưới
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser)); // dòng này nó đưa vào local storage nè
        setUser(authUser); //sau đó nó đưa thông tin đăng nhập gồm displayName,avatar,id,... vào biến user rồi mình sẽ dùng biến đó toàn app mình, cũng dùng nó để kiểm tra đăng nhập luôn.
      } else {
        localStorage.removeItem("authUser"); //hàm này nếu firebase báo là tài khoản ô đã đăng xuất thì nó sẽ xóa user trong localstorage
        setUser(null);
      }
    });
    return () => listener();
  }, []);
  //vậy giờ mình xem nếu ko đăng nhập nó sẽ nhảy qua bên nào nha Tuấn, bằng cách log
  // hoạt động ok !! không lỗi ở 2 hàm  if trên

  //tới dòng cuôi cùng !!! ô truyền user ra ngoài để app sử dụng user này
  //SAI Ở ĐÂY
  //DO ÔNG BỌC NÓ VÔ 1 OBJECT,đáng lẽ ko nên có 2 ngoặc {} giờ thử coi nếu có ngoặc và k ngoặc nha coi khác nhau gì

  // h sửa lại chỉ cần bỏ ngoặc này
  return user;
}
