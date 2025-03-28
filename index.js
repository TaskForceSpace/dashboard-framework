// Components
import Button from "./src/components/Button.vue";
import Header from "./src/components/Header.vue";
import Dialog from "./src/components/Dialog.vue";
import HeaderData from "./src/components/HeaderData.vue";
import HeaderEditor from "./src/components/HeaderEditor.vue";
import Input from "./src/components/Input.vue";
import FormField from "./src/components/FormField.vue";
import FormContainer from "./src/components/FormContainer.vue";
import InfoContainer from "./src/components/InfoContainer.vue";
import InfoRow from "./src/components/InfoRow.vue";
import Spinner from "./src/components/Spinner.vue";
import SideNavigation from "./src/components/SideNavigation.vue";

// Views
import SideNavView from "./src/views/SideNavView.vue";
import LoginView from "./src/views/LoginView.vue";

export {
	Input,
	Header,
	Button,
	Dialog,
	InfoContainer,
	InfoRow,
	SideNavigation,
	HeaderEditor,
	HeaderData,
	FormField,
	FormContainer,
	Spinner,
	SideNavView,
	LoginView
};

export default {
	install(app) {
		app.component("Button", Button);
		app.component("Dialog", Dialog);
		app.component("Input", Input);
		app.component("SideNavigation", SideNavigation);
		app.component("Header", Header);
		app.component("HeaderEditor", HeaderEditor);
		app.component("FormContainer", FormContainer);
		app.component("FormField", FormField);
		app.component("InfoContainer", InfoContainer);
		app.component("InfoRow", InfoRow);
		app.component("Spinner", Spinner);

		app.component("SideNavView", SideNavView);
		app.component("LoginView", LoginView);
	}
}