import {
  defineCustomElement,
  type ExtractPropTypes,
  type VueElementConstructor,
} from "vue";
import { withTailwindStyles } from "./withTailwindStyles";
import MenuSidebar from "./webComponents/molecules/menuSidebar/MenuSidebar.vue";
import FooterCe from "./webComponents/molecules/footer/Footer.ce.vue";
import MenuHeader from "./webComponents/molecules/menuHeader/MenuHeader.ce.vue";
import GridCe from "../src/webComponents/atoms/gridHomepage/Grid.ce.vue";

type MenuSidebarProps = ExtractPropTypes<typeof MenuSidebar.props>;
type FooterCeProps = ExtractPropTypes<typeof FooterCe.props>;
type MenuHeaderProps = ExtractPropTypes<typeof MenuHeader.props>;
type GridCeProps = ExtractPropTypes<typeof GridCe.props>;

const MenuHeaderComponent = withTailwindStyles(
  defineCustomElement(MenuHeader)
) as VueElementConstructor<MenuHeaderProps>;

const MenuSidebarComponent = withTailwindStyles(
  defineCustomElement(MenuSidebar)
) as VueElementConstructor<MenuSidebarProps>;

const FooterComponent = withTailwindStyles(
  defineCustomElement(FooterCe)
) as VueElementConstructor<FooterCeProps>;

const GridComponent = withTailwindStyles(
  defineCustomElement(GridCe)
) as VueElementConstructor<GridCeProps>;

customElements.define("ce-menu-sidebar", MenuSidebarComponent);
customElements.define("ce-footer", FooterComponent);
customElements.define("ce-menu-header", MenuHeaderComponent);
customElements.define("ce-grid", GridComponent);

export {
  MenuSidebarComponent,
  FooterComponent,
  MenuHeaderComponent,
  GridComponent,
};
