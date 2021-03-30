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

            var $content = $(this);
            var useLineHeight = parseInt($content.css('line-height'));
            var nanLineHeight = parseInt($content.css('font-size')) * 1.4;
            var lineHeight = isNaN(useLineHeight) == false ? useLineHeight : nanLineHeight;
            // var lineNum = line || 1;
            var multi = line;
            var thisClone = $(this.cloneNode(true)).hide()
                .css({'position':'absolute','overflow':'visible','maxHeight':'none'})
                .width(multi ? $content.width() : 'auto')
                .height(multi ? 'auto' : $content.height());
            
            // $content.css({'height':lineHeight * lineNum,'overflow':'hidden'})
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
     
            while (text.length > 0 && func()) {
                thisClone.html(text);
                text = text.substr(0, text.length - 1);
                set_text(text);
            }
            
            $content.html(thisClone.html());
            thisClone.remove();
        });
    };
})(jQuery);


// ex)
// 로딩 시 데이터 많을 경우 느림
// 기본적인 높이값(height or max-height) , overflow:hidden 지정으루 숨김 처리 필요

$('.post-title').ellipsis();
$('.post-content-text').ellipsis({line:2});

$('.ellipsis').ellipsis();
$('.ellipsis-line2').ellipsis({line:2});

