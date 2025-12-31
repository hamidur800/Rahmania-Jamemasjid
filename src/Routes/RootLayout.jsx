import { createBrowserRouter } from "react-router";
import Rootlayout from "../Rootlayout/Rootlayout";
import WelcomeWindo from "../Pages/Home/WelcomeWindo/WelcomeWindo";
import Login from "../Pages/Auth/Login/Login";
import Registation from "../Pages/Auth/Registation/Registation";
import MembersList from "../Pages/MembersList/MembersList";
import ManthlyPay from "../Pages/ManthlyPay/ManthlyPay";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        index: true,
        Component: WelcomeWindo,
      },
      {
        path: "MembersList",
        Component: MembersList,
      },
      {
        path: "ManthlyPay",
        Component: ManthlyPay,
      },
      {
        path: "ContactUs",
        Component: ContactUs,
      },
    ],
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Registation",
    element: <Registation />,
  },
]);
