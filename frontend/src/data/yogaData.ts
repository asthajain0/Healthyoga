export interface Exercise {
  id: string;
  name: string;
  sanskritName?: string;
  category: string[];
  image: string;
  tagline: string;
  duration: string;
  level: string;
  howToDo: string[];
  benefits: string[];
  contraindications: string[];
  warnings: string[];
}

export interface Problem {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export const problems: Problem[] = [
  {
    id: "back-pain",
    name: "Back Pain",
    description: "Gentle stretches and poses to relieve back discomfort",
    image: "/src/assets/back-pain.jpg",
    icon: "Activity"
  },
  {
    id: "stomach",
    name: "Stomach Issues",
    description: "Improve digestion and reduce bloating naturally",
    image: "/src/assets/stomach.jpg",
    icon: "Heart"
  },
  {
    id: "stress",
    name: "Stress & Anxiety",
    description: "Find calm and peace through mindful movement",
    image: "/src/assets/stress.jpg",
    icon: "Brain"
  },
  {
    id: "sleep",
    name: "Sleep Problems",
    description: "Relax your body and mind for better rest",
    image: "/src/assets/sleep.jpg",
    icon: "Moon"
  },
  {
    id: "womens-health",
    name: "Women's Health",
    description: "Support hormonal balance and reproductive wellness",
    image: "/src/assets/womens-health.jpg",
    icon: "Flower2"
  },
  {
    id: "fitness",
    name: "General Fitness",
    description: "Build strength, flexibility, and overall wellness",
    image: "/src/assets/fitness.jpg",
    icon: "Zap"
  }
];

export const exercises: Exercise[] = [
  {
    id: "pawanmuktasana",
    name: "Wind-Relieving Pose",
    sanskritName: "Pawanmuktasana",
    category: ["stomach", "back-pain"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    tagline: "Improves digestion and releases gas",
    duration: "2-3 minutes",
    level: "Beginner",
    howToDo: [
      "Lie flat on your back with legs extended and arms by your sides",
      "Bend your right knee and bring it towards your chest",
      "Clasp your hands around your shin or knee",
      "Hold for 30 seconds to 1 minute while breathing deeply",
      "Release and repeat on the left side",
      "For full pose, bring both knees to chest simultaneously"
    ],
    benefits: [
      "Relieves gas and bloating",
      "Massages abdominal organs",
      "Improves digestion",
      "Relieves lower back tension",
      "Reduces stress and anxiety"
    ],
    contraindications: [
      "Recent abdominal surgery",
      "Hernia",
      "Pregnancy (third trimester)",
      "High blood pressure (when done vigorously)"
    ],
    warnings: [
      "Avoid if you have neck injuries",
      "Don't force the knee compression",
      "Practice 2-3 hours after meals"
    ]
  },
  {
    id: "cat-cow",
    name: "Cat-Cow Stretch",
    sanskritName: "Marjaryasana-Bitilasana",
    category: ["back-pain", "stress", "fitness"],
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
    tagline: "Gentle spinal flow for back relief",
    duration: "2-3 minutes",
    level: "Beginner",
    howToDo: [
      "Start on hands and knees in tabletop position",
      "Align wrists under shoulders and knees under hips",
      "Inhale: Drop belly, lift chest and tailbone (Cow)",
      "Exhale: Round spine, tuck chin and tailbone (Cat)",
      "Flow between poses with your breath",
      "Repeat 10-15 rounds"
    ],
    benefits: [
      "Increases spine flexibility",
      "Relieves back and neck pain",
      "Stretches torso and neck",
      "Improves posture",
      "Massages internal organs",
      "Reduces stress"
    ],
    contraindications: [
      "Severe neck injury",
      "Recent back surgery",
      "Wrist injuries"
    ],
    warnings: [
      "Keep movements gentle and controlled",
      "Don't overextend the neck",
      "Modify on forearms if wrist pain occurs"
    ]
  },
  {
    id: "child-pose",
    name: "Child's Pose",
    sanskritName: "Balasana",
    category: ["stress", "back-pain", "sleep"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    tagline: "Ultimate relaxation and stress relief",
    duration: "3-5 minutes",
    level: "Beginner",
    howToDo: [
      "Kneel on the floor with big toes touching",
      "Sit back on your heels",
      "Separate knees hip-width or wider",
      "Exhale and fold forward, extending arms ahead",
      "Rest forehead on the mat",
      "Breathe deeply and hold"
    ],
    benefits: [
      "Calms the mind and relieves stress",
      "Gently stretches lower back",
      "Releases tension in shoulders and neck",
      "Promotes better sleep",
      "Aids digestion",
      "Reduces anxiety"
    ],
    contraindications: [
      "Pregnancy (after first trimester)",
      "Knee injuries",
      "Diarrhea",
      "Recent abdominal surgery"
    ],
    warnings: [
      "Use a cushion under knees if sensitive",
      "Place pillow under torso for support if needed",
      "Avoid if high blood pressure (keep head elevated)"
    ]
  },
  {
    id: "legs-up-wall",
    name: "Legs Up the Wall",
    sanskritName: "Viparita Karani",
    category: ["sleep", "stress", "womens-health"],
    image: "https://images.unsplash.com/photo-1573384667248-96ad0157f2b7?w=800&q=80",
    tagline: "Deeply restorative for mind and body",
    duration: "5-15 minutes",
    level: "Beginner",
    howToDo: [
      "Sit sideways next to a wall",
      "Swing legs up the wall as you lie back",
      "Scoot hips close to the wall",
      "Rest arms by sides, palms up",
      "Close eyes and breathe naturally",
      "Stay for 5-15 minutes"
    ],
    benefits: [
      "Improves circulation",
      "Reduces swelling in legs and feet",
      "Calms nervous system",
      "Relieves tired legs",
      "Helps with insomnia",
      "Reduces anxiety and stress",
      "Eases menstrual cramps"
    ],
    contraindications: [
      "Glaucoma",
      "High blood pressure",
      "Serious neck or back problems",
      "Pregnancy (after first trimester without support)"
    ],
    warnings: [
      "Come out slowly to avoid dizziness",
      "Use folded blanket under hips for support",
      "Avoid during menstruation if uncomfortable"
    ]
  },
  {
    id: "cobra-pose",
    name: "Cobra Pose",
    sanskritName: "Bhujangasana",
    category: ["back-pain", "stomach", "fitness"],
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80",
    tagline: "Strengthens spine and opens chest",
    duration: "30 seconds - 1 minute",
    level: "Beginner/Intermediate",
    howToDo: [
      "Lie face down with legs extended",
      "Place palms flat beside chest",
      "Press tops of feet into the mat",
      "Inhale and slowly lift chest off the floor",
      "Keep elbows slightly bent",
      "Draw shoulders back and down",
      "Hold and breathe, then release"
    ],
    benefits: [
      "Strengthens spine and back muscles",
      "Opens chest and lungs",
      "Improves digestion",
      "Stimulates abdominal organs",
      "Reduces stress and fatigue",
      "Increases flexibility"
    ],
    contraindications: [
      "Pregnancy",
      "Recent abdominal surgery",
      "Carpal tunnel syndrome",
      "Headache"
    ],
    warnings: [
      "Don't overextend the back",
      "Keep lower back relaxed",
      "Avoid if you have severe back injury",
      "Stop if you feel pinching in lower back"
    ]
  },
  {
    id: "butterfly-pose",
    name: "Butterfly Pose",
    sanskritName: "Baddha Konasana",
    category: ["womens-health", "stress", "fitness"],
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&q=80",
    tagline: "Opens hips and supports reproductive health",
    duration: "1-5 minutes",
    level: "Beginner",
    howToDo: [
      "Sit on the floor with spine straight",
      "Bend knees and bring soles of feet together",
      "Hold feet with hands",
      "Gently press knees toward floor",
      "Keep spine long and chest open",
      "Option to fold forward for deeper stretch"
    ],
    benefits: [
      "Opens hips and groin",
      "Stimulates reproductive organs",
      "Relieves menstrual discomfort",
      "Improves circulation in pelvis",
      "Reduces fatigue",
      "Calms the mind"
    ],
    contraindications: [
      "Groin or knee injury",
      "Lower back injury (without support)",
      "Sciatica"
    ],
    warnings: [
      "Don't force knees down",
      "Use cushion under hips if needed",
      "Avoid forward fold if lower back is sensitive",
      "Practice gently during pregnancy"
    ]
  },
  {
    id: "corpse-pose",
    name: "Corpse Pose",
    sanskritName: "Savasana",
    category: ["sleep", "stress", "fitness"],
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80",
    tagline: "Complete relaxation for body and mind",
    duration: "5-20 minutes",
    level: "Beginner",
    howToDo: [
      "Lie flat on your back",
      "Let legs fall open naturally",
      "Arms rest at sides, palms facing up",
      "Close your eyes",
      "Relax every muscle in your body",
      "Breathe naturally and stay present",
      "Rest for at least 5 minutes"
    ],
    benefits: [
      "Reduces stress and anxiety",
      "Lowers blood pressure",
      "Promotes deep rest",
      "Improves sleep quality",
      "Calms nervous system",
      "Integrates benefits of practice",
      "Reduces fatigue"
    ],
    contraindications: [
      "Late pregnancy (use side-lying position)",
      "Severe back pain (without support)"
    ],
    warnings: [
      "Use cushion under knees for back support",
      "Cover yourself with blanket if cold",
      "Set an alarm if concerned about falling asleep",
      "Come out slowly to avoid dizziness"
    ]
  },
  {
    id: "seated-twist",
    name: "Seated Spinal Twist",
    sanskritName: "Ardha Matsyendrasana",
    category: ["stomach", "back-pain", "fitness"],
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80",
    tagline: "Detoxifies and improves spinal mobility",
    duration: "30 seconds - 1 minute each side",
    level: "Intermediate",
    howToDo: [
      "Sit with legs extended in front",
      "Bend right knee and place foot outside left thigh",
      "Keep left leg extended or bend it in",
      "Inhale to lengthen spine",
      "Exhale and twist to the right",
      "Place right hand behind you, left elbow outside right knee",
      "Hold, then repeat on other side"
    ],
    benefits: [
      "Improves spinal flexibility",
      "Massages internal organs",
      "Aids digestion and detoxification",
      "Relieves back pain",
      "Reduces stress",
      "Improves posture"
    ],
    contraindications: [
      "Pregnancy",
      "Recent abdominal surgery",
      "Severe back or spine injury",
      "Hernia"
    ],
    warnings: [
      "Don't force the twist",
      "Keep both sitting bones grounded",
      "Avoid if you have disc problems",
      "Twist from the belly, not just shoulders"
    ]
  }
];
