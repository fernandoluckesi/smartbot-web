import { createContext, useContext, useState } from "react";

const RobotsContext = createContext();

export function RobotsProvider(props) {
    const [robots, setRobots] = useState([]);
    const [isNewRobotModalOpen, setIsNewRobotModalOpen] = useState(false);

    return (
        <RobotsContext.Provider
            value={{
                robots,
                isNewRobotModalOpen,
                setIsNewRobotModalOpen
            }}
        >
            {props.children}
        </RobotsContext.Provider>
    )
}

export function useRobots() {
    const context = useContext(RobotsContext);

    return context;
}
