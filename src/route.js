import Landing from "./container/Landing";
import Skills from "./container/Skills";
import Projects from "./container/Projects";
import Accomplishments from "./container/Accomplishments";
import WorkExperiences from "./container/WorkExperiences";
import Hobbies from "./container/Hobbies";

// For icons: https://ant.design/components/icon/
export default [
    {
        name: "Home",
        component: Landing,
        icon: "home",
        route: "/",
        exact: true
    },
    {
        name: "Skills",
        component: Skills,
        icon: "edit",
        route: "/skills",
        exact: false
    },
    {
        name: "Projects",
        component: Projects,
        icon: "folder",
        route: "/projects",
        exact: false
    },
    {
        name: "Accomplishments",
        component: Accomplishments,
        icon: "trophy",
        route: "/accomplishments",
        exact: false
    },
    {
        name: "WorkExperiences",
        component: WorkExperiences,
        icon: "profile",
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