$(document).ready(function() {
    console.log('ready from microposts.js');

    var area = $('textarea#micropost_content');
    if (area.length > 0 && $('span#rest_count').length > 0) {
        // micropostの残り文字数をカウントする。
        area.bind('keyup', function() {
            console.log('change! ' + $(this).val());

            var val = $(this).val();
            var length = val.length + val.split("\n").length - 1;
            var rest = 140 - length;
            var rest_count = $('span#rest_count');
            rest_count.text(rest);
            if (rest < 30) {
                rest_count.css('color', 'red');
            } else {
                rest_count.css('color', 'green');
            }

        });

        $('span#rest_count').text(140);
        console.log('selector is true!');
    } else {
//        console.log('selector is false.');
    }
});
