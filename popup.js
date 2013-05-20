function printSelectedText(){
			chrome.tabs.executeScript(null, {code:"alert(window.getSelection().toString());"});
}

document.getElementById("selectedAdder").addEventListener("click",printSelectedText);