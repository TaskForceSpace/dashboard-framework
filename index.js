// Components
import Button from "./src/components/Button.vue";
import Header from "./src/components/Header.vue";
import HeaderData from "./src/components/HeaderData.vue";
import HeaderEditor from "./src/components/HeaderEditor.vue";
import Input from "./src/components/Input.vue";
import FormField from "./src/components/FormField.vue";
import FormContainer from "./src/components/FormContainer.vue";
import InfoContainer from "./src/components/InfoContainer.vue";
import InfoRow from "./src/components/InfoRow.vue";
import SideNavigation from "./src/components/SideNavigation.vue";

// Views
import SideNavView from "./src/views/SideNavView.vue";

export {
	Input,
	Header,
	Button,
	InfoContainer,
	InfoRow,
	SideNavigation,
	SideNavView,
	HeaderEditor,
	HeaderData,
	FormField,
	FormContainer
};

export default {
	install(app) {
		app.component("Button", Button);
		app.component("Input", Input);
		app.component("SideNavigation", SideNavigation);
		app.component("Header", Header);
		app.component("HeaderEditor", HeaderEditor);
		app.component("SideNavView", SideNavView);
		app.component("FormContainer", FormContainer);
		app.component("FormField", FormField);
		app.component("InfoContainer", InfoContainer);
		app.component("InfoRow", InfoRow);
	}
}