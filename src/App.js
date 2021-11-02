import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {ErrorBoundary} from "./ErrorBoundary/withErrorBoundary";
import {useCitiesList} from "./hooks/useCitiesList";
import {Input} from "./components/input/Input";
import {CardList} from "./components/cardList/CardList";


import {SingleCity} from "./components/singleCity/SingleCity";

export const GlobalContext = React.createContext();

function App() {
    const [state, dispatch] = useCitiesList();
    return (
        <BrowserRouter>
            <GlobalContext.Provider value={{state, dispatch}}>
                <div className="Main">
                    <Route path="/home">
                        <Input/>
                        <ErrorBoundary>
                            <CardList/>
                        </ErrorBoundary>
                    </Route>
                    <Route path="/city/:city" component={SingleCity}/>
                </div>
            </GlobalContext.Provider>
        </BrowserRouter>
    );
}

export default App;
