import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const RobotsContext = createContext();

export function RobotsProvider(props) {
    const [overview, setOverview] = useState([]);
    const [robots, setRobots] = useState([]);
    const [isNewRobotModalOpen, setIsNewRobotModalOpen] = useState(false);
    const [isLoadingOverview, setIsLoadingOverview] = useState(false);
    const [isLoadingRobots, setIsLoadingRobots] = useState(false);

    const requestsGetOverview = () => {
        setIsLoadingOverview(true);

        api.get('/robot/overview')
            .then((response) => {
                setOverview(response.data.data);
                setIsLoadingOverview(false);
            })
            .catch(error => error);
    };
    
    const requestsGetRobot = () => {
        setIsLoadingRobots(true);

        api.get('/robot')
            .then((response) => {
                setRobots(response.data.data);
                setIsLoadingRobots(false);
            })
            .catch(error => error);
    }

    const createRobot = async (robotInput) => {
        try {
            const response = await api.post('/robot', {
                ...robotInput,
            });
            requestsGetRobot();
            return response;
        } catch (error) {
            return 'Erro ao criar o robô'
        }
    }

    useEffect(() => {
        requestsGetOverview();
        requestsGetRobot();
    }, []);

    return (
        <RobotsContext.Provider
            value={{
                robots,
                overview,
                isNewRobotModalOpen,
                setIsNewRobotModalOpen,
                isLoadingOverview,
                isLoadingRobots,
                createRobot,
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
