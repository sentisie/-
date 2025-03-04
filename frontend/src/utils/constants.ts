export const BASE_URL = "http://localhost:5000/api";

export const SIGN_UP = "sign-up";
export const LOGIN = "login";
export const UPDATE = "update";

export const SIGN_UP_VALUES = { name: "", email: "", password: "", avatar: "" };
export const LOGIN_VALUES = { email: "", password: "" };

export const currencyRates = {
	RUB: { name: "Российский рубль", symbol: "₽", flag: "🇷🇺" },
	KZT: { name: "Казахстанский тенге", symbol: "₸", flag: "🇰🇿" },
	BYN: { name: "Белорусский рубль", symbol: "Br", flag: "🇧🇾" },
	KGS: { name: "Кыргызский сом", symbol: "с", flag: "🇰🇬" },
	AMD: { name: "Армянский драм", symbol: "֏", flag: "🇦🇲" },
	UZS: { name: "Узбекский сум", symbol: "so'm", flag: "🇺🇿" },
};

export const cities = [
	{ name: "Москва", coordinates: [55.7558, 37.6176] },
	{ name: "Екатеринбург", coordinates: [56.8389, 60.6057] },
	{ name: "Нижний Новгород", coordinates: [56.2965, 43.9361] },
	{ name: "Казань", coordinates: [55.8304, 49.0661] },
	{ name: "Челябинск", coordinates: [55.1644, 61.4368] },
	{ name: "Омск", coordinates: [54.9885, 73.3242] },
	{ name: "Самара", coordinates: [53.1959, 50.1008] },
	{ name: "Ростов-на-Дону", coordinates: [47.2357, 39.7015] },
	{ name: "Уфа", coordinates: [54.7388, 55.9721] },
	{ name: "Красноярск", coordinates: [56.0153, 92.8932] },
	{ name: "Пермь", coordinates: [58.0105, 56.2502] },
	{ name: "Воронеж", coordinates: [51.6615, 39.2003] },
	{ name: "Волгоград", coordinates: [48.708, 44.5133] },
	{ name: "Краснодар", coordinates: [45.0355, 38.9753] },
	{ name: "Саратов", coordinates: [51.53, 46.0342] },
	{ name: "Тюмень", coordinates: [57.1522, 65.5272] },
	{ name: "Тольятти", coordinates: [53.5303, 49.3461] },
	{ name: "Ижевск", coordinates: [56.8526, 53.2045] },
	{ name: "Барнаул", coordinates: [53.3478, 83.7787] },
	{ name: "Ульяновск", coordinates: [54.3142, 48.4031] },
	{ name: "Иркутск", coordinates: [52.2869, 104.305] },
	{ name: "Хабаровск", coordinates: [48.4802, 135.0719] },
	{ name: "Ярославль", coordinates: [57.6261, 39.8845] },
	{ name: "Владивосток", coordinates: [43.1155, 131.8855] },
	{ name: "Махачкала", coordinates: [42.9849, 47.5047] },
	{ name: "Томск", coordinates: [56.4846, 84.9482] },
	{ name: "Оренбург", coordinates: [51.7682, 55.0969] },
	{ name: "Кемерово", coordinates: [55.355, 86.0869] },
	{ name: "Новокузнецк", coordinates: [53.7557, 87.1099] },
	{ name: "Рязань", coordinates: [54.6251, 39.7352] },
	{ name: "Астрахань", coordinates: [46.3476, 48.0336] },
	{ name: "Пенза", coordinates: [53.1959, 45.0183] },
	{ name: "Липецк", coordinates: [52.6031, 39.5708] },
	{ name: "Киров", coordinates: [58.6035, 49.6679] },
	{ name: "Чебоксары", coordinates: [56.1439, 47.2489] },
	{ name: "Тула", coordinates: [54.192, 37.6156] },
	{ name: "Курск", coordinates: [51.7308, 36.1939] },
	{ name: "Ставрополь", coordinates: [45.0445, 41.969] },
	{ name: "Улан-Удэ", coordinates: [51.8335, 107.5844] },
	{ name: "Севастополь", coordinates: [44.6166, 33.5254] },
	{ name: "Тверь", coordinates: [56.8587, 35.9176] },
	{ name: "Магнитогорск", coordinates: [53.4072, 58.9791] },
	{ name: "Иваново", coordinates: [57.0, 40.9739] },
	{ name: "Брянск", coordinates: [53.242, 34.3657] },
	{ name: "Белгород", coordinates: [50.5975, 36.588] },
	{ name: "Сочи", coordinates: [43.6028, 39.7342] },
	{ name: "Набережные Челны", coordinates: [55.7435, 52.3996] },
	{ name: "Владимир", coordinates: [56.1291, 40.4066] },
	{ name: "Архангельск", coordinates: [64.5399, 40.5152] },
	{ name: "Сургут", coordinates: [61.254, 73.3962] },
	{ name: "Чита", coordinates: [52.034, 113.4995] },
	{ name: "Калуга", coordinates: [54.507, 36.2525] },
	{ name: "Смоленск", coordinates: [54.7826, 32.0453] },
	{ name: "Волжский", coordinates: [48.7863, 44.7797] },
	{ name: "Курган", coordinates: [55.44, 65.3411] },
	{ name: "Сыктывкар", coordinates: [61.6688, 50.8356] },
	{ name: "Стерлитамак", coordinates: [53.6333, 55.95] },
	{ name: "Нижнекамск", coordinates: [55.631, 51.8149] },
	{ name: "Новороссийск", coordinates: [44.7235, 37.7689] },
];
