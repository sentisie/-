import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "../../routes/routes";
import Home from "../../pages/Home";

const AppRouter: FC = () => {
	const location = useLocation();

	return (
		<Routes location={location}>
			{routes.map((route) => (
				<Route key={route.path} element={<route.element />} path={route.path} />
			))}
			<Route path="/*" element={<Home />} />
		</Routes>
	);
};

export default AppRouter;
