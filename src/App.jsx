import { useState, useEffect } from "react";
import { initialRepairs } from "./data";
import RepairList from "./RepairList";

function App() {
    const [repairs, setRepairs] = useState(() => {
        const savedRepairs = localStorage.getItem("repairs");

        if (savedRepairs) {
            return JSON.parse(savedRepairs);
        }

        return initialRepairs;
    });

    useEffect(()=>{
      localStorage.setItem("repairs", JSON.stringify(repairs));
    }, [repairs]);

    return (
        <div>
            <h1>FixIt - Gestion des réparations</h1>

            <RepairList repairs={repairs} />
        </div>
    );
}

export default App;
