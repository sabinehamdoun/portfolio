import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import Cover5 from "../assets/images/log.jpg"
import Cover1 from "../assets/images/pixel.jpg"
import Cover2 from "../assets/images/portf.jpg"
import Cover3 from "../assets/images/ecommerce.jpg"
import Cover4 from "../assets/images/jobnow.jpg"


export const projects = [
    {
      title: "E-commerce",
      url: "",
      image: Cover3,
      description: "Coming Soon ...",
    },
    {
      title: "Portfolio",
      url: "https://6551a9ef7dbdf306d487e448--darling-paprenjak-28a773.netlify.app/",
      image: Cover2,
      description: "Other portfolio using HTML, CSS, JavaScript & Bootstrap",
    },
    {
      title: "PixelPulse",
      url: "https://main--gorgeous-stroopwafel-ddd071.netlify.app/",
      image: Cover1,
      description: "Advertisement project using ReactJS, NextJS, & Tailwind CSS ",
    },
    {
      title: "JobNow",
      url: "https://main--splendorous-malasada-b1e307.netlify.app/",
      image: Cover4,
      description: "Website for job search using ReactJS & Tailwind CSS",
    },
    {
      title: "Random Website",
      url: "https://benevolent-crostata-9256d1.netlify.app/",
      image: Cover5,
      description: "ReactJS, Vanilla CSS",
    },
  ];


  const Project = (props) => {
    const {project, highlighted} = props;
    const background = useRef();
    const bgOpacity = useMotionValue(0.4);


    useEffect(() => {
        animate(bgOpacity, highlighted ? 0.8 : 0.5)
    }, [highlighted]);

    useFrame(() => {
        background.current.material.opacity = bgOpacity.get();
    })
    return (
        <group {...props}>
            <mesh position-y={0.1} position-z={-0.001} onClick={() => window.open(project.url, "_blank")} ref={background}> 
                <planeGeometry args={[2.7, 3.2]}/>
                <meshBasicMaterial color="black" transparent opacity={0.4}/>
            </mesh>
            <Image scale={[2.5, 1.4, 1]} url={project.image} toneMapped={false} position-y={0.3} />
            <Text maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.2} position={[-1, -0.6, 0]}>{project.title.toUpperCase()}</Text>
            <Text maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.15} position={[-1, -0.9, 0]}>{project.description}</Text>
        </group>
    )
  }

export const currentProjectAtom = atom(Math.floor(projects.length / 2))
export const Projects = () => {

    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);

    return (
        <group position-y={-viewport.height * 2 + -1.5}>
            {
                projects.map((project, index) => (
                    <motion.group key={"project_" + index} position={[index * 2.5, 0, -2]}
                    animate={{
                        x: 0 + (index - currentProject) * 2.5,
                        y: currentProject === index ? 0 : -0.1,
                        z: currentProject === index ? -2 : -3,
                        rotateX: currentProject === index ? 0: -Math.PI / 3,
                        rotateZ: currentProject === index ? 0: -0.1 * Math.PI,

                    }}>
                        <Project project={project} highlighted={index===currentProject} />
                    </motion.group>
                ))
            }

        </group>
    )
}