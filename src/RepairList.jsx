import { initialRepairs } from "./data";
import RepairCard from "./RepairCard";
import { useState } from "react";
import RepairForm from "./RepairForm";


function RepairList() {
    const [repairs, setRepairs] = useState(initialRepairs);

    function handleAddRepair(device) {
        const newRepair = {
            id: crypto.randomUUID(),
            device,
            status: "recu"
        };

        setRepairs((currentRepairs) => [
            ...currentRepairs,
            newRepair
        ]);
    }

    function handleFinish(id) {
        setRepairs((currentRepairs) => 
            currentRepairs.map((repair) => 
                repair.id === id
                    ? {...repair, status: "termine"}
                    : repair
            )
        );
    }

    return (
        <div>
            <h2>Liste des réparations</h2>

            <RepairForm onAddRepair={handleAddRepair} />

            <div>
                {repairs.map((repair) => (
                    <RepairCard
                        key={repair.id}
                        repair={repair}
                        onFinish={handleFinish}
                    />
                ))}
            </div>
        </div>
    );
}

export default RepairList;