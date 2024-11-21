import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

export const fetchCurrencyRates = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/currency-rates`);
		const rates = response.data.Valute;

		return {
			RUB: 1,
			KZT: rates.KZT.Value / rates.KZT.Nominal,
			BYN: rates.BYN.Value,
			KGS: rates.KGS.Value / rates.KGS.Nominal,
			AMD: rates.AMD.Value / rates.AMD.Nominal,
			UZS: rates.UZS.Value / rates.UZS.Nominal
		};
	} catch (error) {
		console.error("Ошибка при получении курсов валют:", error);
		return null;
	}
};
