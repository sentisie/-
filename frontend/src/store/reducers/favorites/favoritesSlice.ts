import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavoriteProduct } from "../../../types/types";
import { addFavorite, removeFavorite } from "./favoriteActionCreator";
import { fetchFavorites } from "./favoriteActionCreator";
import { toast } from "react-toastify";

interface FavoritesState {
	favorites: IFavoriteProduct[];
	isLoading: boolean;
	error: string | null;
}

const initialState: FavoritesState = {
	favorites: [],
	isLoading: false,
	error: null,
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		resetFavorites(state) {
			state.favorites = [];
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFavorites.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(
				fetchFavorites.fulfilled,
				(state, action: PayloadAction<IFavoriteProduct[]>) => {
					state.isLoading = false;
					state.favorites = [...state.favorites, ...action.payload];
					state.error = null;
				}
			)
			.addCase(fetchFavorites.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(
				addFavorite.fulfilled,
				(state, action: PayloadAction<IFavoriteProduct>) => {
					state.favorites.push(action.payload);
					localStorage.setItem("favorites", JSON.stringify(state.favorites));
				}
			)
			.addCase(addFavorite.rejected, (state, action) => {
				state.error = action.payload as string;
				toast.warning(state.error);
			})
			.addCase(
				removeFavorite.fulfilled,
				(state, action: PayloadAction<number>) => {
					state.favorites = state.favorites.filter(
						(item) => item.id !== action.payload
					);
					localStorage.setItem("favorites", JSON.stringify(state.favorites));
				}
			);
	},
});

export const { resetFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
