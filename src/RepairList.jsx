import { initialRepairs } from "./data";
import RepairCard from "./RepairCard";


function RepairList() {
    return (
        <div>
            <h2>Liste des réparations</h2>
            <div>
                {initialRepairs.map((repair) => (
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