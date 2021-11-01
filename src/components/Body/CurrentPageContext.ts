import {createContext, Dispatch, SetStateAction} from "react";

interface CurrentPageContext {
    currentPage: string;
    setCurrentPage: Dispatch<SetStateAction<string>>;
}
const CurrentPageContextObject = createContext<CurrentPageContext>(
    {
        currentPage:'home',
        //eslint-disable-next-line
        setCurrentPage: () => {},
    }
    );

export default CurrentPageContextObject;