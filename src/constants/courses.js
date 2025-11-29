export const courses = [
    { id: 1, title: "React", level: "beginner", category: "Frontend", description: "Курс для тих, хто хоче навчитися React з нуля." },
    { id: 2, title: "Vue", level: "intermediate", category: "Frontend", description: "Поглиблене вивчення Vue та Composition API." },
    { id: 3, title: "Angular", level: "advanced", category: "Frontend", description: "Серйозний фреймворк для серйозних людей." },
    { id: 4, title: "Як вишивати хрестиком", level: "beginner", category: "Хобі", description: "Заспокоює, розвиває, приносить задоволення." },
    { id: 5, title: "Advanced Crying in IT", level: "intermediate", category: "Soft skills", description: "Глибокий психологічний воркшоп для айтішників." },
    { id: 6, title: "Як вдало вийти заміж", level: "advanced", category: "Лайфстайл", description: "Теорія, практика та реальні кейси." },
];

export const findCourseById = (id) =>
    courses.find((course) => course.id === Number(id));
