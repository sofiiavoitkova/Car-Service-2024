const workshops = [
    {
        id: 1,
        name: "ACS Premium Auto Centrum Serwisowe",
        address: "ul. Przybyszewskiego 199/205, Górna, Łódź",
        phone: "42 298 92 54",
        paymentMethods: ["cash", "card"],
        services: [
            "auto glass repair and replacement",
            "front windshield replacement",
            "rear windshield replacement",
            "car bodywork",
            "diesel service",
            "injection pump repair",
            "injectors repair, regeneration",
            "Common Rail injectors repair",
            "car electrician",
            "battery test",
            "spark plug replacement",
            "bulb replacement",
            "car detailing",
            "car wash",
            "vehicle mechanics",
            "throttle cleaning",
            "other (labor hour)",
            "compression pressure measurement",
            "periodic inspection and maintenance",
            "leaf springs replacement",
            "pre-purchase car check",
            "coolant CO2 test",
            "shock absorber replacement",
            "brake drum replacement",
            "cabin filter replacement",
            "fuel filter replacement",
            "air filter replacement",
            "intercooler replacement",
            "brake pads replacement",
            "dual-mass flywheel replacement",
            "handbrake cable replacement",
            "timing chain replacement",
            "stabilizer link replacement",
            "wheel bearing replacement",
            "engine oil replacement",
            "manual gearbox oil replacement",
            "V-belt replacement",
            "timing belt replacement",
            "coolant replacement",
            "brake fluid replacement",
            "engine mount replacement",
            "fuel pump replacement",
            "water pump replacement",
            "half shaft replacement",
            "drive shaft joint replacement",
            "brake hose replacement",
            "lambda sensor replacement",
            "suspension spring replacement",
            "clutch replacement",
            "wishbone ball joint replacement",
            "brake shoe replacement",
            "brake disc replacement",
            "thermostat replacement",
            "wishbone bushing replacement",
            "head gasket replacement",
            "wiper replacement",
            "manual gearbox repair",
            "engine overhauls",
            "turbocharger regeneration",
            "automotive shop",
            "battery sales",
            "car air conditioning service",
            "air conditioning refilling",
            "air conditioning disinfection",
            "air conditioning ozonation",
            "air conditioning leak test",
            "air conditioning radiator replacement",
            "air conditioning compressor replacement",
            "tire service",
            "TPMS sensor programming",
            "wheel balancing on vehicle",
            "wheel balancing",
            "nitrogen tire inflation",
            "Run Flat, low profile tires",
            "used tires",
            "rim sandblasting",
            "alloy wheel straightening",
            "tire storage",
            "aluminum wheel welding",
            "24h tire service",
            "tire replacement",
            "valve replacement",
            "vehicle inspection station",
            "technical inspections and registration checks",
            "exhaust system repair",
            "DPF filter cleaning and regeneration",
            "muffler welding and repair",
            "FAP fluid refilling",
            "catalytic converter replacement",
            "muffler replacement",
            "steering system repair",
            "wheel alignment",
            "rack and pinion regeneration",
            "power steering repair",
            "steering gear replacement",
            "engine computer diagnostics",
            "error code clearing",
            "special services",
            "post-accident repairs",
            "dynamic oil change in automatic gearbox",
            "static oil change in automatic gearbox"
        ],
        acceptedBrands: [
            "Alfa Romeo", "Audi", "BMW", "Chevrolet", "Chrysler", "Citroen", "Dacia",
            "Daewoo", "Dodge", "Fiat", "Ford", "Honda", "Hyundai", "Infiniti", "Jaguar",
            "Jeep", "Kia", "Lancia", "Land Rover", "Lexus", "Mazda", "Mercedes-Benz",
            "Mini", "Mitsubishi", "Nissan", "Opel", "Peugeot", "Porsche", "Renault",
            "Rover", "Saab", "Seat", "Skoda", "Smart", "Subaru", "Suzuki", "Toyota",
            "Volkswagen", "Volvo"
        ]
    },
    {
        id: 2,
        name: "ALFCAR Serwis Mechaniczny Stacja Kontroli Pojazdów",
        address: "Wileńska 9, Retkinia, Łódź",
        phone: "42 942 04 15",
        paymentMethods: ["cash", "card"],
        services: [
            "electromechanic",
            "window lift mechanism repair",
            "blower motor repair",
            "car electronics",
            "airbags",
            "car electrician",
            "parking sensors",
            "electronic handbrake repair",
            "alternator regeneration and repair",
            "starter regeneration",
            "ignition repair",
            "fuse replacement",
            "steering angle sensor replacement",
            "spark plug replacement",
            "glow plug replacement",
            "xenon bulb replacement",
            "bulb replacement",
            "central locks",
            "vehicle mechanics",
            "throttle cleaning",
            "other (labor hour)",
            "Wankel engine repair",
            "compression pressure measurement",
            "periodic inspection and maintenance",
            "brake caliper regeneration",
            "leaf springs replacement",
            "pre-purchase car check",
            "coolant CO2 test",
            "shock absorber replacement",
            "brake drum replacement",
            "radiator replacement",
            "cabin filter replacement",
            "fuel filter replacement",
            "air filter replacement",
            "intercooler replacement",
            "brake pads replacement",
            "dual-mass flywheel replacement",
            "handbrake cable replacement",
            "timing chain replacement",
            "stabilizer link replacement",
            "wheel bearing replacement",
            "heater replacement",
            "engine oil replacement",
            "manual gearbox oil replacement",
            "V-belt replacement",
            "timing belt replacement",
            "coolant replacement",
            "brake fluid replacement",
            "engine mount replacement",
            "fuel pump replacement",
            "water pump replacement",
            "half shaft replacement",
            "drive shaft joint replacement",
            "brake hose replacement",
            "lambda sensor replacement",
            "suspension spring replacement",
            "clutch replacement",
            "wishbone ball joint replacement",
            "brake shoe replacement",
            "brake disc replacement",
            "thermostat replacement",
            "wishbone bushing replacement",
            "valve cover gasket replacement",
            "wiper replacement",
            "hydropneumatic suspension repair and replacement",
            "manual gearbox repair",
            "engine overhauls",
            "turbocharger regeneration",
            "rear axle regeneration",
            "car air conditioning service",
            "air conditioning radiator replacement",
            "air conditioning compressor replacement",
            "tire service",
            "tire replacement",
            "vehicle inspection station",
            "technical inspections and registration checks",
            "exhaust system repair",
            "steering system repair",
            "engine computer diagnostics",
            "error code clearing"
        ],
        acceptedBrands: [
            "Alfa Romeo", "Audi", "BMW", "Chevrolet", "Chrysler", "Citroen", "Dacia",
            "Daewoo", "Dodge", "Ferrari", "Fiat", "Ford", "Honda", "Hyundai", "Infiniti",
            "Isuzu", "Jaguar", "Jeep", "Kia", "Lamborghini", "Lancia", "Land Rover", "Lexus",
            "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Opel", "Peugeot",
            "Porsche", "Renault", "Rover", "Saab", "Seat", "Skoda", "Smart", "SsangYong",
            "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo"
        ]
    },
    {
        id: 3,
        name: "AutoCentrum Elektronowa 18",
        address: "Elektronowa 18, Łódź",
        phone: "42 298 00 07",
        paymentMethods: ["cash", "card"],
        services: [
          "Auto glass repair and replacement",
          "Side window replacement",
          "Front windshield replacement",
          "Rear windshield replacement",
          "Auto bodywork",
          "Diesel service",
          "Electromechanic",
          "ABS repair",
          "Throttle body adaptation",
          "ESP repair",
          "Dashboard repair",
          "Window mechanism repair",
          "Car electronics",
          "Airbags",
          "Auto electrician",
          "Parking sensors",
          "Alternator regeneration and repair",
          "Starter regeneration",
          "Daytime LED lights",
          "Battery test",
          "Fuse replacement",
          "Steering angle sensor replacement",
          "Ignition coil wire replacement",
          "Spark plug replacement",
          "Glow plug replacement",
          "Xenon bulb replacement",
          "Bulb replacement",
          "Central locking systems",
          "Hybrid and electric cars",
          "Car painting (fender, doors, trunk lid, hood, bumper)",
          "Hail damage repair",
          "Vehicle mechanics",
          "Throttle body cleaning",
          "Compression pressure measurement",
          "Warranty inspection",
          "Periodic maintenance",
          "Pre-purchase inspection",
          "CO2 content test in cooling system",
          "Shock absorber replacement",
          "Brake drum replacement",
          "Radiator replacement",
          "Cabin filter replacement",
          "Fuel filter replacement",
          "Air filter replacement",
          "Intercooler replacement",
          "Brake pad replacement",
          "Dual-mass flywheel replacement",
          "Handbrake cable replacement",
          "Timing chain replacement",
          "Stabilizer link replacement",
          "Wheel bearing replacement",
          "Heater replacement",
          "Engine oil change",
          "Manual gearbox oil change",
          "V-belt replacement",
          "Timing belt replacement",
          "Coolant replacement",
          "Brake fluid replacement",
          "Engine mount replacement",
          "Fuel pump replacement",
          "Water pump replacement",
          "Drive shaft replacement",
          "Axle joint replacement",
          "Brake hose replacement",
          "Lambda sensor replacement",
          "Suspension spring replacement",
          "Clutch replacement",
          "Ball joint replacement",
          "Brake shoe replacement",
          "Brake disc replacement",
          "Thermostat replacement",
          "Control arm bushing replacement",
          "Head gasket replacement",
          "Valve cover gasket replacement",
          "Wiper replacement",
          "Hydropneumatic suspension repair",
          "Manual gearbox repair",
          "Engine rebuild",
          "Turbocharger regeneration",
          "Air conditioning service",
          "AC recharge",
          "AC cleaning",
          "AC ozonation",
          "AC leak test",
          "Radiator replacement",
          "AC compressor replacement",
          "Tire service",
          "TPMS sensor programming",
          "Wheel balancing",
          "Nitrogen tire inflation",
          "Wheel straightening",
          "Tire storage",
          "Aluminum rim welding",
          "Tire replacement",
          "Valve replacement",
          "Anti-theft measures",
          "Car alarms",
          "Exhaust system repair",
          "EGR cleaning",
          "DPF cleaning and regeneration",
          "Exhaust welding and repair",
          "FAP fluid replenishment",
          "Catalyst replacement",
          "Muffler replacement",
          "Steering system repair",
          "Wheel alignment",
          "Steering rack regeneration",
          "Steering rod replacement",
          "Engine diagnostics",
          "Cylinder head repair",
          "Valve clearance adjustment",
          "Automatic gearbox repair",
          "Special services",
          "Emergency vehicle unlocking",
          "Tow hitch installation",
          "Heater installation",
          "Roadside assistance and towing",
          "Injector removal",
          "Broken glow plug extraction",
          "Commercial vehicle repair",
          "Door-to-door service",
          "Collision repair",
          "Static automatic transmission oil change"
        ],
        acceptedBrands: [
          "Alfa Romeo", "Aston Martin", "Audi", "BMW", "Chevrolet", "Chrysler", 
          "Citroen", "Dacia", "Daewoo", "Dodge", "Fiat", "Ford", "Honda", "Hyundai",
          "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Lancia", "Land Rover",
          "Lexus", "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", 
          "Opel", "Peugeot", "Porsche", "Renault", "Rover", "Saab", "Seat", 
          "Skoda", "Smart", "SsangYong", "Subaru", "Suzuki", "Toyota", 
          "Triumph", "Volkswagen", "Volvo"
        ]
      },
      // Entry for ID 4
      {
        id: 4,
        name: "F.P.H.U. BOREX MECHANIKA POJAZDOWA",
        address: "Rzgowska 163, Górna, Łódź",
        phone: "429420416",
        paymentMethods: ["cash", "card"],
        services: [
          "Diesel service",
          "Fuel injection pump repair",
          "Injector regeneration and repair",
          "Electromechanic",
          "ABS repair",
          "Window motor repair",
          "Electronic repairs",
          "Diagnostic services",
          "Periodic inspection",
          "Engine diagnostics",
          "Brake repair",
          "Oil change",
          "Fuel system service",
          "Suspension services",
          "Exhaust repair",
          "Battery replacement",
          "Vehicle electronics",
          "Clutch repair"
        ],
        acceptedBrands: ["Alfa Romeo", "Audi", "BMW", "Chevrolet", "Ford", "Hyundai", 
          "Kia", "Mazda", "Mercedes-Benz", "Mitsubishi", "Nissan", "Peugeot", 
          "Renault", "Seat", "Skoda", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo"]
        
      },
      // Entry for ID 5
      {
        id: 5,
        name: "AutoPoint Zamiennik",
        address: "Srebrzyńska 6, Bałuty, Łódź",
        phone: "+48574751724",
        paymentMethods: ["cash"],
        services: [
          "Auto glass repair",
          "Car bodywork",
          "Vehicle painting",
          "Mechanics",
          "Electrical repairs",
          "Vehicle diagnostics",
          "Periodic maintenance",
          "Pre-purchase inspection",
          "Wheel balancing",
          "Air conditioning service",
          "Tire replacement",
          "Brake repair",
          "Suspension services",
          "Exhaust system service",
          "Tow hitch installation",
          "Battery replacement",
          "Car electronics",
          "TPMS sensor programming"
        ],
        acceptedBrands: ["Alfa Romeo", "Audi", "BMW", "Chevrolet", "Ford", "Hyundai", 
          "Kia", "Mazda", "Mercedes-Benz", "Mitsubishi", "Nissan", "Peugeot", 
          "Renault", "Seat", "Skoda", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo"]
      },
      // Entry for ID 6
      {
        id: 6,
        name: "Autotrans Mar-Car",
        address: "Pokładowa 13/15, Górna, Łódź",
        phone: "429420412",
        paymentMethods: ["cash", "card"],
        services: [
          "Auto diagnostics",
          "Mechanical repairs",
          "Electrical system repairs",
          "Air conditioning maintenance",
          "Oil and filter replacement",
          "Suspension services",
          "Brake system repairs",
          "Battery check and replacement",
          "Tire service",
          "Engine diagnostics",
          "Transmission repair",
          "Clutch repair",
          "Cooling system repair",
          "Exhaust repair",
          "Vehicle inspection",
          "TPMS programming"
        ],
        acceptedBrands: ["Alfa Romeo", "Audi", "BMW", "Chevrolet", "Citroen", "Fiat",
          "Ford", "Honda", "Hyundai", "Jaguar", "Kia", "Lexus", "Mazda", 
          "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Opel", "Peugeot", 
          "Renault", "Seat", "Skoda", "Subaru", "Suzuki", "Toyota", 
          "Volkswagen", "Volvo"]
      },
      {
        id: 7,
        name: "Olech Serwis",
        address: "Gdańska 54, Łódź",
        phone: "422302044",
        paymentMethods: ["cash", "card"],
        services: [
          "Auto diagnostics",
          "Mechanical repairs",
          "Electrical system repairs",
          "Air conditioning maintenance and repair",
          "Oil and filter replacement",
          "Brake service",
          "Suspension repair",
          "Battery check and replacement",
          "Exhaust system repair",
          "Engine diagnostics",
          "Cooling system service",
          "Transmission repair",
          "Clutch replacement",
          "Periodic maintenance",
          "Tire replacement and balancing",
          "Pre-purchase inspection",
          "TPMS sensor service"
        ],
        acceptedBrands: [
          "Audi", "BMW", "Citroen", "Fiat", "Ford", "Honda", "Hyundai", "Kia", 
          "Mazda", "Mercedes-Benz", "Mitsubishi", "Nissan", "Opel", "Peugeot", 
          "Renault", "Seat", "Skoda", "Subaru", "Suzuki", "Toyota", 
          "Volkswagen", "Volvo"
        ]
      }
    
];

module.exports = workshops;
