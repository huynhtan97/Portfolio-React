import { AiFillHome, AiFillEdit, AiFillFolder, AiFillTrophy, AiFillProfile } from "react-icons/ai";

import Landing from "./container/Landing";
import Skills from "./container/Skills";
import Projects from "./container/Projects";
import Accomplishments from "./container/Accomplishments";
import WorkExperiences from "./container/WorkExperiences";
// import Hobbies from "./container/Hobbies";

// For icons: https://ant.design/components/icon/
export default [
    {
        name: "Home",
        component: Landing,
        Icon: AiFillHome,
        route: "/",
        exact: true
    },
    {
        name: "Skills",
        component: Skills,
        Icon: AiFillEdit,
        route: "/skills",
        exact: false
    },
    {
        name: "Projects",
        component: Projects,
        Icon: AiFillFolder,
        route: "/projects",
        exact: false
    },
    {
        name: "Accomplishments",
        component: Accomplishments,
        Icon: AiFillTrophy,
        route: "/accomplishments",
        exact: false
    },
    {
        name: "WorkExperiences",
        component: WorkExperiences,
        Icon: AiFillProfile,
        route: "/workexperiences",
        exact: false
    },
    // {
    //     name: "Hobbies",
    //     component: Hobbies,
    //     icon: "smile",
    //     route: "/hobbies",
    //     exact: false
    // },
]