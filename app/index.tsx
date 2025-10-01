import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function ModalScreen() {
	// Workaround: ignore SSL errors for development only
	const onShouldStartLoadWithRequest = (event: any) => {
		// Always allow loading
		return true;
	};

	const onReceivedError = (syntheticEvent: any) => {
		const { nativeEvent } = syntheticEvent;
		if (nativeEvent.description.includes("SSL")) {
			// Optionally, you can show a custom error or reload logic here
			// For now, just ignore
		}
	};

	return (
		<ThemedView style={styles.container}>
			<WebView
				source={{ uri: "https://taxicity.mpotulo.com" }}
				style={{ flex: 1, width: "100%" }}
				startInLoadingState
				javaScriptEnabled
				domStorageEnabled
				originWhitelist={["*"]}
				onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
				onError={onReceivedError}
				androidHardwareAccelerationDisabled={true}
				mixedContentMode="always"
			/>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 0,
		backgroundColor: "transparent",
	},
});
