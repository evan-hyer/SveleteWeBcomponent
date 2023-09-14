// Import your Svelte component
import App from '../../App.svelte';

// Define your web component
customElements.define(
  'example-app', // Custom element name in HTML
  class extends HTMLElement {
    constructor() {
      super();

      // Create a shadow DOM for your web component
      const shadowRoot = this.attachShadow({ mode: 'open' });

      // Instantiate the Svelte component within the shadow DOM
      const SvelteComponent = new App({
        target: shadowRoot,
        props: {}, // You can pass props to your Svelte component here
      });
    }

    // You can implement other lifecycle methods as needed, such as disconnectedCallback
  }
);
