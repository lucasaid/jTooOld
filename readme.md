# jTooOld
### A jQuery plugin to alert users to how bad IE8 and below is. ###

*Currently this plugin will only work with jQuery 1.8.3 and below due to browser detection. Feature detection will come in later*

## Basic Use

    $(document).ready(function(e) {
        $.jTooOld();
    });

## Debug Mode
*Will run in all browsers*

    $(document).ready(function(e) {
        $.jTooOld({
            debug:true,
        });
    });
    
## Overwrite Text

    $(document).ready(function(e) {
        $.jTooOld({
            header:"Heading text here",
            text:"Paragraph text here",
            solved:"Text that is shown after equation is solved here",
        });
    });
    
## Enable/Disable equations

    $(document).ready(function(e) {
        $.jTooOld({
            equations:true,
        });
    });

    $(document).ready(function(e) {
        $.jTooOld({
            equations:false,
        });
    });
   
## Enable/Disable browsers
*Shows icon links that will link user to the download page of a different browser*

    $(document).ready(function(e) {
        $.jTooOld({
            browsers:true,
        });
    });

    $(document).ready(function(e) {
        $.jTooOld({
            browsers:false,
        });
    });
    
## Answers to equations

Question: 1/2x +1/2(1/2x + 1/2(1/2x +1/2(1/2x + ... = y....Find x
Answer: y

Question: y = log x....Find x
Answer: 1

Question: 2(40x-10)+45-15=3(25x+15)-5....Find x
Answer: 5

Question: 0x + 7 + 5x = 2x + 30 + 40...Find x
Answer: 21