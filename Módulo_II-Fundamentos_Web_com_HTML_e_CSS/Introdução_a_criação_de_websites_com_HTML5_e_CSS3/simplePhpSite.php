<!-- 
  Copyright 2022 Franklin Siqueira.
  SPDX-License-Identifier: Apache-2.0 -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/img/favicons/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>
      My First PHP Site
    </title>
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> -->
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
    <script>
    $( function() {
      $( "#franklinAccordion" ).accordion();
    } );
    </script>
    <style type="text/css">
      .linha {
        font-weight: bold;
        color: green;
        padding-left: 10px;
        line-height: 20px;
        border-color: black;
      }
      .accord-paragraph {
        font-weight: bold;
        color: green;
        padding-left: 20px;
        line-height: 35px;
      }
    </style>
  </head>
  <body>
    <div id="franklinAccordion">
      <?php
        for ( $i = 0; $i < 10; $i++) {
          echo "<h3 class=\"linha\">Accordion Item # $i </h3>
          <div>
          <p class=\"accord-paragraph\">This is part # $i of the jQuery Accordion paragraph...</p>
          </div>";
        }
        ?>
    </div>
  </body>
  <script type="text/javascript">
    $(document).ready(function() {
      alert("Done!!!")
    })
    </script>
<!-- // print( "<span class=\"linha\">Line number = ".$i."</span><br />" ); -->
</html>