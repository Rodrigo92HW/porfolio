import Banner from "./sections/Banner";
import PersonalInfo from "./sections/home/PersonalInfo";
import ProjectMain from "./sections/home/ProjectMain";
import Skills from "./sections/home/Skills";

export default function HomePage() {
    return (
        <>
            <Banner />
            <div className="hr-container">
                <hr />
            </div>
            <PersonalInfo />
            <div className="hr-container">
                <hr />
            </div>
            <Skills />
            <div className="hr-container">
                <hr />
            </div>
            <ProjectMain />
            <div className="hr-container">
                <hr />
            </div>
        </>
    )
}
