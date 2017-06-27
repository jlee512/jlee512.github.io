/**
 * Created by julian on 25/06/2017.
 */

$(document).ready(function(){

    /*Initialise the frame count*/
    var frame_counter = 0;

    var image_filenames = [{"filename":"0012.frame1-5-9-15-21.png"},
                            {"filename":"0011.frame2-4.png"},
                            {"filename":"0010.frame3.png"},
                            {"filename":"0011.frame2-4.png"},
                            {"filename":"0012.frame1-5-9-15-21.png"},
                            {"filename":"0009.frame6-8.png"},
                            {"filename":"0008.frame7.png"},
                            {"filename":"0009.frame6-8.png"},
                            {"filename":"0012.frame1-5-9-15-21.png"},
                            {"filename":"0011.frame2-4.png"},
                            {"filename":"0010.frame3.png"},
                            {"filename":"0011.frame2-4.png"},
                            {"filename":"0012.frame1-5-9-15-21.png"},
                            {"filename":"0009.frame6-8.png"},
                            {"filename":"0008.frame7.png"},
                            {"filename":"0009.frame6-8.png"},
                            {"filename":"0012.frame1-5-9-15-21.png"},
                            {"filename":"0007.frame10-14.png"},
                            {"filename":"0006.frame11-13.png"},
                            {"filename":"0005.frame12.png"},
                            {"filename":"0006.frame11-13.png"},
                            {"filename":"0007.frame10-14.png"},
                            {"filename":"0012.frame1-5-9-15-21.png"},
                            {"filename":"0004.frame16-20.png"},
                            {"filename":"0003.frame17-19.png"},
                            {"filename":"0002.frame18.png"},
                            {"filename":"0003.frame17-19.png"},
                            {"filename":"0004.frame16-20.png"},
                            {"filename":"0012.frame1-5-9-15-21.png"},
                            {"filename":"0007.frame10-14.png"},
                            {"filename":"0006.frame11-13.png"},
                            {"filename":"0005.frame12.png"},
                            {"filename":"0006.frame11-13.png"},
                            {"filename":"0007.frame10-14.png"},
                            {"filename":"0012.frame1-5-9-15-21.png"},
                            {"filename":"0004.frame16-20.png"},
                            {"filename":"0003.frame17-19.png"},
                            {"filename":"0002.frame18.png"},
                            {"filename":"0003.frame17-19.png"},
                            {"filename":"0004.frame16-20.png"},
                            {"filename":"0012.frame1-5-9-15-21.png"}];

    var timer = setInterval(frameIteration, 50);

    function frameIteration() {

        console.log("Photos/frypananim/" + image_filenames[frame_counter].filename)

        $('.fryPan').attr("src", "Photos/frypananim/" + image_filenames[frame_counter].filename);

        frame_counter ++;

        /*If the end of the 'reel' is reached, restart the animation*/
        if (frame_counter == 41) {
            frame_counter = 0;
        }

    }

});
