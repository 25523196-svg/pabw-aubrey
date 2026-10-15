export const teams = [
  { 
    id: 1, name: "Damage over Time (DoT)", category: "dot",
    characters: ["Kafka (Main DPS)", "Black Swan (Sub-DPS)", "Ruan Mei (Support)", "Huohuo (Sustain)"],
    guide: "Fokus pada efek DoT (Damage over Time). Kafka memicu (detonate) semua DoT musuh seketika, sementara Black Swan menumpuk stack Arcana untuk mengurangi Defense musuh secara drastis.",
    build: "• Kafka: Relic Prisoner, fokus ATK% dan SPD.\n• Black Swan: Relic Prisoner, fokus Effect Hit Rate (min 120%).\n• Ruan Mei: Relic Watchmaker, fokus Break Effect.\n• Huohuo: Relic Messenger, fokus HP% dan Healing."
  },
  { 
    id: 2, name: "Follow-up Attack (FUA)", category: "fua",
    characters: ["Dr. Ratio (Main DPS)", "Topaz & Numby (Sub-DPS)", "Robin (Support)", "Aventurine (Sustain)"],
    guide: "Mengandalkan serangan lanjutan beruntun. Topaz menandai target, Dr. Ratio menyerang target ber-debuff, Aventurine membalas serangan, dan Robin memberikan buff ATK serta 100% Action Advance ke seluruh tim.",
    build: "• Dr. Ratio: Relic Pioneer, fokus CRIT Ratio.\n• Topaz: Relic The Ashblazing Grand Duke, fokus CRIT dan SPD.\n• Robin: Relic Champion/ATK, fokus ATK% maksimal.\n• Aventurine: Relic Knight, fokus DEF (min 4000)."
  },
  { 
    id: 3, name: "Hypercarry Break", category: "break",
    characters: ["Firefly (Main DPS)", "Harmony Trailblazer (Support)", "Ruan Mei (Support)", "Gallagher (Sustain)"],
    guide: "Fokus menghancurkan Toughness bar musuh dan memberikan Super Break Damage. Firefly menanamkan Fire Weakness, lalu dibantu Harmony Trailblazer dan Ruan Mei untuk melipatgandakan Break Damage.",
    build: "• Firefly: Relic Iron Cavalry, fokus Break Effect & SPD.\n• Harmony TB: Relic Watchmaker, fokus Break Effect.\n• Ruan Mei: Relic Watchmaker, fokus Break Effect.\n• Gallagher: Relic Iron Cavalry, fokus Break Effect."
  },
  { 
    id: 4, name: "Acheron Nihility", category: "hypercarry",
    characters: ["Acheron (Main DPS)", "Pela (Support)", "Silver Wolf (Support)", "Aventurine (Sustain)"],
    guide: "Tim khusus untuk mengisi stack Ultimate Acheron secepat mungkin. Pela dan Silver Wolf memberikan debuff ke musuh setiap giliran, sementara Aventurine dengan Light Cone Trend juga memberikan debuff saat diserang.",
    build: "• Acheron: Relic Pioneer, fokus CRIT DMG/Rate.\n• Pela: Relic Eagle/Messenger, fokus SPD dan Effect Hit Rate.\n• Silver Wolf: Relic Genius, fokus SPD dan Effect Hit Rate.\n• Aventurine: Relic Knight, fokus DEF dan CRIT."
  },
  { 
    id: 5, name: "Mono Quantum", category: "hypercarry",
    characters: ["Seele (Main DPS)", "Silver Wolf (Support)", "Sparkle (Support)", "Fu Xuan (Sustain)"],
    guide: "Tim satu elemen (Quantum) agar Silver Wolf 100% menanamkan Quantum Weakness ke musuh apa pun. Sparkle memberikan buff CRIT DMG dan memajukan giliran Seele, sementara Fu Xuan menyerap damage tim.",
    build: "• Seele: Relic Genius of Brilliant Stars, fokus CRIT.\n• Silver Wolf: Relic Thief/Genius, fokus SPD & EHR.\n• Sparkle: Relic Messenger, fokus CRIT DMG dan SPD (160+).\n• Fu Xuan: Relic Longevous/Guard, fokus HP% dan SPD."
  },
  { 
    id: 6, name: "Jingliu Freeze", category: "hypercarry",
    characters: ["Jingliu (Main DPS)", "Bronya (Support)", "Pela (Support)", "Luocha (Sustain)"],
    guide: "Tim Hypercarry klasik. Jingliu menguras sedikit HP rekan tim untuk damage masif. Bronya memberikan ekstra turn (giliran tambahan), Pela mengurangi DEF musuh, dan Luocha menyembuhkan tim secara otomatis tanpa memakan Skill Point.",
    build: "• Jingliu: Relic Hunter of Glacial Forest, fokus CRIT DMG.\n• Bronya: Relic Messenger, fokus CRIT DMG dan SPD.\n• Pela: Relic Messenger, fokus SPD.\n• Luocha: Relic Musketeer/Messenger, fokus ATK% dan SPD."
  }
];