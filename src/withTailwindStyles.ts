import tailwindStyles from "./style.css?inline";
import { defineCustomElement } from "vue";

export function withTailwindStyles(
  component: ReturnType<typeof defineCustomElement>,
  componentStyles?: string // Adicionar suporte a estilos específicos do componente
) {
  const originalConnectedCallback = component.prototype.connectedCallback;

  component.prototype.connectedCallback = function () {
    if (this.shadowRoot) {
      // Adicionar estilos do Tailwind, se ainda não adicionados
      if (!this.shadowRoot.querySelector("style[data-tailwind]")) {
        const tailwindStyleTag = document.createElement("style");
        tailwindStyleTag.textContent = tailwindStyles;
        tailwindStyleTag.setAttribute("data-tailwind", "true");
        this.shadowRoot.appendChild(tailwindStyleTag);
      }

      // Adicionar estilos específicos do componente, se fornecidos
      if (
        componentStyles &&
        !this.shadowRoot.querySelector("style[data-component]")
      ) {
        const componentStyleTag = document.createElement("style");
        componentStyleTag.textContent = componentStyles;
        componentStyleTag.setAttribute("data-component", "true");
        this.shadowRoot.appendChild(componentStyleTag);
      }
    }

    if (originalConnectedCallback) {
      originalConnectedCallback.call(this);
    }
  };

  return component;
}
