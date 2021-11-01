import React from "react";
import './App.css';
import {Input} from "./components/input/Input";
import {CardList} from "./components/cardList/CardList";
import {useCitiesList} from "./hooks/useCitiesList";
import {ErrorBoundary} from "./ErrorBoundary/withErrorBoundary";

export const GlobalContext = React.createContext();

function App() {
    const [state, dispatch] = useCitiesList();
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            <div className="Main">
                <Input />
                <ErrorBoundary>
                    <CardList />
                </ErrorBoundary>
            </div>
        </GlobalContext.Provider>
    );
}

export default App;
