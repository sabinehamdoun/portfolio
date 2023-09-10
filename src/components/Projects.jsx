import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import Cover5 from "../assets/images/cover.jpg"
import Cover1 from "../assets/images/cover2.webp"
import Cover2 from "../assets/images/cover3.jpg"
import Cover3 from "../assets/images/cover4.jpg"
import Cover4 from "../assets/images/bootstrap-themes.png"


export const projects = [
    {
      title: "Sabine",
      url: "https://r3f-wawatmos-final.vercel.app/",
      image: Cover3,
      description: "Recreating the Atmos Awards website with React Three Fiber",
    },
    {
      title: "Portfolio",
      url: "https://www.youtube.com/watch?v=YkHqpqJgLKw",
      image: Cover2,
      description: "Learn how to bake a 3D model with Blender and use it in r3f",
    },
    {
      title: "Website",
      url: "https://www.youtube.com/watch?v=pGMKIyALcK0",
      image: Cover1,
      description: "Learn how to use ReadyPlayerMe to create a 3D avatar",
    },
    {
      title: "Bootstrap",
      url: "https://www.youtube.com/watch?v=zwNF1-lsia8",
      image: Cover4,
      description: "Use React Three Fiber to create a 3D game",
    },
    {
      title: "Loader",
      url: "https://www.youtube.com/watch?v=L12wIvuZTOY",
      image: Cover5,
      description: "Create a loading screen for your r3f projects",
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
            <Image scale={[2, 1.6, 1]} url={project.image} toneMapped={false} position-y={0.3} />
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