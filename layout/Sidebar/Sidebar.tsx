import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css"
import cn from "classnames"
import { Menu } from "../Menu/Menu";
import { Search } from "../../components/Search/Search";


export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<Search />
			<Menu />
		</div>
	);
} 