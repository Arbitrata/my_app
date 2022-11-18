import { BiBorderAll, BiCodeAlt, BiGitBranch } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import Cards from "../common/Cards";
import SkillCircles from "../common/SkillCircles";
import Title from "../common/Title";

const Skills = () => {
  return (
    <div id="my_app/skills" className="h-fit bg-my-lightgray w-screen block pb-10 md:pt-0  max-w-[1400px]">
      <div className="w-full h-[100px] pt-4 md:pl-[190px]">
        <Title title={"Skills"} />
      </div>

      <div className="w-full h-fit mt-6">
        <div className=" block md:ml-[16.5%] ml-[10%] md:mr-[17%]">
          <div className="md:flex block h-fit justify-start items-center">
            <Cards
              skillsCard={true}
              title={"Technologies"}
              text="Javascript,  Html5,  node js, react js, Java, postgreSQl,"
            />
            <SkillCircles left={true} icon={<BiCodeAlt size={40} />} />
          </div>

          <div className="md:flex block justify-end md:mt-[-80px] mt-6 items-center">
            <SkillCircles right={true} icon={<FiFigma size={35} />} />
            <Cards
              skillsCard={true}
              title={"Designs"}
              text="Figma, Miro, Adobe, Photoshop"
            />
          </div>

          <div className="md:flex block h-fit md:mt-[-80px] mt-14 items-center">
            <Cards
              skillsCard={true}
              title={"Control version"}
              text="Git, Github"
            />
            <SkillCircles left={true} icon={<BiGitBranch size={35} />} />
          </div>

          <div className="md:flex block h-fit justify-end md:mt-[-80px] mt-14 items-center">
            <SkillCircles right={true} icon={<BiBorderAll size={35} />} />
            <Cards skillsCard={true}  title={"project management"}
              text="Jira, Agile methodology, Slack," />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
