// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"“绳索”与“棍棒”是人类最早发明的两种工具。绳索可以将好东西收归在身边，棍棒则可以抵挡麻烦。两者皆是我们最早的朋友，皆由我们创造。有人的地方，就有绳索与棍棒。",
		date: "2026-02-26T14:52:00Z",
		images: [
			"/images/diary/F1.webp",
			"/images/diary/F1_2.png",
			"/images/diary/Death_Stranding00.webp",
			"/images/diary/Death_Stranding01.webp",
			"/images/diary/Death_Stranding02.webp",
			"/images/diary/Death_Stranding03.webp",
			"/images/diary/Death_Stranding04.webp",
			"/images/diary/Death_Stranding05.webp",
			"/images/diary/Death_Stranding06.webp",
			"/images/diary/Death_Stranding07.webp",
			"/images/diary/HD.webp",
			"/images/diary/HD2.webp",
			"/images/diary/HD3.webp",
			"/images/diary/tk.webp",
			"/images/diary/wb.webp",
			"/images/diary/xq.webp",
		],
	},
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		if (item.tags) {
			for (const tag of item.tags) {
				tags.add(tag);
			}
		}
	}
	return Array.from(tags).sort();
};
