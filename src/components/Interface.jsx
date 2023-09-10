

import {motion} from "framer-motion-3d"; 
import HTMLImage from "../assets/images/HTML5_logo_and_wordmark.svg.png"
import CSSImage from "../assets/images/CSS3_logo_and_wordmark.svg.png"
import JSImage from "../assets/images/Unofficial_JavaScript_logo_2.svg.png"
import NodeImage from "../assets/images/node-removebg-preview.png"
import ReactImage from "../assets/images/React-icon.svg.png"
import AngularImage from "../assets/images/AngularJS-Shield.svg"
import MUIImage from "../assets/images/logo.png"
import BootstrapImage from "../assets/images/Bootstrap_logo.svg.png"
import JavaImage from "../assets/images/java-programming-language-icon.webp"
import MYSQLImage from "../assets/images/mysql-logo.svg"
import MDBImage from "../assets/images/free-mongodb-3629020-3030245.webp"
import GHImage from "../assets/images/github.svg.png"
import TWCSSImage from "../assets/images/Tailwind_CSS_Logo.svg.png" 
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import LeftArrow from "../assets/left-arrow.svg" 
import { useState } from "react";
import LinkedIn from "../assets/linkedin.svg"
import GitH from "../assets/github.svg"
import Download from "../assets/download.svg"
import Resume from "../assets/Sabine_Hamdoun.pdf"

const Section = (props) => {
    const {children} = props;

    return (
        <motion.section 
        className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
        initial={{
            opacity: 0,
            y: 50,
        }}
        whileInView={{ //this is for the transition when you see a section it slides 
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.6,
            }
        }}
        >
            {children}
        </motion.section>
    )

}
export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection />
            <SkillsSection />
            <ProjectsSection /> 
            <ContactSection /> 
        </div>
    )
}

const AboutSection = () => {
  const handleDownloadClick = (e) => {
    e.preventDefault();
    const pdfPath = {Resume};
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'Sabine_Hamdoun_Resume.pdf'; 
    link.click();
  };

    return(
    <Section>
        <div className="px-24"> 
            <h1 className="text-4xl font-extrabold leading-snug">
                Hi, I'm
                <br />
                <span className="bg-white px-1 italic">Sabine Hamdoun</span>
            </h1>
            <motion.p className="text-md text-gray-600 mt-4 leading-8"
            initial={{
                opacity: 0,
                y: 25
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1,
                delay: 1.5
            }}
            >
                I’m a front-end developer with a lot of 
                <br />
                experience who loves creating user-friendly 
                <br />
                websites, and I’m really good at turning 
                <br />
                design ideas into functional code using HTML,
                <br /> 
                CSS, JavaScript, and modern frameworks to 
                <br />
                make sure clients are happy with the final product. 
            </motion.p>
            <motion.button className={`bg-purple-600 text-white py-3 px-7 flex gap-2
            rounded-lg font-bold text-lg mt-14`}
            initial={{
                opacity: 0,
                y: 25
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1,
                delay: 1.5
            }}
            onClick={(e) => handleDownloadClick(e)}
            >
              <img src={Download} style={{height: "23px", }} alt="Download Icon" />
                Resume
            </motion.button>
        </div>
    </Section>
    )
}

const skills = [
    {
        imageSrc: HTMLImage,
        title: "HTML",
        level: 100,
        color: "orangered",
    },
    {
        imageSrc: CSSImage,
        title: "CSS",
        level: 90,
    },
    {
        imageSrc: JSImage,
        title: "JS",
        level: 60,
        color: "yellow",

    },
    {
        imageSrc: NodeImage,
        title: "Node",
        level: 40,
        color: "green",
    },
    {
        imageSrc: ReactImage,
        title: "React",
        level: 80,
        color: "aqua"
    },
    {
        imageSrc: AngularImage,
        title: "Angular",
        level: 45,
        color: "red"
    },
    {
        imageSrc: MUIImage,
        title: "MUI",
        level: 75,
    },
    {
        imageSrc: BootstrapImage,
        title: "Bootstrap",
        level: 60,
        color: "rgba(116, 59, 190, 0.761)"
    },
    {
        imageSrc: JavaImage,
        title: "Java",
        level: 40,
        color: "rgb(29, 122, 164)"
    },
    {
        imageSrc: MYSQLImage,
        title: "MySQL",
        level: 60,
    },
    {
        imageSrc: MDBImage,
        title: "MDB",
        level: 60,
        color: "green"
    },
    {
        imageSrc: GHImage,
        title: "GH",
        level: 75,
        color: "gray"
    },
    {
        imageSrc: TWCSSImage,
        title: "3D Modeling",
        level: 70,
        color: "rgb(85, 199, 252)"
    },
  ];
  const languages = [
    {
      title: "🇫🇷 French",
      level: 100,
    },
    {
      title: "🇺🇸 English",
      level: 80,
    },
    {
      title: "🇯🇵 Japanese",
      level: 20,
    },
  ];
  

  const SkillsSection = () => {
    const chunkArray = (array, chunkSize) => {
      const result = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
      }
      return result;
    };
  
    const chunkedSkills = chunkArray(skills, 4);
    const chunkedLanguages = chunkArray(languages, 4);
  
    return (
      <Section>
        <div className="mx-auto "> 
        <motion.div whileInView={"visible"}>
        <h2 className="text-4xl mx-auto text-center font-bold mb-4">Skills</h2>
        <hr className="border-4 border-purple-600 border-solid mx-auto mb-5 w-16"/>
        <div className="mt-4 space-y-14 bg-white opacity-80 rounded-xl py-6 p-3">
          {chunkedSkills.map((chunk, rowIndex) => (
            <div className="flex space-x-6 justify-center" key={rowIndex}>
              {chunk.map((skill, index) => (
                <div className="w-64 space-y-8" key={index}> 
                  <motion.img
                    src={skill.imageSrc} 
                    alt={skill.title}
                    className="h-12 mx-auto" 
                    animate="visible"
                    // initial={{
                    //   opacity: 0, 
                    // }} 
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        }
                      }
                    }} 
                  />
                  <div className="h-1.5 w-52 bg-gray-200 rounded-full mt-2 mx-auto">
                    <motion.div
                      className="h-full bg-indigo-500 rounded-full "
                      style={{ width: `${skill.level}%`,  backgroundColor: skill.color}} 
                      animate="visible"
                      initial={{
                        scaleX: 0,
                        originX:0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 1 + index * 0.2,
                          }
                        }
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
      </div>
        {/* <div>
          <h2 className="text-3xl font-bold mt-10">Languages</h2>
          <div className="mt-8 space-y-4">
            {chunkedLanguages.map((chunk, rowIndex) => (
              <div className="flex space-x-4" key={rowIndex}>
                {chunk.map((lng, index) => (
                  <div className="w-64" key={index}>
                    <motion.h3
                        className="text-md font-bold text-gray-800" 
                        initial={{
                            opacity: 0, 
                        }}
                        variants={{
                            visible: {
                                opacity: 1,
                                transition: {
                                    duration: 1,
                                    delay: 1 + index * 0.2,
                                }
                            }
                        }} 
                        >
                        {lng.title}
                        </motion.h3>
                        <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                        <motion.div
                            className="h-full bg-indigo-500 rounded-full "
                            style={{ width: `${lng.level}%` }} 
                            initial={{
                                scaleX: 0,
                                originX:0,
                            }}
                            variants={{
                                visible: {
                                    scaleX: 1,
                                    transition: {
                                        duration: 1,
                                        delay: 2 + index * 0.2,
                                    }
                                }
                            }} 
                        />
                        </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div> */}
      </Section>
    );
  };
  

const ProjectsSection = () => { 
  
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    return (
        <Section>
          <div className="mx-auto mt-28">
            <motion.div whileInView={"visible"}>
              <h2 className="text-4xl mx-auto text-center font-bold mb-4">Projects</h2>
              <hr className="border-4 border-purple-600 border-solid mx-auto mb-12 w-16" />
            </motion.div>
          </div>
          <div className="flex w-full h-full items-center justify-between">
            <button
              className="hover:text-indigo-600 transition-colors"
              onClick={previousProject}
              style={{ marginLeft: "4rem", zIndex: "1" }} 
            >
              <img src={LeftArrow} style={{ height: "30px" }} />
            </button>
            <button
              className="hover:text-indigo-600 transition-colors"
              onClick={nextProject}
              style={{ marginRight: "4rem" }} 
            >
              <img src={LeftArrow} style={{ height: "30px", transform: "rotate(180deg)" }} />
            </button>
          </div>
        </Section>
    )
}
const ContactSection = () => {
    return (
        <div
          className="w-screen mx-auto bg-gradient-to-b from-purple-100 to-purple-300"
        >
        <Section>
            <div className="mx-auto mb-7" style={{width: "40%"}}>
                <h2 className="text-4xl mx-auto text-center font-bold mb-4">Contact me</h2>
                <hr className="border-4 border-purple-600 border-solid mx-auto w-16"/>
                <div className="flex mt-4 "> 
                <hr className="border-1 border-purple-600 border-solid mx-auto w-1/3 my-auto"/>
                <h3 className="text-xl text-center italic px-2">Let's Talk Projects!</h3>
                <hr className="border-1 border-purple-600 border-solid mx-auto w-1/3 my-auto"/>
                </div>
                <div className="mt-6 p-8 rounded-md bg-white">
                  <div>
                    <form> 
                        <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        /> 
                        <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="block w-full mb-1 mt-5 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        /> 
                        <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        className="h-32 mb-1 mt-5 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        />
                        <div className="flex justify-center">
                            <button className="bg-purple-600 w-full text-white py-2 px-6 rounded-lg font-bold text-lg mt-7 ">
                                Submit
                            </button>
                        </div>
                    </form>
                    </div>
                    <div className="flex justify-center mt-7 gap-8">
                      <img src={LinkedIn} style={{height: "30px" }}/>
                      <img src={GitH} style={{height: "30px" }}/>
                    </div>
                </div> 
            </div>
        </Section>
        </div>
    )
}