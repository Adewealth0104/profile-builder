
const developers = [
  {
    id: 1,
    name: "Amara Johnson",
    track: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    projects: { completed: 8, ongoing: 2 },
    isAvailable: true,
    mentor: { name: "Sarah Chen", specialty: "React" }
  },
  {
    id: 2,
    name: "Chidi Okafor",
    track: "Backend",
    skills: ["Python", "Django", "SQL"],
    projects: { completed: 5, ongoing: 3 },
    isAvailable: false,
    mentor: { name: "James Udo", specialty: "System Design" }
  },
  {
    id: 3,
    name: "Fatima Hassan",
    track: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "Vue", "TypeScript"],
    projects: { completed: 10, ongoing: 1 },
    isAvailable: true,
    mentor: null
  },
  {
    id: 4,
    name: "Emeka Nwosu",
    track: "Mobile",
    skills: ["Dart", "Flutter"],
    projects: { completed: 3, ongoing: 1 },
    isAvailable: true,
    mentor: { name: "Femi Adeyemi", specialty: "Mobile Architecture" }
  },
  {
    id: 5,
    name: "Zara Ahmed",
    track: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "GraphQL"],
    projects: { completed: 7, ongoing: 2 },
    isAvailable: true,
    mentor: null
  },
  {
    id: 6,
    name: "Grace Eze",
    track: "Frontend",
    skills: [],
    projects: { completed: 0, ongoing: 0 },
    isAvailable: false,
    mentor: { name: "Sarah Chen", specialty: "React" }
  }
];

// Step 1: Profile Cards


const buildProfileCard = ({
  name,
  track,
  skills,
  projects,
  isAvailable,
  mentor
}) => {
  const availability = isAvailable
    ? "Available"
    : "Not Available";

  const skillsList = skills.length
    ? skills.join(", ")
    : "No skills listed yet";

  const mentorName =
    mentor?.name ?? "No mentor assigned";

  return `
Name: ${name}
Track: ${track}
Skills: ${skillsList}
Projects: Completed ${projects.completed}, Ongoing ${projects.ongoing}
Availability: ${availability}
Mentor: ${mentorName}
`;
};

console.log("Step 1: Profile Cards");

developers
  .map(buildProfileCard)
  .forEach(card => console.log(card));


// Step 2: Unique Skills Pool


const allSkills = developers.flatMap(
  developer => developer.skills
);

const uniqueSkills = [
  ...new Set(allSkills)
].sort();

console.log("Step 2: Unique Skills Pool");
console.log(uniqueSkills);


// Step 3: Track Summary


const tracks = [
  ...new Set(
    developers.map(
      developer => developer.track
    )
  )
];

const trackSummary = tracks.map(track => {
  const developersInTrack = developers.filter(
    developer => developer.track === track
  );

  const availableDevelopers =
    developersInTrack.filter(
      developer => developer.isAvailable
    ).length;

  const totalProjectsCompleted =
    developersInTrack.reduce(
      (total, developer) =>
        total + developer.projects.completed,
      0
    );

  return `
Track: ${track}
Developers: ${developersInTrack.length}
Available: ${availableDevelopers}
Projects Completed: ${totalProjectsCompleted}
`;
});

console.log("Step 3: Track Summary");

trackSummary.forEach(summary =>
  console.log(summary)
);


// Step 4:  Add a New Developer


const addDeveloper = (
  developers,
  newDeveloper
) => {
  return [...developers, newDeveloper];
};

const newDeveloper = {
  id: 7,
  name: "Aisha Bello",
  track: "Backend",
  skills: ["Node.js", "PostgreSQL"],
  projects: { completed: 2, ongoing: 1 },
  isAvailable: true,
  mentor: null
};

const developersWithNewMember =
  addDeveloper(developers, newDeveloper);

console.log("Step 4: Add a New Developer");
console.log(
  `Original Length: ${developers.length}`
);
console.log(
  `New Length: ${developersWithNewMember.length}`
);


// Step 5: Update a Developer


const updateDeveloper = (
  developers,
  id,
  updates
) => {
  return developers.map(developer =>
    developer.id === id
      ? { ...developer, ...updates }
      : developer
  );
};

const updatedDevelopers =
  updateDeveloper(developers, 4, {
    skills: [
      "Dart",
      "Flutter",
      "Firebase"
    ],
    isAvailable: false
  });

const updatedEmeka =
  updatedDevelopers.find(
    developer => developer.id === 4
  );

console.log("Step 5: Update a Developer");
console.log(updatedEmeka);


// Step 6: Mentor Workload

const mentorWorkload = developers.reduce(
  (result, developer) => {
    const mentorName =
      developer.mentor?.name ??
      "Unassigned";

    result[mentorName] =
      (result[mentorName] || 0) + 1;

    return result;
  },
  {}
);

console.log("Step 6: Mentor Workload");
console.log(mentorWorkload);


// Step 7: Experience Ranking

const ranking = [...developers]
  .sort(
    (
      { projects: projectA },
      { projects: projectB }
    ) =>
      (projectB.completed +
        projectB.ongoing) -
      (projectA.completed +
        projectA.ongoing)
  )
  .map((developer, index) => {
    const totalProjects =
      developer.projects.completed +
      developer.projects.ongoing;

    const medal =
      index === 0
        ? "🥇"
        : index === 1
        ? "🥈"
        : index === 2
        ? "🥉"
        : "";

    return `${medal} ${index + 1}. ${
      developer.name
    } - ${totalProjects} projects`;
  });

console.log("Step 7: Experience Ranking");

ranking.forEach(item =>
  console.log(item)
);

