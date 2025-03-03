// Components
import Button from "./src/components/Button.vue";
import HeaderData from "./src/components/HeaderData.vue";
import HeaderEditor from "./src/components/HeaderEditor.vue";
import Input from "./src/components/Input.vue";
import FormField from "./src/components/FormField.vue";
import FormContainer from "./src/components/FormContainer.vue";
import SideNavigation from "./src/components/SideNavigation.vue";

// Views
import SideNavView from "./src/views/SideNavView.vue";

export {Input,Button, SideNavigation, SideNavView, HeaderEditor, HeaderData, FormField, FormContainer};

export default {
	install(app) {
		app.component("Button", Button);
		app.component("Input", Input);
		app.component("SideNavigation", SideNavigation);
		app.component("HeaderEditor", HeaderEditor);
		app.component("SideNavView", SideNavView);
		app.component("FormField", FormField);
		app.component("FormContainer", FormContainer);
	}
}