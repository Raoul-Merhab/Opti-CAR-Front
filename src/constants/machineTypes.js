const machineTypes = [
    {
        name: "Welding Robot",
        limites: [
            {
                name: "weld_temperature",
                min: 1500,
                max: 1700,
            },
            {
                name: "weld_current",
                min: 100,
                max: 200,
            },
            {
                name: "weld_voltage",
                min: 20,
                max: 40,
            },
            {
                name: "weld_time",
                min: 100,
                max: 1000,
            },
            {
                name: "pressure_applied",
                min: 500,
                max: 1500,
            },
            {
                name: "wire_feed_rate",
                min: 1,
                max: 10,
            },
            {
                name: "gas_flow_rate",
                min: 10,
                max: 30,
            },
        ],
    },
    {
        name: "Stamping Presses",
        limites: [
            {
                name: "force_applied",
                min: 300,
                max: 1000,
            },
            {
                name: "cycle_time",
                min: 5,
                max: 30,
            },
            {
                name: "temperature",
                min: 20,
                max: 100,
            },
            {
                name: "vibration_level",
                min: 0,
                max: 2,
            },
            {
                name: "oil_pressure",
                min: 2,
                max: 5,
            },
            {
                name: "sheet_thickness",
                min: 0.5,
                max: 3,
            },
        ],
    },
    {
        name: "Painting Robots",
        limites: [
            {
                name: "spray_pressure",
                min: 2,
                max: 5,
            },
            {
                name: "paint_thickness",
                min: 50,
                max: 200,
            },
            {
                name: "temperature",
                min: 20,
                max: 30,
            },
            {
                name: "humidity",
                min: 40,
                max: 80,
            },
            {
                name: "paint_flow_rate",
                min: 2,
                max: 6,
            },
            {
                name: "overspray_capture_efficiency",
                min: 80,
                max: 100,
            },
        ],
    },
    {
        name: "Automated Guided Vehicles (AGVs)",
        limites: [
            {
                name: "battery_level",
                min: 0,
                max: 100,
            },
            {
                name: "load_weight",
                min: 0,
                max: 1000,
            },
            {
                name: "speed",
                min: 0.1,
                max: 3,
            },
            {
                name: "vibration_level",
                min: 0,
                max: 1,
            },
            {
                name: "temperature",
                min: -10,
                max: 50,
            },
        ],
    },
    {
        name: "CNC Machines",
        limites: [
            {
                name: "spindle_speed",
                min: 1000,
                max: 20000,
            },
            {
                name: "tool_wear_level",
                min: 0,
                max: 100,
            },
            {
                name: "cut_depth",
                min: 0,
                max: 10,
            },
            {
                name: "feed_rate",
                min: 50,
                max: 500,
            },
            {
                name: "vibration_level",
                min: 0,
                max: 2,
            },
            {
                name: "coolant_flow_rate",
                min: 0.1,
                max: 5,
            },
        ],
    },
    {
        name: "Leak Test Machines",
        limites: [
            {
                name: "test_pressure",
                min: 0,
                max: 10,
            },
            {
                name: "pressure_drop",
                min: 0,
                max: 1,
            },
            {
                name: "leak_rate",
                min: 0,
                max: 10,
            },
            {
                name: "test_duration",
                min: 10,
                max: 120,
            },
            {
                name: "temperature",
                min: 0,
                max: 50,
            },
        ],
    },
];


export default machineTypes