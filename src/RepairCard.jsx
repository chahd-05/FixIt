import { useState } from "react";

function RepaireCard({ repair, onFinish }) {

    const [showDetails, setShowDetails] = useState(false);
    function handleClick() {
        setShowDetails(!showDetails);
    }

    return (
        <div className="repair-card">
            <h3>{repair.device}</h3>

            <p>
                Statut : {repair.status}
            </p>

            {repair.status !== "termine" && (
                <button type="button" onClick={() => onFinish(repair.id)}>
                    terminer
                </button>
            )}
            <button onClick={handleClick}>
                {showDetails ? "Masquer les détails" : "Afficher les détails"}
            </button>

            {showDetails && (
                <div>
                    <p>ID : {repair.id}</p>
                    <p>Appareil : {repair.device}</p>
                    <p>Statut : {repair.status}</p>
                </div>
            )}
        </div>

    )
}

export default RepairCard;