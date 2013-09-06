
;(function($){
    
    var yTOC, winHeight, tocOverflow, tocVerticalPadding;

    // init
    $(function(){
        
        initVar();
        addEvent();
    });

    function initVar(){
        var $toc = $("#table-of-contents");
        yTOC = $("#preamble").height() + $(".title").outerHeight();
        winHeight = $(window).height();
        tocOverflow = $toc.height() > winHeight;
        tocVerticalPadding = toInt($toc.css("padding-top")) + toInt($toc.css("padding-bottom"));
    }

    function addEvent(){
        $(window).scroll(function(){
            var $TOC = $("#table-of-contents"), 
                fixed = $TOC.hasClass("fixed"), 
                scrollTop = $(window).scrollTop();

            if(scrollTop > yTOC && !fixed) {
                $TOC.addClass("fixed");
                if(tocOverflow) $TOC.height(winHeight - tocVerticalPadding);
            }
            else if(scrollTop < yTOC && fixed) {
                $TOC.removeClass("fixed")
                if(tocOverflow) $TOC.height("auto");
            }
        });
    }

    function toInt(val) {
        var i = val.indexOf("px");
        if(i != -1) {
            return parseInt(val.substring(0, i));
        }
        return parseInt(val);
    }


})(jQuery);
