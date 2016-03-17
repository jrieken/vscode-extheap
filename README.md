## Monitor the heap usage on the extension host process

Adds an output channel which prints information about garbage collection.


## Install

### Option 1

1. in the terminal navigate to the extension directory, like `cd ~/.vscode/extensions`
2. clone this repo into that folder with `git clone https://github.com/jrieken/vscode-extheap.git`
3. install dependencies with `cd vscode-extheap && npm install`


### Option 2

1. clone repo with `git clone https://github.com/jrieken/vscode-extheap.git`
2. install dependencies with `cd vscode-extheap && npm install`
3. package the extension with `vsce package`
4. open the vsix with VS and follow the instructions
