const DUMMY_MESSAGES = [
	{
		_id: 1,
		content: "Kem Chho",
		sameAuthor: false,
		author: {
			username: "Vinay",
		},
		date: "22/06/2022",
		sameDay: false,
	},
	{
		_id: 2,
		content: "hello once again",
		sameAuthor: true,
		author: {
			username: "ABC",
		},
		date: "22/06/2022",
		sameDay: true,
	},
	{
		_id: 3,
		content: "Bas Bahot Hua",
		sameAuthor: true,
		author: {
			username: "XYZ",
		},
		date: "23/06/2022",
		sameDay: false,
	},
	{
		_id: 4,
		content: "Nope",
		sameAuthor: false,
		author: {
			username: "JKL",
		},
		date: "23/06/2022",
		sameDay: true,
	},
	{
		_id: 5,
		content: "WTH",
		sameAuthor: true,
		author: {
			username: "IOP",
		},
		date: "24/06/2022",
		sameDay: false,
	},
];

export default DUMMY_MESSAGES;
