/* Sombreado en contacto */

$(document).ready(function(){
    $("#contact-footer .mail").hover(function(){
      $("#contact-footer .mail-container").css("background-color", " rgba(37, 35, 35, 0.05)");
      }, function(){
      $("#contact-footer .mail-container").css("background-color", "transparent");
    });

    $(".social-icons-footer .icon-facebook").hover(function(){
      $("#social-contact,.social-icons-footer .icon-twitter,.social-icons-footer .icon-instagram ").css("background-color", " rgba(37, 35, 35, 0.05)");
      }, function(){
      $("#social-contact,.social-icons-footer .icon-twitter,.social-icons-footer .icon-instagram").css("background-color", "");
    });

    $(".social-icons-footer .icon-twitter").hover(function(){
        $("#social-contact,.social-icons-footer .icon-facebook,.social-icons-footer .icon-instagram").css("background-color", " rgba(37, 35, 35, 0.05)");
        }, function(){
        $("#social-contact,.social-icons-footer .icon-facebook,.social-icons-footer .icon-instagram").css("background-color", "");
      });

      $(".social-icons-footer .icon-instagram").hover(function(){
        $("#social-contact,.social-icons-footer .icon-twitter,.social-icons-footer .icon-facebook").css("background-color", " rgba(37, 35, 35, 0.05)");
        }, function(){
        $("#social-contact,.social-icons-footer .icon-twitter,.social-icons-footer .icon-facebook").css("background-color", "");
      });
  });