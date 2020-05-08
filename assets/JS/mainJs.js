function copyModule() {
  $('#copyReady').click( function(){
    const $textArea = $('#captionZone');
    const oldText = $textArea.val();
    const newText = oldText.replace(/(?:\r\n|\r|\n)/g, "\u2063\n");
    $textArea.val(newText).select();
    document.execCommand('copy');
    $textArea.val(oldText);
  });
}


/*$('#captionZone').val(
  $('#captionZone').val().replace(/(?:\r\n|\r|\n)/g, "yoyo")*/
