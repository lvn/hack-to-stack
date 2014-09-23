var main = function() {
  walk(document.body);

  function walk(node) 
  {
    // stolen from http://is.gd/mwZp7E
    
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
    v = v.replace(/hack/g, "stack");
    v = v.replace(/Hack/g, "Stack");
    textNode.nodeValue = v;
  }
};

main();