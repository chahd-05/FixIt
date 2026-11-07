import { initialRepairs } from "./data";
import RepairCard from "./RepairCard";
import { useState } from "react";


function RepairList() {
    const [repairs] = useState(initialRepairs)

    return (
        <div>
            <h2>Liste des réparations</h2>
            <div>
                {repairs.map((repair) => (
                    <RepairCard
                        key={repair.id}
                        repair={repair}
                    />
                ))}
            </div>
        </div>
    );
}

export default RepairList;