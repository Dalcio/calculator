function insertAtCaretPosition(node, html) {
  node.focus();
  if (window.getSelection) {
    const selection = window.getSelection();
    if (selection.getRangeAt && selection.rangeCount) {
      const range = window.getSelection().getRangeAt(0);
      const node = range.createContextualFragment(html);
      range.insertNode(node);
      // debugger
      // range.deleteContents();
    } else if (document.selection && document.selection.createRange) {
      document.selection.createRange().pasteHTML(html);
    }
  }
}

function removeAtCaretPos(params) {}
