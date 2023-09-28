
function run(){
    let htmlCode=document.getElementById('html-code').value;
    let CssCode=document.getElementById('css-code').value;
    let JSCode=document.getElementById('js-code').value;
    let Output=document.getElementById('output');
     

    //  here we are using content document because our iframe is creating another document inside it original document 
    // so we insert inside the iframe document
    Output.contentDocument.body.innerHTML=htmlCode;

// for css
    let style=document.createElement('style');
    style.append(CssCode);
    Output.contentDocument.head.append(style);
// for js
   let script=document.createElement('script');
   script.append(JSCode);
   Output.contentDocument.body.append(script)
    // Output.contenWindow.eval(JSCode)
    // let ele=contentDocument.getElementById('try');
    // console.log(ele);
}


