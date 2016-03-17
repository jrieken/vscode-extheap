var path = require('path');
var vscode = require('vscode');
var gc = require('gc-stats')();
var heapdump = require('heapdump');


function activate(context) {

	var output = vscode.window.createOutputChannel('GC Stats');

	gc.on('stats', function onDidGc (stats) {
		output.appendLine('garbage collected');
		output.appendLine('============================================================');
		output.appendLine(JSON.stringify(stats, null, '\t'));
	});

	var command1 = vscode.commands.registerCommand('gc.showStats', function () {
		output.show();
	});

	var command2 = vscode.commands.registerCommand('gc.dumpHeap', function () {
		var filename = path.join(vscode.workspace.rootPath, Date.now() + '.heapsnapshot');
		heapdump.writeSnapshot(filename);
	});

	context.subscriptions.push(command1);
	context.subscriptions.push(command2);
	context.subscriptions.push(output);
}

exports.activate = activate;
