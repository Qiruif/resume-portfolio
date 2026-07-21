import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import CyploreProject from "./pages/CyploreProject";
import NioProject from "./pages/NioProject";
import YutongProject from "./pages/YutongProject";
import "./styles.css";

const path = window.location.pathname.replace(/\/$/, "") || "/";

let Page = Home;
let title = "范麒瑞｜机器人产品方向实习生";

if (path.endsWith("/projects/cyplore")) {
  Page = CyploreProject;
  title = "CYPLORE 智能骑行产品体系｜范麒瑞";
} else if (path.endsWith("/projects/nio")) {
  Page = NioProject;
  title = "蔚来机器人系统｜范麒瑞";
} else if (path.endsWith("/projects/yutong")) {
  Page = YutongProject;
  title = "宇通客车悬架设计｜范麒瑞";
}

document.title = title;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
