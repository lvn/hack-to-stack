  (function(){
  walk(document.body);

  function walk(node) 
  {
    // I stole this function from here:
    // http://is.gd/mwZp7E
    
    var child, next;

    switch ( node.nodeType )  
    {
      case 1:  // Element
      case 9:  // Document
      case 11: // Document fragment
        child = node.firstChild;
        while ( child ) 
        {
          next = child.nextSibling;
          walk(child);
          child = next;
        }
        break;
      case 3: // Text node
        if(node.parentElement.tagName.toLowerCase() != "script") {
            handleText(node);
        }
        break;
    }
  }

  function handleText(textNode) {
    var v = textNode.nodeValue;

    // Deal with the easy case
    if(v.match(/force/i)) {
      v = v.replace(/(F|f)orce/gi, function(match, p1, offset, string) {
        // f + 2 = h
        b = String.fromCharCode(p1.charCodeAt(0) + 2);
        return b + "orse";
      });
    }
    if(v.match(/forcing/i)) {
      v = v.replace(/(F|f)orcing/gi, function(match, p1, offset, string) {
        // f + 2 = h
        b = String.fromCharCode(p1.charCodeAt(0) + 2);
        return b + "orseing";
      });
    }
    textNode.nodeValue = v;
  }
})();