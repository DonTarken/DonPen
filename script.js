var $html = document.getElementById("html");
var $css = document.getElementById("css");
var $js = document.getElementById("js");



var editor1 = CodeMirror.fromTextArea($html, {
    mode: "xml",
    theme: "monokai",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    lineWrapping: true
});
var editor2 = CodeMirror.fromTextArea($css, {
    mode: "css",
    theme: "monokai",
    lineNumbers: true,
    autoCloseBrackets: true,
    lineWrapping: true
});
var editor3 = CodeMirror.fromTextArea($js, {
    mode: "javascript",
    theme: "monokai",
    lineNumbers: true,
    autoCloseBrackets: true,
    lineWrapping: true
});

// On html input
editor1.on("change", createNewHTMLDocument);
// debugger;
// On css input
editor2.on("change", createNewHTMLDocument);

// On js input
editor3.on("change", createNewHTMLDocument);

// editor1.on('inputRead', createNewHTMLDocument);
// editor2.on('inputRead', createNewHTMLDocument);
// editor3.on('inputRead', createNewHTMLDocument);

function createNewHTMLDocument()
{

    
    let frame = document.getElementById("iframe");            
    let docu = document.implementation.createHTMLDocument("frameDoc");
    
    // Fill our document fields

        let script = docu.createElement("script");
        let css = docu.createElement("style");

        docu.body.innerHTML = editor1.getValue();
        css.innerHTML = editor2.getValue();   
        docu.head.append(css);

        script.innerHTML = editor3.getValue();
        docu.body.append(script);
    // Replace iframe document  
    frame.srcdoc = new XMLSerializer().serializeToString(docu);
    
}


// Create new html doc from url base64 encoded