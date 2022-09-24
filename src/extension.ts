import * as vscode from 'vscode';
import { workspace, window, ExtensionContext, TextDocument, OutputChannel, WorkspaceFolder, Uri } from "vscode";
import { LanguageClient, LanguageClientOptions, TransportKind } from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	const pathToLangServer = '/home/sebastian/surrealdb/target/debug/surreal'
	const serverArguments = ['lsp']

	const server = {
		command: pathToLangServer,
		args: serverArguments
	}

	client = new LanguageClient('surrealdb1', {
		run: server,
		debug: server
	}, {
		documentSelector: [
			{ scheme: 'file', language: 'surrealql' }
		]
	})

	client.start()
}


export function deactivate() {
	if(client) {
		return client.stop()
	}
}