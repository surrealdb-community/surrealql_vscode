import { workspace, window, ExtensionContext, WorkspaceFolder, Uri } from "vscode";
import { LanguageClient, LanguageClientOptions, TransportKind } from "vscode-languageclient/node";

let client: LanguageClient;

export async function activate(ctx: ExtensionContext) {
	const pathToServer = (workspace.getConfiguration().get('surrealql.lsp.exec') ?? 'surreal') as string

	const server = {
		command: pathToServer,
		args: ['lsp']
	}

	client = new LanguageClient('surrealql', 
		{
			run: server,
			debug: server
		}, 
		{
			documentSelector: [
				{ scheme: 'file', language: 'surrealql' }
			]
		}
	)

	try {
		await client.start()
		client.outputChannel.show()
	} catch (ex) {
		window.showErrorMessage('Language Server could not be started make sure [surrealql.lsp.exec] points to the correct executable!')
	}
}


export function deactivate() {
	if(client) {
		return client.stop()
	}
}