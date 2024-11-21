import { FC } from "react";
import Poster from "../components/poster/Poster";
import {
	useGetTopProductsQuery,
	useGetPriceProductsQuery,
	useGetTopRatedProductsQuery,
} from "../services/ProductServices";
import SliderProducts from "../components/products/SliderProducts";
import NewsletterSubscription from "../components/newsletter/NewsletterSubscription";
import EventBanner from "../components/banner/EventBanner/EventBanner";
import SaleBanner from "../components/banner/SaleBanner/SaleBanner";

const Home: FC = () => {
	const {
		data: topProducts = [],
		isLoading: isTopLoading,
		error: topError,
	} = useGetTopProductsQuery();
	const {
		data: priceProducts = [],
		isLoading: isPriceLoading,
		error: priceError,
	} = useGetPriceProductsQuery(1500);
	const {
		data: topRatedProducts = [],
		isLoading: isRatedLoading,
		error: ratedError,
	} = useGetTopRatedProductsQuery();

	const isLoading = isTopLoading || isPriceLoading || isRatedLoading;
	const error = topError || priceError || ratedError;

	return (
		<>
			<Poster />
			{topProducts.length > 0 && (
				<SliderProducts
					products={topProducts}
					amount={18}
					title="Берут чаще всего"
					isLoading={isLoading}
					error={error ? "Ошибка при загрузке продуктов" : null}
				/>
			)}
			{priceProducts.length > 0 && (
				<SliderProducts
					isLoading={isLoading}
					error={error ? "Ошибка при загрузке продуктов" : null}
					products={priceProducts}
					amount={18}
					title="Выгодное до 1500 ₽"
				/>
			)}
			<EventBanner />
			{topRatedProducts.length > 0 && (
				<SliderProducts
					isLoading={isLoading}
					error={error ? "Ошибка при загрузке продуктов" : null}
					products={topRatedProducts}
					amount={18}
					title="Лучшее по мнению покупателей"
				/>
			)}
			<NewsletterSubscription />
			<SaleBanner />
		</>
	);
};

export default Home;
