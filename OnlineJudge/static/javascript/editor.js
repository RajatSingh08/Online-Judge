// Hook up ACE editor to all textareas with data-editor attribute
$(function() {
    $('textarea[data-editor]').each(function() {
        var textarea = $(this);
        var mode = textarea.data('editor');
        var editDiv = $('<div>', {
            position: 'absolute',
            width: textarea.width(),
            height: textarea.height(),
            'class': textarea.attr('class')
        }).insertBefore(textarea);
        textarea.css('display', 'none');
        var editor = ace.edit(editDiv[0]);
        editor.renderer.setShowGutter(textarea.data('gutter'));
        editor.getSession().setValue(textarea.val());
        editor.getSession().setMode("ace/mode/" + mode);
        editor.setTheme("ace/theme/idle_fingers");
    
        // copy back to textarea on form submit...
        textarea.closest('form').submit(function() {
            textarea.val(editor.getSession().getValue());
        })
    });
  });