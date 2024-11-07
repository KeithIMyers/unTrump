function blackoutWords() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );

  let node;
  const regex = /\btrump\b/gi;
  while ((node = walker.nextNode())) {
    node.nodeValue = node.nodeValue.replace(regex, function() {
      return '██████';
    });
  }
}

// Blackout words when the document is loaded
window.addEventListener('load', blackoutWords);
