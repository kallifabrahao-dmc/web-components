import {
  defineCustomElement,
  type ExtractPropTypes,
  type VueElementConstructor,
} from "vue";
import { withTailwindStyles } from "./withTailwindStyles";
import MenuSidebar from "../src/webComponents/molecules/MenuSidebar/MenuSidebar.vue";
import FooterCe from "../src/webComponents/molecules/Footer/Footer.ce.vue";

type MenuSidebarProps = ExtractPropTypes<typeof MenuSidebar.props>;
type FooterCeProps = ExtractPropTypes<typeof FooterCe.props>;

const MenuSidebarComponent = withTailwindStyles(
  defineCustomElement(MenuSidebar)
) as VueElementConstructor<MenuSidebarProps>;

const FooterComponent = withTailwindStyles(
  defineCustomElement(FooterCe)
) as VueElementConstructor<FooterCeProps>;

customElements.define("ce-menu-sidebar", MenuSidebarComponent);
customElements.define("ce-footer", FooterComponent);

export { MenuSidebarComponent, FooterComponent };
