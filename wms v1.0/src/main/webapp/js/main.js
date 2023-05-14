    // Submit alert
    $(document).ready(function(){
        $("#submit-file").click(function() {
            $("#submit-alert").removeClass("hide");
        });
        $("#delete-btn").click(function() {
            $("#modal").hide();
            $("#modal-alert").show();
        });
        
    });
    // Password Visibility
    $(document).ready(function(){
        $("#showPassword").click(function(){
            if($("#floatingPassword").attr("type") == "password"){
                $("#floatingPassword").attr("type", "text");
            }else{
                $("#floatingPassword").attr("type", "password");
            }
        });
    });

    $(document).ready(function(){
        // Copyright year
        $("#copyright-year").text(new Date().getFullYear());

        // Typing effects
        var text = "Welfare Management System";
        var i = 0;
        var speed = 150;
  
        function typeWriter() {
          if (i < text.length) {
            document.getElementById("demo").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }
  
        typeWriter();
    });

    // To-do-list
    // $(document).ready(function() {
    //     $("#add-task").click(function() {
    //       var task = $("#new-task").val();
    //       $("#todo-list").append("<div class='d-flex align-items-center border-bottom py-2 task'><input class='form-check-input m-0 checkbox' type='checkbox'><div class='w-100 ms-3'><div class='d-flex w-100 align-items-center justify-content-between'>" + task + "<button class='remove btn btn-sm'><i class='fa fa-times'></i></button></div></div></div>");
    //       $("#new-task").val("");
    //     });
        
    //     // Listen for a change event on the checkbox
    //     $("#todo-list").on("change", ".checkbox", function() {
    //       $(this).parent().toggleClass("completed");
    //     });
    
    //     // Listen for a click event on the remove button
    //     $("#todo-list").on("click", ".remove", function() {
    //       $(this).parent().parent().parent().remove();
    //     });
    //   });

    // Aid list
    $(document).ready(function() {
        $("input[type='checkbox']").change(function() {
          var row = $(this).closest("tr");
          if ($(this).hasClass("approve")) {
            row.find(".reject").prop("checked", false);
            row.find(".status").html("<p class='approveStat m-1'>Approved</p>");
            row.find(".action").html("<button class='submit-btn btn btn-sm btn-primary'>Submit</button>");
            
        } else {
            row.find(".approve").prop("checked", false);
            row.find(".status").html("<p class='rejectStat m-1'>Rejected</p>");
            row.find(".action").html("<button class='submit-btn btn btn-sm btn-primary'>Submit</button>");
          }
          $(".submit-btn").click(function() {
            $(this).text("Submitted");
            $(".submit-btn").addClass("submitted");
            $("#submit-alert").removeClass("hide");
        });
          if (!row.find(".approve").is(":checked") && !row.find(".reject").is(":checked")) {
            row.find(".status").html("<p class='pendingStat m-1'>Pending</p>");
            row.find(".action").empty();
          }
        });        
            
        $("#data-table").on("click", ".details-btn", function() {
            var row = $(this).closest("tr");
            var no = row.find("td:nth-child(1)").text();
            var date = row.find("td:nth-child(2)").text();
            var aidID = row.find("td:nth-child(3)").text();
            var appID = row.find("td:nth-child(4)").text();
            var ssmNo = row.find("td:nth-child(5)").text();
            var name = row.find("td:nth-child(6)").text();
            var addr = row.find("td:nth-child(7)").text();
            var dist = row.find("td:nth-child(8)").text();
            var post = row.find("td:nth-child(9)").text();
            var status = row.find("td:nth-child(12)").text();
            var platNo = row.find("td:nth-child(13)").text();
            var foodType = row.find("td:nth-child(13)").text();
            $("#no").text(no);
            $("#date").text(date);
            $("#aidID").text(aidID);
            $("#appID").text(appID);
            $("#ssmNo").text(ssmNo);
            $("#name").text(name);
            $("#addr").text(addr);
            $("#dist").text(dist);
            $("#post").text(post);
            $("#approval-status").text(status);
            $("#platNo").text(platNo);
            $("#foodType").text(foodType);
            $("#modal").show();
            $("#modal-alert").hide();
        });

        $(".close").click(function() {
              $("#modal").hide();
        });
        
      });

        //   Admin Data
        $(document).ready(function() {               
            $("#admin-table").on("click", ".admin-show", function() {
                var row = $(this).closest("tr");
                var no = row.find("td:nth-child(1)").text();
                var adminName = row.find("td:nth-child(2)").text();
                var adminEmail = row.find("td:nth-child(3)").text();
                var adminPhone = row.find("td:nth-child(4)").text();
                var adminPW = row.find("td:nth-child(5)").text();
                $("#no").text(no);
                $("#adminName").text(adminName);
                $("#adminEmail").text(adminEmail);
                $("#adminPhone").text(adminPhone);
                $("#adminPW").text(adminPW);
                $("#modal").show();
            });
            $(".close").click(function() {
                $("modal-alert").hide();
                $("#modal").hide();
            });  
            $(".close-alert").click(function() {
                $("#modal-alert").hide();
            });
                   
        });
    
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calendar
    $('#calendar').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Aid App Statistics
    var ctx1 = $("#app-stat").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                    label: "Death",
                    data: [5, 3, 5, 6, 6, 8, 9, 3, 5, 6, 6, 8, 9],
                    backgroundColor: "rgba(82, 70, 230, .7)"
                },
                {
                    label: "Accident",
                    data: [8, 3, 4, 6, 7, 5, 7, 3, 4, 6, 7, 5, 7],
                    backgroundColor: "rgba(82, 70, 230, .5)"
                },
                {
                    label: "Food",
                    data: [2, 5, 5, 5, 6, 7, 6, 5, 5, 5, 6, 7, 6],
                    backgroundColor: "rgba(82, 70, 230, .3)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });

    
})(jQuery);