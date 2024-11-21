import { ComponentType } from "react";

export interface Route {
	path: string;
	element: ComponentType;
}

export interface ICategory {
	id: number;
	name: string;
	image: string;
}

export interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	images: string[];
	purchases: number;
	quantity: number;
	availableQuantity: number;
	category: {
		id: number;
		name: string;
		image: string;
	};
	discount?: IDiscount;
}

export interface IUserLogin {
	email?: string;
	phone?: string;
	password: string;
}

export interface IUser extends IUserLogin {
	id?: number;
	name: string;
	avatar?: string;
	phone?: string;
}

export interface IParams {
	title: string;
	price_min: number;
	price_max: number;
	limit: number;
	offset: number;
	categoryId: string | undefined;
}

export interface IReview {
	id: number;
	text: string;
	rating: number;
	user_id: number;
	media_urls?: string[];
	user_name?: string;
	user_avatar?: string;
	created_at: string;
	order_id: number;
}

export interface ReviewResponse {
	id: number;
	user_id: number;
	product_id: number;
	text: string;
	rating: number;
	media_urls: string[];
	created_at: string;
}

export interface IDiscount {
	id: number;
	type: "REGULAR" | "EVENT_11_11" | "BLACK_FRIDAY";
	percentage: number;
	start_date: string;
	end_date: string;
}

export interface CurrencyRates {
	[key: string]: number;
	RUB: number;
	USD: number;
	EUR: number;
	CNY: number;
	KZT: number;
	BYN: number;
}

export interface ICoordinates {
	lat: number;
	lng: number;
}

export interface ILocation {
	id: number;
	city: string;
	region: string;
	address: string;
	coordinates: ICoordinates;
	deliveryDays: number;
	deliveryMode: "pickup" | "courier";
	deliverySpeed: "regular" | "fast" | null;
}

export interface IDeliveryInfo {
	location: ILocation | null;
	zone_id: number;
	selectedItems: number[];
	deliveryCost: number;
	deliveryMode: 'pickup' | 'courier';
	deliverySpeed: 'regular' | 'fast' | null;
}

export interface IDeliveryPoint {
	id: number;
	city: string;
	address: string;
	lat: number;
	lng: number;
	delivery_days: number;
	base_delivery_days: number;
	zone_name: string;
	zone_id: number;
}

export interface IDeliveryZone {
	id: number;
	name: string;
	deliveryPoints: IDeliveryPoint[];
	baseDeliveryDays: number;
}

export interface IProductDeliveryTime {
	productId: number;
	deliveryDays: number;
}

export interface IFavoriteProduct extends IProduct {
	date_added: string;
}

export interface IUserProfile {
	personalInfo: {
		name: string;
		email: string;
		phone?: string;
		avatar?: string;
	};
	purchaseHistory: IPurchaseHistory[];
	reviewHistory: {
		submitted: IReview[];
		pending: IPendingReview[];
	}
}

export interface IPurchaseHistory {
	order_id: number;
	date: string;
	currency: string;
	order_number: number;
	products: {
		id: number;
		title: string;
		price: number;
		quantity: number;
		image: string;
	}[];
	total: number;
	status: string;
}

export interface ISubmittedReview {
	id: number;
	text: string;
	rating: number;
	media_urls: string[];
	created_at: string;
	product_id: number;
	product_title: string;
	order_id: number;
}

export interface IPendingReview {
	product_id: number;
	product_title: string;
	product_image: string;
	purchase_date: string;
	order_status: OrderStatus;
	can_review: boolean;
}

export interface IReviewHistory {
	submitted: ISubmittedReview[];
	pending: IPendingReview[];
}

export interface DeliveryTimeRequestData {
	productIds: number[];
	deliveryMode: 'courier' | 'pickup';
	deliverySpeed?: 'regular' | 'fast' | null;
	coordinates?: {
		lat: number;
		lng: number;
	};
	locationId?: number;
}

export interface CheckoutRequest {
	cart: ICartProduct[];
	totalQuantity: number;
	location: LocationType;
	currency: string;
}

export type OrderStatus = 'new' | 'cancelled' | 'delivered';

export interface IOrder {
	id: number;
	order_number: number;
	date: string;
	total: number;
	currency: string;
	status: OrderStatus;
	delivery_speed: 'regular' | 'fast' | null;
	products: {
		id: number;
		title: string;
		price: number;
		quantity: number;
		image: string;
		expected_delivery_date: string;
	}[];
}
