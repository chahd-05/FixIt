import RepairCard from "./RepairCard";

function RepairList({ repairs = [] }) {
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
