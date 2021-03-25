(function ($) {

    $.fn.ellipsis = function (options) {
        var settings = $.extend({
            // 기본 설정
            line: null,
            bulletActive:true,
        }, options);

        var line = settings.line;
        var bulletActive = settings.bulletActive;
        $.each($(this), function (index, container) {

            var $content = $(this).css("overflow", "hidden");
            var useLineHeight = parseInt($content.css('line-height'));
            var nanLineHeight = parseInt($content.css('font-size')) * 1.4;
            var lineHeight = isNaN(useLineHeight) == false ? useLineHeight : nanLineHeight;
            var multi = line;
            var thisClone = $(this.cloneNode(true)).hide()
                .css('position', 'absolute')
                .css('overflow', 'visible')
                .width(multi ? $content.width() : 'auto')
                .height(multi ? 'auto' : $content.height());

            $content.after(thisClone);

            function height() {
                if (line) {
                    return thisClone.height() > lineHeight * line;
                } else {
                    return thisClone.height() > $content.height();
                }
            };

            function width() {
                return thisClone.width() > $content.width();
            };

            function set_text(elem){
                elem = elem.trim();
                bulletActive ? thisClone.html(elem + "...") : '';
            };
            
            var text = thisClone.html();
            var func = multi ? height : width;
     
            while (text.length > 0) {
                thisClone.html(text);
                text = text.substr(0, text.length - 1);

                if(!func()){
                    set_text(text);
                    break;
                }
            }
            
            $content.html(thisClone.html());
            thisClone.remove();
        });
    };
})(jQuery);

ex)
$('.post-title').ellipsis();
$('.post-content-text').ellipsis({line:2});
$('.ellipsis').ellipsis();
$('.ellipsis-line2').ellipsis({line:2});
.
.
.

