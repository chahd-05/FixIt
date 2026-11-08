import { useState } from "react";

function RepairForm({ onAddRepair }) {
    const [device, setDevice] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        const cleanedDevice = device.trim()

        if(!cleanedDevice) {
            return;
        }

        onAddRepair(cleanedDevice)
        setDevice("")
    }

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="device">nom de l'appareil</label>
        
    <input 
        id="device"
        value={device} 
        onChange={(event) => setDevice(event.target.value)}
        required
    />

    <button type="submit">ajouter</button>
    </form>
);

}

export default RepairForm;

