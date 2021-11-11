import {createContext, Dispatch, SetStateAction} from "react";
import {Device } from '../../types/device';
import deviceConfig from "../../deviceConfigs/deviceConfig.json";

interface CurrentPageContext {
    currentPage: string;
    setCurrentPage: Dispatch<SetStateAction<string>>;
    currentDevices: Array<Device> ;
    setCurrentDevices: Dispatch<SetStateAction<Array<Device>>> ;
}
const CurrentPageContextObject = createContext<CurrentPageContext>(
    {
        currentPage:'home',
        //eslint-disable-next-line
        setCurrentPage: () => {},
        currentDevices: deviceConfig.devices,
        //eslint-disable-next-line
        setCurrentDevices: () => {},
    }
    );

export default CurrentPageContextObject;